import type { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';

/**
 * Webhook para receber confirmações de pagamento
 *
 * Eventos aceitos:
 * - cart_paid: Pagamento via carrinho confirmado
 * - pix_paid: Pagamento via PIX confirmado
 *
 * POST /api/payment-webhook
 * Body: {
 *   event: "cart_paid" | "pix_paid",
 *   payment_id: string,
 *   customer_email: string,
 *   amount: number,
 *   metadata: { order_id: string }
 * }
 */

interface PaymentData {
  status: 'paid' | 'pending';
  event: string;
  paidAt: string;
  email: string;
}

// Armazenamento em /tmp (persiste durante vida da instância serverless)
const STORAGE_PATH = '/tmp/payments.json';

async function getPayments(): Promise<Record<string, PaymentData>> {
  try {
    const data = await fs.readFile(STORAGE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function savePayment(orderId: string, data: PaymentData): Promise<void> {
  const payments = await getPayments();
  payments[orderId] = data;
  await fs.writeFile(STORAGE_PATH, JSON.stringify(payments, null, 2));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apenas aceitar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      event,
      payment_id,
      customer_email,
      amount,
      metadata
    } = req.body;

    console.log('Webhook received:', {
      event,
      payment_id,
      customer_email,
      amount,
      metadata
    });

    // Validar eventos aceitos
    const validEvents = ['cart_paid', 'pix_paid'];
    if (!validEvents.includes(event)) {
      return res.status(400).json({
        error: `Invalid event. Expected: ${validEvents.join(', ')}`
      });
    }

    // Validar campos obrigatórios
    if (!payment_id || !customer_email) {
      return res.status(400).json({
        error: 'Missing required fields: payment_id, customer_email'
      });
    }

    // Extrair order_id do metadata (se fornecido)
    const orderId = metadata?.order_id || payment_id;

    // Salvar pagamento confirmado
    await savePayment(orderId, {
      status: 'paid',
      event,
      paidAt: new Date().toISOString(),
      email: customer_email
    });

    console.log(`Payment confirmed for order: ${orderId}`)

    // Retornar sucesso
    return res.status(200).json({
      success: true,
      message: 'Payment confirmed',
      order_id: orderId
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Exportar função helper para verificar status de pagamento
export async function checkPaymentStatus(orderId: string): Promise<PaymentData | undefined> {
  const payments = await getPayments();
  return payments[orderId];
}

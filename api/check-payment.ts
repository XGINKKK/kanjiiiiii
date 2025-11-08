import type { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';

/**
 * Endpoint para verificar status de pagamento
 *
 * GET /api/check-payment?order_id=xxx
 *
 * NOTA: Este endpoint usa armazenamento em /tmp.
 * Em produção, deve usar Vercel KV ou banco de dados.
 */

interface PaymentData {
  status: 'paid' | 'pending';
  event: string;
  paidAt: string;
  email: string;
}

const STORAGE_PATH = '/tmp/payments.json';

async function getPayments(): Promise<Record<string, PaymentData>> {
  try {
    const data = await fs.readFile(STORAGE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const orderId = req.query.order_id as string;

    if (!orderId) {
      return res.status(400).json({
        error: 'Missing order_id parameter'
      });
    }

    // Verificar status no armazenamento
    const payments = await getPayments();
    const payment = payments[orderId];

    if (!payment) {
      return res.status(200).json({
        status: 'pending',
        message: 'Payment not found or not confirmed yet'
      });
    }

    return res.status(200).json({
      status: payment.status,
      paidAt: payment.paidAt,
      email: payment.email
    });

  } catch (error) {
    console.error('Check payment error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}

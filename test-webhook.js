/**
 * Script para testar o webhook de pagamento
 *
 * Como usar:
 * 1. Acesse http://localhost:8080/analisador
 * 2. Preencha o formulário e vá até a página de pagamento
 * 3. Copie o order_id exibido
 * 4. Execute: node test-webhook.js <order_id>
 *
 * Exemplo: node test-webhook.js order_1699564320123_abc123
 */

const orderId = process.argv[2];

if (!orderId) {
  console.error('❌ Erro: Forneça o order_id como argumento');
  console.log('\nUso:');
  console.log('  node test-webhook.js <order_id>');
  console.log('\nExemplo:');
  console.log('  node test-webhook.js order_1699564320123_abc123');
  process.exit(1);
}

const webhookUrl = process.env.WEBHOOK_URL || 'http://localhost:8080/api/payment-webhook';

const payload = {
  event: 'pix_paid',
  payment_id: orderId,
  customer_email: 'teste@exemplo.com',
  amount: 97,
  metadata: {
    order_id: orderId
  }
};

console.log('🚀 Testando webhook de pagamento...\n');
console.log('📍 URL:', webhookUrl);
console.log('📦 Payload:', JSON.stringify(payload, null, 2));
console.log('\n⏳ Enviando...\n');

fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
  .then(response => {
    console.log('📊 Status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('✅ Resposta:', JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n🎉 Sucesso! Pagamento confirmado.');
      console.log('💡 Aguarde 3 segundos e o plano será gerado automaticamente na página.');
    } else {
      console.log('\n❌ Erro:', data.error || 'Resposta inesperada');
    }
  })
  .catch(error => {
    console.error('\n❌ Erro ao chamar webhook:', error.message);
    console.log('\n💡 Dicas:');
    console.log('  - Verifique se o servidor está rodando (npm run dev)');
    console.log('  - Confirme que a URL está correta');
    console.log('  - Se estiver em produção, use: WEBHOOK_URL=https://seusite.com/api/payment-webhook node test-webhook.js <order_id>');
  });

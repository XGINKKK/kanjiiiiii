# 🧪 Como Testar o Analisador Pedagógico IA

## 📋 Pré-requisitos

1. Servidor rodando: `npm run dev`
2. Acesso ao navegador
3. Node.js instalado

## 🚀 Fluxo Completo de Teste

### Passo 1: Acesse a página do upsell

```
http://localhost:8080/analisador
```

Ou em produção:
```
https://seusite.com/analisador
```

### Passo 2: Aceite a oferta

1. Clique no botão **"Quero Meu Plano Personalizado Agora! 🚀"**
2. Você será levado para o formulário

### Passo 3: Preencha o formulário

Preencha pelo menos os campos obrigatórios (marcados com ⭐):
- **Idade da criança**: ex: 5 anos
- **Nível atual**: ex: "Reconhece algumas letras"
- **Tempo disponível**: ex: "15-20 minutos"

Preencha também (opcional mas recomendado para melhor personalização):
- Nome da criança
- Condições (TDAH, Autismo, etc.)
- Dificuldades específicas
- Preocupações dos pais
- Estilo de aprendizagem

### Passo 4: Submeta o formulário

1. Clique em **"Continuar para Pagamento 💳"**
2. Você será redirecionado para a página de pagamento

### Passo 5: Copie o Order ID

Na página de pagamento, você verá:
```
ID do Pedido: order_1699564320123_abc123
```

**Copie esse ID!** Você vai precisar dele.

### Passo 6: Simule o pagamento

#### Opção A: Usando o script Node.js (Recomendado)

```bash
node test-webhook.js order_1699564320123_abc123
```

Substitua `order_1699564320123_abc123` pelo ID que você copiou.

#### Opção B: Usando cURL

```bash
curl -X POST http://localhost:8080/api/payment-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "event": "pix_paid",
    "payment_id": "order_1699564320123_abc123",
    "customer_email": "teste@exemplo.com",
    "amount": 97,
    "metadata": {
      "order_id": "order_1699564320123_abc123"
    }
  }'
```

#### Opção C: Usando Postman/Insomnia

**URL:** `POST http://localhost:8080/api/payment-webhook`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "event": "pix_paid",
  "payment_id": "order_1699564320123_abc123",
  "customer_email": "teste@exemplo.com",
  "amount": 97,
  "metadata": {
    "order_id": "order_1699564320123_abc123"
  }
}
```

### Passo 7: Aguarde a geração

1. Volte para a aba do navegador com a página de pagamento
2. Em até **3 segundos**, a página detectará o pagamento
3. O plano será gerado automaticamente pela IA (leva 30-60 segundos)
4. Você será redirecionado para a página do plano personalizado

## ✅ Resultado Esperado

Você deve ver:

1. ✅ Webhook retorna: `{ "success": true, "message": "Payment confirmed", ... }`
2. ✅ Página detecta pagamento e mostra "Gerando plano..."
3. ✅ Plano de 4 semanas é exibido com todas as seções:
   - Análise Inicial
   - Semana 1, 2, 3, 4 (com atividades diárias)
   - Estratégias Personalizadas
   - Como Avaliar Progresso
   - Dicas Finais

## 🔧 Troubleshooting

### Erro: "Payment not found"
- Verifique se você copiou o `order_id` correto
- Confirme que o servidor está rodando

### Erro: "Cannot connect to server"
- Verifique se `npm run dev` está rodando
- Confirme a URL (localhost:8080 ou sua URL de produção)

### Página não detecta pagamento
- Abra o Console do navegador (F12)
- Verifique se há erros de CORS ou network
- Confirme que o polling está ativo (deve fazer request a cada 3s)

### Plano não é gerado
- Verifique se a `OPENAI_API_KEY` está configurada
- Veja logs do servidor para mensagens de erro
- Confirme que os dados do formulário foram salvos

## 📝 Eventos de Webhook Aceitos

O webhook aceita dois tipos de eventos:

1. **`pix_paid`** - Pagamento via PIX confirmado
2. **`cart_paid`** - Pagamento via carrinho (cartão de crédito, etc.)

Ambos liberam o plano da mesma forma!

## 🌐 Testando em Produção

Se estiver testando em produção, use a URL de produção:

```bash
# Com o script
WEBHOOK_URL=https://seusite.com/api/payment-webhook node test-webhook.js order_123

# Com cURL
curl -X POST https://seusite.com/api/payment-webhook \
  -H "Content-Type: application/json" \
  -d '{ ... }'
```

## 🔐 Segurança

⚠️ **IMPORTANTE para produção:**

1. Adicione validação de assinatura no webhook
2. Migre storage de `/tmp` para Vercel KV
3. Adicione rate limiting
4. Configure CORS apropriadamente
5. Use HTTPS obrigatório

## 📞 Suporte

Se encontrar problemas, verifique:
- Console do navegador (F12)
- Logs do servidor
- Network tab (F12 → Network)

---

✅ **Pronto para testar!** Siga os passos acima e veja a mágica acontecer! 🎉

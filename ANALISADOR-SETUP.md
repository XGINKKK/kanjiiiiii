# 🎯 Setup do Analisador Pedagógico IA

## 📋 Arquitetura Simplificada

O upsell do Analisador Pedagógico foi dividido em **2 páginas separadas** para máxima flexibilidade:

### 1. `/analisador` - Landing Page de Vendas 💰

**O que faz:**
- Apresenta a oferta do Analisador Pedagógico IA
- Mostra benefícios, preço (R$ 97), garantia
- Botão "Quero Meu Plano Personalizado Agora!"

**O que acontece ao clicar:**
- Redireciona para seu checkout externo (Stripe, Hotmart, Mercado Pago, etc.)

**Como configurar:**
Edite [src/pages/UpsellAnalisador.tsx](src/pages/UpsellAnalisador.tsx):

```typescript
const CHECKOUT_URL = "https://seugateway.com/checkout/analisador-pedagogico";
```

Substitua pela URL real do seu checkout.

### 2. `/formulario` - Gerador do Plano 📝

**O que faz:**
- Formulário detalhado sobre a criança
- Gera plano personalizado de 4 semanas com IA (GPT-4o)
- Exibe o plano na própria página

**Quando usar:**
Após o cliente pagar, envie o link `/formulario` para ele via:
- Email de confirmação
- WhatsApp
- Área de membros
- Página de agradecimento do checkout

## 🔄 Fluxo Completo

```
1. Cliente acessa /analisador
   ↓
2. Vê oferta do plano personalizado (R$ 97)
   ↓
3. Clica "Quero Meu Plano"
   ↓
4. É redirecionado para SEU checkout externo
   ↓
5. Realiza pagamento
   ↓
6. Você envia link /formulario para o cliente
   ↓
7. Cliente preenche formulário sobre a criança
   ↓
8. IA gera plano de 4 semanas personalizado
   ↓
9. Plano é exibido na página (pode salvar/imprimir)
```

## ⚙️ Configuração

### Passo 1: Configure a URL do Checkout

Edite `src/pages/UpsellAnalisador.tsx`:

```typescript
// Linha 7
const CHECKOUT_URL = "https://seu-checkout.com/analisador";
```

**Exemplos de URLs:**
- Stripe: `https://buy.stripe.com/xxxxx`
- Hotmart: `https://pay.hotmart.com/xxxxx`
- Mercado Pago: `https://www.mercadopago.com/xxxxx`
- Kiwify: `https://kiwify.com.br/xxxxx`

### Passo 2: Configure sua API Key da OpenAI

No Vercel, adicione a variável de ambiente:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxx
```

### Passo 3: Configure o Email de Confirmação

Após o pagamento ser confirmado, seu gateway deve enviar um email com:

```
Parabéns! Seu pagamento foi confirmado.

Agora gere seu Plano Personalizado de 4 Semanas:
👉 https://seusite.com/formulario

Este link é exclusivo para você. Preencha o questionário
e receba seu plano em menos de 1 minuto!
```

## 📧 Exemplos de Integração

### Hotmart

No Hotmart, configure um webhook de `PURCHASE_COMPLETE` que envia email com o link `/formulario`.

### Stripe

No Stripe, use o [Customer Portal](https://stripe.com/docs/customer-management) ou envie um email usando Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/webhook
```

### Kiwify

Na Kiwify, configure a página de agradecimento para redirecionar para `/formulario`.

## 🎨 Personalização

### Mudar o Preço

Edite `src/pages/UpsellAnalisador.tsx` linha 164:

```typescript
<p className="font-fredoka text-6xl md:text-7xl font-bold text-navy mb-2">
  R$ 97
</p>
```

### Mudar os Benefícios

Edite a seção de benefícios (linhas 94-128) em `UpsellAnalisador.tsx`.

### Customizar o Formulário

Edite `src/pages/FormularioPlano.tsx` para adicionar/remover campos.

## 🔧 Manutenção

### Atualizar o Prompt da IA

O prompt que gera o plano está em [api/generate-plan.ts](api/generate-plan.ts).

Para ajustar o que a IA gera, edite o `prompt` na linha 30.

### Custo da API

- Modelo usado: **GPT-4o**
- Custo estimado: ~$0.10-0.30 por plano gerado
- Tokens: ~4000 tokens de resposta

Para economizar, você pode:
1. Usar GPT-4o-mini (mais barato)
2. Reduzir max_tokens de 4000 para 3000
3. Simplificar o prompt

## 📊 Analytics (Opcional)

### Rastrear Conversões

Adicione eventos do Google Analytics:

```typescript
// Em UpsellAnalisador.tsx, dentro de handleBuyNow:
gtag('event', 'click_buy_analisador', {
  value: 97,
  currency: 'BRL'
});

// Em FormularioPlano.tsx, após gerar plano:
gtag('event', 'plan_generated', {
  age: formData.childAge,
  conditions: formData.conditions.join(',')
});
```

## 🆘 Troubleshooting

### "Erro ao gerar plano"
- Verifique se `OPENAI_API_KEY` está configurada
- Verifique logs da Vercel Functions
- Confirme que tem créditos na OpenAI

### Plano não aparece
- Abra DevTools (F12) → Console
- Veja se há erros de API
- Confirme que o formulário foi enviado

### Checkout não redireciona
- Verifique se `CHECKOUT_URL` está correta
- Teste abrindo a URL diretamente no navegador

## 🚀 Deploy

Tudo já está configurado! Apenas:

1. Configure `CHECKOUT_URL` em `UpsellAnalisador.tsx`
2. Configure `OPENAI_API_KEY` no Vercel
3. Commit e push:
```bash
git add .
git commit -m "Configure checkout URL"
git push kanjiiiiii main
```

4. Aguarde o deploy automático da Vercel

## 📝 URLs Finais

- **Landing de Vendas:** `https://seusite.com/analisador`
- **Formulário do Plano:** `https://seusite.com/formulario`

Envie `/formulario` para clientes após a compra! 🎉

---

**Dúvidas?** Verifique os arquivos:
- [src/pages/UpsellAnalisador.tsx](src/pages/UpsellAnalisador.tsx) - Landing de vendas
- [src/pages/FormularioPlano.tsx](src/pages/FormularioPlano.tsx) - Formulário e plano
- [api/generate-plan.ts](api/generate-plan.ts) - Geração do plano pela IA

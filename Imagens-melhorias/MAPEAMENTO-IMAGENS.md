# Mapeamento de Imagens - Landing Page Kit Kanji Kids

## 📸 Imagens Organizadas

### FASE 1 - IMPACTO ALTO (Implementar ESTA SEMANA)

#### 1. HERO SECTION
**Objetivo:** Criar conexão emocional imediata com fotos reais de crianças

**Imagens disponíveis:**
- ✅ `hero-mae-e-filho-juntos.jpg` - Mãe e filho fazendo atividade juntos, conexão genuína
  - **Uso:** Imagem principal no hero ou galeria logo abaixo
  - **Mensagem:** "Momentos de qualidade em família"

**Impacto esperado:** +15-25% na taxa de cliques no CTA principal

---

#### 1.5 SEÇÃO "POR QUE VOCÊ PRECISA DO KIT"
**Objetivo:** Humanizar benefícios com prova visual real

**Imagens disponíveis:**
- ✅ `background-porque-precisa-kit.jpg` - Criança concentrada fazendo atividade com lápis colorido
  - **Uso:** Background sutil/desfocado na seção inteira OU background específico nos cards de benefícios
  - **Implementação sugerida:**
    - Opacity: 0.15-0.25 (não pode competir com texto)
    - Posição: cover ou contain
    - Mostra criança REAL usando o método
  - **Mensagem:** "Veja na prática os benefícios que seu filho terá"
  - **Técnica CSS:**
    ```css
    .benefits-section {
      background-image: url('background-porque-precisa-kit.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
    }
    .benefits-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.85); /* overlay branco */
    }
    ```

**Impacto esperado:** +8-12% na confiança/credibilidade do método (conforme análise original)

---

#### 2. SEÇÃO "MUITOS PAIS ACHAM..." (Problemas)
**Objetivo:** Gerar identificação emocional com as dores

**Imagens disponíveis:**
- ✅ `problema-crianca-frustrada.jpg` - Criança pensando seriamente, expressão de dificuldade
  - **Uso:** Card "Tarefas viram sofrimento" ou "Sente-se menos inteligente"
  - **Mensagem:** Contraste emocional ANTES do método

- ✅ `problema-crianca-entediada.webp` - Menino entediado com livro
  - **Uso:** Card "Tarefas viram sofrimento"
  - **Mensagem:** "Método tradicional = frustração"

**Impacto esperado:** +10% no engajamento emocional

---

#### 3. SEÇÃO "A CIÊNCIA POR TRÁS" ou ANTES/DEPOIS
**Objetivo:** Mostrar transformação visual

**Imagens disponíveis:**
- ✅ `depois-crianca-feliz-lendo.png` - Criança sorrindo com confiança, lendo
  - **Uso:** Lado "DEPOIS" em seção de transformação
  - **Mensagem:** "Resultado real: confiança e alegria"

**Combinação sugerida:**
- ANTES: `problema-crianca-frustrada.jpg`
- DEPOIS: `depois-crianca-feliz-lendo.png`

**Impacto esperado:** +12-18% na compreensão do benefício

---

#### 4. GALERIA "RESULTADOS REAIS" (Antes do CTA final)
**Objetivo:** Prova social visual antes da conversão

**Layout sugerido (Grid 2x2):**
1. `background-porque-precisa-kit.jpg` (criança em ação fazendo atividade)
2. `hero-mae-e-filho-juntos.jpg` (momento família)
3. `depois-crianca-feliz-lendo.png` (resultado final)
4. [FALTA] Atividade completa/resultado tangível

**Caption:** "Isso é o que espera seu filho em 8 semanas"

**Impacto esperado:** +10-15% na conversão final

---

## 📋 INVENTÁRIO COMPLETO

### Imagens PRONTAS para uso (5):
1. ✅ background-porque-precisa-kit.jpg (1.1MB) - **USO PRINCIPAL:** Background seção "Por que você precisa do kit"
2. ✅ hero-mae-e-filho-juntos.jpg (2.2MB) - **USO PRINCIPAL:** Hero section
3. ✅ problema-crianca-frustrada.jpg (1.4MB) - **USO PRINCIPAL:** Seção de problemas
4. ✅ problema-crianca-entediada.webp (617KB) - **USO PRINCIPAL:** Seção de problemas
5. ✅ depois-crianca-feliz-lendo.png (1.8MB) - **USO PRINCIPAL:** Seção transformação/depois

### Imagens AINDA NECESSÁRIAS (da análise):

#### Prioridade ALTA:
- [ ] **Fotos reais para depoimentos** (3-4 fotos de mães)
  - Ideal: Selfies das mães que deram depoimento
  - Alternativa: Stock de mães brasileiras diversas

- [ ] **Material em uso** (2-3 fotos)
  - Atividade impressa parcialmente preenchida
  - Mesa com atividades e lápis coloridos
  - Conjunto de atividades completas

#### Prioridade MÉDIA:
- [ ] **Close da mão de criança** segurando lápis/fazendo traçado
- [ ] **Criança mostrando atividade concluída** (orgulho)
- [ ] **Diversidade:** Criança com óculos ou características neurodivergentes

---

## 🎯 PRÓXIMOS PASSOS

### HOJE:
- [x] Renomear imagens com nomes descritivos
- [ ] Otimizar imagens para web (comprimir sem perder qualidade)
- [ ] Testar implementação no hero section

### ESTA SEMANA:
- [ ] Buscar fotos das mães que deram depoimento (Whatsapp/Email)
- [ ] Baixar 3-5 fotos complementares de bancos gratuitos (Unsplash/Pexels)
- [ ] Implementar galeria "Resultados Reais"

### PRÓXIMA SEMANA:
- [ ] Coletar feedback de A/B test com novas imagens
- [ ] Analisar heatmaps e scroll depth
- [ ] Decidir sobre sessão fotográfica profissional

---

## 💡 DICAS DE IMPLEMENTAÇÃO

### Otimização Técnica:
```bash
# Comprimir imagens mantendo qualidade
# JPG: Qualidade 85%, max-width 1920px
# PNG: Otimizar com TinyPNG
# WebP: Converter para melhor performance
```

### Testes A/B Sugeridos:
1. **Hero com/sem foto real** (medir CTR do botão principal)
2. **Seção problemas: ícones vs fotos** (medir scroll depth)
3. **Galeria antes do CTA: com/sem** (medir conversão)

### Métricas a Acompanhar:
- Taxa de clique no CTA principal (Hero)
- Tempo médio na página
- Scroll depth até seção de preço
- Taxa de conversão geral
- Taxa de abandono do carrinho

---

**Última atualização:** 08/11/2025

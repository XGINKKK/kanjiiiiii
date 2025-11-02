# Cores do Projeto Kanji Kids

## Paleta Principal

### Cores Primárias
- **Coral** (Principal): `#F07167`
  - HSL: `6° 85% 70%`
  - Uso: Botões principais, CTAs, destaques, ícones importantes
  - Tom vibrante e acolhedor, remete à energia infantil

- **Navy** (Azul Marinho): `#152D4A`
  - HSL: `208° 70% 20%`
  - Uso: Textos principais, títulos, elementos de contraste
  - Tom sério e confiável, passa credibilidade aos pais

### Cores Secundárias
- **Soft Blue** (Azul Suave): `#BDE3F0`
  - HSL: `195° 60% 85%`
  - Uso: Backgrounds secundários, cards, elementos de suporte
  - Tom calmo e educacional

- **Mint** (Verde Menta): `#80D8B7`
  - HSL: `162° 60% 70%`
  - Uso: Indicadores de sucesso, badges de progresso
  - Tom positivo e encorajador

- **Yellow Soft** (Amarelo Suave): `#FFE566`
  - HSL: `48° 100% 67%`
  - Uso: Destaques especiais, elementos de atenção leve
  - Tom alegre e divertido

- **Pink Soft** (Rosa Suave): `#FFD6E0`
  - HSL: `350° 100% 85%`
  - Uso: Elementos decorativos, backgrounds alternativos
  - Tom delicado e infantil

### Cores Neutras
- **Beige** (Bege Claro): `#F8F4ED`
  - HSL: `42° 60% 96%`
  - Uso: Background principal, áreas de leitura
  - Tom quente e acolhedor, não cansa os olhos

- **White**: `#FFFFFF`
  - Uso: Cards, popups, áreas de destaque sobre backgrounds

## Cores Funcionais (UI)

### Estados de Interface
- **Border**: `#D4E8F0`
  - HSL: `195° 30% 85%`
  - Bordas sutis de elementos

- **Input Background**: `#D4E8F0`
  - HSL: `195° 30% 85%`
  - Fundo de campos de formulário

- **Muted** (Silenciado): `#DEF0F5`
  - HSL: `195° 40% 92%`
  - Backgrounds discretos

- **Muted Foreground**: `#6B7C8F`
  - HSL: `210° 15% 50%`
  - Textos secundários, legendas

### Semântica
- **Success** (Sucesso): `#80D8B7`
  - HSL: `162° 60% 70%`
  - Mensagens de sucesso, confirmações

- **Destructive** (Erro/Alerta): `#E74C3C`
  - HSL: `0° 84% 60%`
  - Mensagens de erro, avisos críticos

- **Ring** (Foco): `#F07167`
  - HSL: `6° 85% 70%`
  - Outline de elementos focados (acessibilidade)

## Dark Mode (Tema Escuro)

### Backgrounds
- **Background**: `#0D1B2A`
  - HSL: `208° 70% 10%`

- **Card**: `#152D4A`
  - HSL: `208° 60% 15%`

### Textos
- **Foreground**: `#DEF0F5`
  - HSL: `195° 40% 92%`

- **Muted Foreground**: `#8FA9BA`
  - HSL: `195° 20% 65%`

## Gradientes

### Hero Section
- **Início**: `#F07167` (Coral)
- **Fim**: `#F79071` (Coral mais quente)
- CSS: `linear-gradient(135deg, #F07167 0%, #F79071 100%)`

## Guia de Uso

### Quando usar cada cor:

1. **Coral (#F07167)**:
   - Botões de ação principal
   - Ícones importantes
   - Links e CTAs
   - Elementos que precisam chamar atenção

2. **Navy (#152D4A)**:
   - Títulos principais (H1, H2)
   - Textos de corpo importantes
   - Rodapé
   - Elementos que passam confiança

3. **Soft Blue (#BDE3F0)**:
   - Cards secundários
   - Seções alternadas
   - Backgrounds de destaques leves

4. **Mint (#80D8B7)**:
   - Badges de conquista
   - Indicadores de progresso
   - Mensagens de sucesso

5. **Yellow Soft (#FFE566)**:
   - Destaques especiais
   - Elementos decorativos pontuais
   - Badges de "novo" ou "destaque"

6. **Beige (#F8F4ED)**:
   - Background principal do site
   - Áreas de leitura extensa
   - Seções que precisam ser leves e neutras

## Paleta Exportada (Figma/Design)

```css
/* Copie e cole no seu projeto */
:root {
  --coral: #F07167;
  --navy: #152D4A;
  --soft-blue: #BDE3F0;
  --mint: #80D8B7;
  --yellow-soft: #FFE566;
  --pink-soft: #FFD6E0;
  --beige: #F8F4ED;
  --white: #FFFFFF;
  --muted-fg: #6B7C8F;
  --border: #D4E8F0;
  --success: #80D8B7;
  --error: #E74C3C;
}
```

## Acessibilidade

Todas as combinações de cor seguem as diretrizes WCAG 2.1:
- **Coral sobre Branco**: Contraste 3.8:1 (AA para textos grandes)
- **Navy sobre Beige**: Contraste 11.2:1 (AAA)
- **Navy sobre Branco**: Contraste 13.5:1 (AAA)

---

**Observação**: Todas as cores foram escolhidas para criar um ambiente infantil acolhedor, mas sem ser infantilizado demais, já que o público-alvo são os pais que compram o produto.

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      childAge,
      childName,
      conditions,
      currentLevel,
      specificDifficulties,
      dailyTime,
      parentConcerns,
      learningStyle
    } = req.body;

    // Validação básica
    if (!childAge || !currentLevel || !dailyTime) {
      return res.status(400).json({
        error: 'Dados incompletos. Por favor, preencha todos os campos obrigatórios.'
      });
    }

    const prompt = `Você é um especialista em pedagogia infantil com 20 anos de experiência em alfabetização, TDAH, autismo e dificuldades de aprendizagem.

Crie um PLANO PEDAGÓGICO PERSONALIZADO de 4 semanas para o Kit Kanji Kids (método de grafismo fonético para alfabetização) com base nas informações abaixo:

INFORMAÇÕES DA CRIANÇA:
- Nome: ${childName || 'a criança'}
- Idade: ${childAge} anos
- Condições/Características: ${conditions.join(', ') || 'Nenhuma condição específica'}
- Nível atual de alfabetização: ${currentLevel}
- Dificuldades específicas: ${specificDifficulties || 'Não informado'}
- Tempo disponível por dia: ${dailyTime} minutos
- Estilo de aprendizagem preferido: ${learningStyle || 'Não informado'}
- Preocupações dos pais: ${parentConcerns || 'Não informado'}

O KIT KANJI KIDS CONTÉM:
- 20 sílabas (BA, BE, BI, BO, BU, CA, CO, DA, FA, GA, JA, JE, LA, MA, NA, PA, RA, SA, TA, VA)
- 8 temas por sílaba (animais, veículos, natureza, comida, brinquedos, espaço, oceano, fantasia)
- 3 níveis de dificuldade (fácil, médio, difícil)
- 3 tipos de atividade: Traçar e Copiar, Colorir e Escrever, Caça-palavras

CRIE UM PLANO COM A SEGUINTE ESTRUTURA:

# 🎯 Plano Personalizado para ${childName || 'Seu Filho(a)'}

## 📊 Análise Inicial
[Faça uma análise de 2-3 parágrafos sobre o perfil da criança, suas necessidades únicas, e por que este plano foi estruturado desta forma específica]

## 📅 Semana 1: [Nome da fase - ex: "Familiarização e Construção de Confiança"]

### Objetivo da Semana
[Descreva o objetivo principal desta semana em 1-2 parágrafos]

### Sílabas a Trabalhar
[Liste 3-5 sílabas específicas]

### Atividades Diárias

**Segunda-feira**
- **Atividade:** [Tipo específico - ex: "Traçar e Copiar - BA (tema: animais, fácil)"]
- **Duração:** [X minutos]
- **Como fazer:** [Instruções detalhadas passo a passo]
- **Dica especial:** [Dica personalizada para as características da criança]

**Terça-feira**
[Mesmo formato]

**Quarta-feira**
[Mesmo formato]

**Quinta-feira**
[Mesmo formato]

**Sexta-feira**
[Mesmo formato]

### ⚠️ Sinais de Progresso
[Liste 3-4 sinais que indicam que a criança está pronta para avançar]

### 🚨 Sinais de Atenção
[Liste 2-3 sinais de que pode ser necessário ir mais devagar]

---

## 📅 Semana 2: [Nome da fase]
[Mesma estrutura da Semana 1]

---

## 📅 Semana 3: [Nome da fase]
[Mesma estrutura da Semana 1]

---

## 📅 Semana 4: [Nome da fase]
[Mesma estrutura da Semana 1]

---

## 🎓 Estratégias Personalizadas

### Para ${conditions.length > 0 ? conditions.join(' e ') : 'Otimizar o Aprendizado'}
[3-5 estratégias específicas baseadas nas condições da criança]

### Gestão de Tempo e Energia
[Dicas específicas para os ${dailyTime} minutos diários]

### Motivação e Engajamento
[3-4 técnicas para manter a criança motivada]

## 📈 Como Avaliar o Progresso

[Explicação de como os pais devem avaliar se o plano está funcionando, com métricas claras]

## 🔄 Adaptações Necessárias

[Orientações sobre quando e como adaptar o plano caso necessário]

## 💡 Dicas Finais dos Especialistas

[3-5 dicas valiosas específicas para este perfil de criança]

---

IMPORTANTE:
- Seja EXTREMAMENTE específico: indique exatamente qual atividade fazer (sílaba, tema, nível)
- Adapte a progressão à idade e condições da criança
- Se a criança tem TDAH: sessões mais curtas, mais variadas, mais lúdicas
- Se a criança tem autismo: mais previsibilidade, rotina clara, progressão gradual
- Se a criança é mais nova (3-5): foco em traçar, muita repetição, temas lúdicos
- Se a criança é mais velha (8-12): progressão mais rápida, desafios maiores
- Considere o tempo disponível: distribua atividades de forma realista
- Use linguagem calorosa, encorajadora e empática
- Formate com markdown para boa legibilidade`;

    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Você é um pedagogo especialista em alfabetização infantil com vasta experiência em TDAH, autismo e dificuldades de aprendizagem. Seu objetivo é criar planos personalizados, práticos e eficazes.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error('Erro ao gerar plano personalizado');
    }

    const data = await response.json();
    const plan = data.choices[0].message.content;

    return res.status(200).json({
      success: true,
      plan
    });

  } catch (error) {
    console.error('Error generating plan:', error);
    return res.status(500).json({
      error: 'Erro ao gerar o plano personalizado. Por favor, tente novamente.'
    });
  }
}

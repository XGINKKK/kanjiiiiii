import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { syllable, activityType, theme, difficulty } = req.body;

    if (!syllable) {
      return res.status(400).json({ error: 'Syllable is required' });
    }

    // Get API key from environment variable
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    // Map values to labels
    const activityTypes: Record<string, string> = {
      'tracing': 'Tracejado',
      'coloring': 'Colorir',
      'matching': 'Ligar Pontos',
      'wordsearch': 'Caça-Palavras',
      'complete': 'Completar Palavra',
      'syllable-game': 'Jogo de Sílabas'
    };

    const themes: Record<string, string> = {
      'animals': 'Animais',
      'vehicles': 'Veículos',
      'nature': 'Natureza',
      'food': 'Alimentos',
      'toys': 'Brinquedos',
      'space': 'Espaço',
      'ocean': 'Oceano',
      'fantasy': 'Fantasia'
    };

    const difficulties: Record<string, string> = {
      'easy': 'Fácil (3-5 anos)',
      'medium': 'Médio (6-8 anos)',
      'hard': 'Difícil (9-12 anos)'
    };

    const activityLabel = activityTypes[activityType] || activityType;
    const themeLabel = themes[theme] || theme;
    const difficultyLabel = difficulties[difficulty] || difficulty;

    // STEP 1: Generate activity content with GPT-4
    const contentPrompt = `Você é uma pedagoga especializada em alfabetização infantil. Crie uma atividade de "${activityLabel}" focada EXCLUSIVAMENTE na sílaba "${syllable}".

Tema: ${themeLabel}
Nível: ${difficultyLabel}

REGRAS OBRIGATÓRIAS - TODAS AS PALAVRAS DEVEM:
1. Conter EXATAMENTE a sílaba "${syllable}" (maiúscula ou minúscula)
2. Ser palavras REAIS do português brasileiro
3. Estar relacionadas ao tema "${themeLabel}"
4. Ser apropriadas para crianças de ${difficultyLabel}

Exemplos de palavras CORRETAS com "${syllable}":
${syllable === 'BA' ? 'BANANA, BALA, CABANA, SÁBADO,ABABÁ' : ''}
${syllable === 'BI' ? 'BICO, BICICLETA, BIFE, BIBLIOTECA, CABIDE' : ''}
${syllable === 'JE' ? 'JEITO, PROJETO, SUJEITO, OBJETO, REJEITAR' : ''}

Retorne APENAS um JSON válido:
{
  "title": "Título criativo",
  "words": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
  "instructions": "Instruções curtas (máximo 2 frases)"
}

CRÍTICO: Verifique que TODAS as 5 palavras contêm "${syllable}" antes de retornar!`;

    const contentResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Você é uma pedagoga especializada. Retorne APENAS JSON válido, sem markdown, sem explicações extras.'
          },
          {
            role: 'user',
            content: contentPrompt
          }
        ],
        temperature: 0.8,
        max_tokens: 500
      })
    });

    if (!contentResponse.ok) {
      const error = await contentResponse.text();
      console.error('OpenAI Content API Error:', error);
      return res.status(contentResponse.status).json({
        error: 'Erro ao gerar conteúdo da atividade',
        details: error
      });
    }

    const contentData = await contentResponse.json();
    let activityContent;

    try {
      const rawContent = contentData.choices[0].message.content;
      // Remove markdown code blocks if present
      const cleanedContent = rawContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      activityContent = JSON.parse(cleanedContent);

      // VALIDATE: Check if all words contain the syllable
      const syllableLower = syllable.toLowerCase();
      const invalidWords = activityContent.words.filter((word: string) =>
        !word.toLowerCase().includes(syllableLower)
      );

      if (invalidWords.length > 0) {
        console.error(`Invalid words without syllable "${syllable}":`, invalidWords);
        return res.status(400).json({
          error: `Erro: Algumas palavras não contêm a sílaba "${syllable}"`,
          invalidWords: invalidWords
        });
      }

    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return res.status(500).json({
        error: 'Erro ao processar conteúdo da atividade',
        details: contentData.choices[0].message.content
      });
    }

    // STEP 2: Generate ONLY illustrations with DALL-E (no text at all!)
    const imagePrompt = `Create a collection of 4-6 super cute kawaii-style cartoon characters or objects related to the theme: ${themeLabel}.

Style requirements:
- Adorable, child-friendly illustrations
- Big expressive eyes and happy faces
- ${activityType === 'coloring' ? 'Simple black outlines on white background, perfect for coloring' : 'Bright vibrant pastel colors (pink, yellow, blue, green)'}
- Thick bold outlines
- Pixar/Disney quality but simplified for children
- Each illustration should be distinct and recognizable
- Arranged in a clean grid layout (2x2 or 2x3)
- Professional educational clipart quality

Create variations of ${themeLabel.toLowerCase()} that children would love - make them as cute and appealing as possible!

CRITICAL: Create ONLY illustrations/drawings with NO text, NO letters, NO words, NO labels, NO numbers anywhere in the image. Pure visual content only.`;

    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: imagePrompt,
        n: 1,
        size: '1024x1792', // Portrait format for worksheet
        quality: 'hd',
        style: 'natural'
      })
    });

    if (!imageResponse.ok) {
      const error = await imageResponse.text();
      console.error('DALL-E API Error:', error);
      return res.status(imageResponse.status).json({
        error: 'Erro ao gerar imagem da atividade',
        details: error
      });
    }

    const imageData = await imageResponse.json();
    const imageUrl = imageData.data[0].url;

    // Return data for frontend PDF generation
    return res.status(200).json({
      success: true,
      imageUrl: imageUrl,
      title: activityContent.title,
      words: activityContent.words,
      instructions: activityContent.instructions,
      syllable,
      activityType: activityLabel,
      theme: themeLabel,
      difficulty: difficultyLabel
    });

  } catch (error) {
    console.error('Error generating activity:', error);
    return res.status(500).json({
      error: 'Erro interno ao gerar atividade',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

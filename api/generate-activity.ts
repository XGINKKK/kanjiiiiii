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
    const contentPrompt = `Você é uma pedagoga especializada em alfabetização infantil. Crie uma atividade de "${activityLabel}" focada na sílaba "${syllable}".

Tema: ${themeLabel}
Nível: ${difficultyLabel}

Retorne APENAS um JSON com este formato exato:
{
  "title": "Título criativo da atividade",
  "words": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
  "instructions": "Instruções curtas para a criança (máximo 2 frases)",
  "visualDescription": "Descrição detalhada de como a atividade deve ser visualmente (layout, cores, elementos gráficos)"
}

IMPORTANTE:
- Todas as palavras DEVEM conter a sílaba "${syllable}"
- As palavras devem estar relacionadas ao tema "${themeLabel}"
- Seja apropriado para ${difficultyLabel}`;

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
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return res.status(500).json({
        error: 'Erro ao processar conteúdo da atividade',
        details: contentData.choices[0].message.content
      });
    }

    // STEP 2: Generate visual activity image with DALL-E
    const imagePrompt = `Create a colorful, child-friendly educational worksheet in Brazilian Portuguese for literacy learning.

Activity Type: ${activityLabel}
Theme: ${themeLabel}
Target Syllable: ${syllable.toUpperCase()}
Difficulty: ${difficultyLabel}

Title at top: "${activityContent.title}"

Include these words prominently: ${activityContent.words.join(', ')}

Visual style:
- Bright, cheerful colors suitable for children
- Large, clear fonts (suitable for ${difficultyLabel})
- ${activityType === 'tracing' ? 'Dotted/dashed lines for tracing practice' : ''}
- ${activityType === 'coloring' ? 'Simple outlines for coloring' : ''}
- ${activityType === 'matching' ? 'Items to connect with lines' : ''}
- ${activityType === 'wordsearch' ? 'Letter grid with hidden words' : ''}
- Cute, simple illustrations related to ${themeLabel}
- Professional educational worksheet layout
- Leave space for child to write/draw
- Instructions in Portuguese: "${activityContent.instructions}"

Make it look like a professional, printed educational worksheet that a teacher would use in class.`;

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

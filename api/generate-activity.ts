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

    // Generate prompt for OpenAI
    const prompt = `Crie uma atividade educacional de alfabetização em português para crianças focada na sílaba "${syllable}".

Tipo de atividade: ${activityLabel}
Tema: ${themeLabel}
Nível de dificuldade: ${difficultyLabel}

A atividade deve:
1. Ser adequada para a faixa etária especificada
2. Incluir 5-8 palavras que contenham a sílaba "${syllable}"
3. Ser visualmente atraativa e educativa
4. Seguir o método de grafismo fonético
5. Incluir instruções claras para a criança

Forneça:
- Título da atividade
- Lista de palavras selecionadas (com a sílaba em destaque)
- Instruções detalhadas da atividade
- Dicas pedagógicas para os pais
- Sugestões de variações da atividade

Formate a resposta de forma clara e organizada.`;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: 'Você é uma pedagoga especializada em alfabetização infantil usando o método de grafismo fonético japonês. Crie atividades lúdicas, educativas e bem estruturadas.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API Error:', error);
      return res.status(response.status).json({
        error: 'Erro ao gerar atividade com IA',
        details: error
      });
    }

    const data = await response.json();
    const activityContent = data.choices[0].message.content;

    return res.status(200).json({
      success: true,
      content: activityContent,
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

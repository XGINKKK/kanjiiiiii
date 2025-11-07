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

    // Generate examples dynamically
    const syllableLower = syllable.toLowerCase();
    const exampleWords: Record<string, string[]> = {
      'ba': ['BANANA', 'BALA', 'CABANA', 'SÁBADO', 'TABACO'],
      'be': ['BEBÊ', 'BEIJO', 'BEBIDA', 'ABELHA', 'BERÇO'],
      'bi': ['BICO', 'BICICLETA', 'BIFE', 'BIBLIOTECA', 'CABIDE'],
      'bo': ['BOLA', 'BOCA', 'BONÉ', 'ROBÔ', 'CABELO'],
      'bu': ['BÚFALO', 'BUZINA', 'BURACO', 'ÔNIBUS', 'TOBU'],
      'ca': ['CASA', 'CAMA', 'CARRO', 'MACACO', 'CAVALO'],
      'co': ['COELHO', 'COLA', 'CORUJA', 'COCO', 'ESCOLA'],
      'da': ['DADO', 'DAMA', 'DANÇA', 'CADEIRA', 'MEDALHA'],
      'fa': ['FACA', 'FAMÍLIA', 'FADA', 'ELEFANTE', 'SOFÁ'],
      'ga': ['GATO', 'GALO', 'GARFO', 'LAGARTO', 'JOGO'],
      'ja': ['JACARÉ', 'JANELA', 'JARDIM', 'LARANJA', 'CAIXA'],
      'je': ['JEITO', 'PROJETO', 'SUJEITO', 'OBJETO', 'DESEJO'],
      'la': ['LAGO', 'LATA', 'LÁPIS', 'PALHAÇO', 'SALA'],
      'ma': ['MALA', 'MÃOS', 'MAMÃE', 'TOMATE', 'CAMA'],
      'na': ['NARIZ', 'NAVIO', 'BANANA', 'JANELA', 'CANÁRIO'],
      'pa': ['PATO', 'PAPAI', 'PÃO', 'SAPATO', 'ESPADA'],
      'ra': ['RATO', 'RAÇÃO', 'RÁDIO', 'GIRAFA', 'BARATA'],
      'sa': ['SAPO', 'SALA', 'SACO', 'CASA', 'MESA'],
      'ta': ['TATU', 'TACO', 'TAPETE', 'BATATA', 'LATA'],
      'va': ['VACA', 'VASSOURA', 'VARAL', 'CAVALO', 'NAVIO']
    };

    const examples = exampleWords[syllableLower] || ['palavra1', 'palavra2', 'palavra3', 'palavra4', 'palavra5'];

    // STEP 1: Generate activity content with GPT-4 (with retry logic)
    let activityContent;
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      const contentPrompt = `Você é especialista em alfabetização. Crie uma atividade focada na sílaba "${syllable}".

Tema: ${themeLabel}
Nível: ${difficultyLabel}

REGRA CRÍTICA: TODAS as 5 palavras DEVEM conter a sílaba "${syllable}".

Exemplos de palavras CORRETAS com "${syllable}":
${examples.join(', ')}

Cada palavra deve:
- Conter "${syllable}" em QUALQUER posição (início, meio ou fim)
- Ser relacionada ao tema "${themeLabel}"
- Ser apropriada para crianças

JSON:
{
  "title": "Título criativo",
  "words": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
  "instructions": "Instruções curtas"
}

VERIFIQUE: Todas as palavras contêm "${syllable}"?`;

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
        retryCount++;
        continue;
      }

      const contentData = await contentResponse.json();

      try {
        const rawContent = contentData.choices[0].message.content;
        // Remove markdown code blocks if present
        const cleanedContent = rawContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsedContent = JSON.parse(cleanedContent);

        // VALIDATE: Check if all words contain the syllable
        const invalidWords = parsedContent.words.filter((word: string) =>
          !word.toLowerCase().includes(syllableLower)
        );

        if (invalidWords.length > 0) {
          console.log(`Retry ${retryCount + 1}: Invalid words found:`, invalidWords);
          retryCount++;
          continue; // Try again
        }

        // Success! Words are valid
        activityContent = parsedContent;
        break; // Exit loop

      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        retryCount++;
        continue;
      }
    }

    // If all retries failed
    if (!activityContent) {
      return res.status(500).json({
        error: `Não foi possível gerar atividade válida após ${maxRetries} tentativas. Tente novamente.`
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

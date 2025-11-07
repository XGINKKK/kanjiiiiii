import type { VercelRequest, VercelResponse } from '@vercel/node';
import PDFDocument from 'pdfkit';

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

    // STEP 3: Fetch the DALL-E illustration
    const illustrationResponse = await fetch(imageUrl);
    if (!illustrationResponse.ok) {
      return res.status(500).json({ error: 'Falha ao baixar ilustração' });
    }
    const illustrationBuffer = Buffer.from(await illustrationResponse.arrayBuffer());

    // STEP 4: Generate PDF with pdfkit
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 }
    });

    const chunks: Buffer[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));

    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);
    });

    // Colors for child-friendly design
    const colors = {
      coral: '#FF6B6B',
      mint: '#4ECDC4',
      softBlue: '#95E1D3',
      yellow: '#FFE66D',
      navy: '#2C3E50'
    };

    // Title section with fun styling
    doc.fontSize(28)
       .fillColor(colors.coral)
       .font('Helvetica-Bold')
       .text(activityContent.title, { align: 'center' });

    doc.moveDown(0.5);

    // Syllable badge
    doc.fontSize(18)
       .fillColor(colors.mint)
       .text(`Sílaba: ${syllable.toUpperCase()}`, { align: 'center' });

    doc.moveDown(0.3);

    // Instructions
    doc.fontSize(12)
       .fillColor(colors.navy)
       .font('Helvetica')
       .text(activityContent.instructions, { align: 'center', width: 500 });

    doc.moveDown(1);

    // Add DALL-E illustration (centered, medium size)
    const imageWidth = 400;
    const imageX = (doc.page.width - imageWidth) / 2;
    const currentY = doc.y;

    doc.image(illustrationBuffer, imageX, currentY, {
      width: imageWidth,
      align: 'center'
    });

    // Move below image
    doc.moveDown(15);

    // Words section with tracing/practice space
    doc.fontSize(16)
       .fillColor(colors.coral)
       .font('Helvetica-Bold')
       .text('Palavras para Praticar:', { align: 'left' });

    doc.moveDown(0.5);

    // Draw each word with practice lines
    activityContent.words.forEach((word: string, index: number) => {
      const yPosition = doc.y;

      // Word in large font
      doc.fontSize(20)
         .fillColor(colors.navy)
         .font('Helvetica-Bold')
         .text(word.toUpperCase(), 70, yPosition);

      // Practice lines for tracing (if tracing activity)
      if (activityType === 'tracing') {
        const lineY = yPosition + 30;
        const lineLength = 400;

        // Dotted line for tracing
        doc.strokeColor(colors.mint)
           .lineWidth(1)
           .dash(5, { space: 3 })
           .moveTo(70, lineY)
           .lineTo(70 + lineLength, lineY)
           .stroke();

        doc.undash(); // Reset dash

        doc.moveDown(2);
      } else {
        // Blank space for writing
        const lineY = yPosition + 30;
        const lineLength = 400;

        doc.strokeColor(colors.softBlue)
           .lineWidth(1)
           .moveTo(70, lineY)
           .lineTo(70 + lineLength, lineY)
           .stroke();

        doc.moveDown(2);
      }
    });

    // Footer with cute message
    doc.fontSize(10)
       .fillColor(colors.mint)
       .font('Helvetica')
       .text('✨ Gerado com amor por Kanji Kids! ✨', { align: 'center' });

    // Finalize PDF
    doc.end();

    // Wait for PDF to be generated
    const pdfBuffer = await pdfPromise;

    // Return PDF as base64 for easy frontend handling
    return res.status(200).json({
      success: true,
      pdfData: pdfBuffer.toString('base64'),
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

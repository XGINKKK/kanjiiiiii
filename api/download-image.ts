import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { url } = req.query;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Fetch image from DALL-E URL
    const imageResponse = await fetch(url);

    if (!imageResponse.ok) {
      return res.status(imageResponse.status).json({
        error: 'Failed to fetch image'
      });
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(imageBuffer);

    // Set appropriate headers
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Length', buffer.length.toString());
    res.setHeader('Content-Disposition', 'attachment; filename="atividade.png"');

    res.status(200).send(buffer);

  } catch (error) {
    console.error('Error downloading image:', error);
    return res.status(500).json({
      error: 'Erro ao baixar imagem',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

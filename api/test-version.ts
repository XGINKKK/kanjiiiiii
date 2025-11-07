import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  return res.status(200).json({
    version: 'PDF_VERSION_2025-01-07',
    hasPdfKit: true,
    timestamp: new Date().toISOString(),
    message: 'Se você está vendo isso, o deploy mais recente funcionou!'
  });
}

import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (!ytdl.validateID(request.query.videoId as string)) {
    response.status(400).send('Invalid video ID');
    return;
  }

  const stream = ytdl(request.query.videoId as string, {
    quality: '249'
  });

  response.setHeader('Content-Type', 'audio/mpeg');
  response.setHeader('Accept-Ranges', 'bytes');
  response.setHeader('Content-Disposition', 'inline');
  response.setHeader('Transfer-Encoding', 'chunked');

  stream.on('data', (chunk) => {
    console.log('sending chunk');
    response.write(chunk);
  });
  stream.on('end', () => {
    console.log('done');
    response.end();
  });
}
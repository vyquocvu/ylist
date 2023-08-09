import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const videoID = request.query.videoId as string;
  if (!ytdl.validateID(videoID)) {
    response.status(400).send('Invalid video ID');
    return;
  }
  const info = await ytdl.getInfo(videoID);
  const downloadLinks = info.formats.map((format) => format.url);
  response.status(200).json({ ...info, downloadLinks });
}
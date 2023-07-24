import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const videoID = request.query.videoId as string;
  if (!ytdl.validateID(videoID)) {
    response.status(400).send('Invalid video ID');
    return;
  }
  ytdl.getInfo(videoID).then((info) => {
    response.status(200).json(info);
  });
}
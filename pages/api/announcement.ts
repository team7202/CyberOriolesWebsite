// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method == "POST") {
      res.status(200).json({ message: 'POST' });
    } else if(req.method == "DELETE") {
      res.status(200).json({ message: 'DELETE' });
    } else if(req.method == "GET") {
      res.status(200).json({ messsage: 'GET' });
    } else {
      res.status(200).json({ error: 'Invalid Method' });
    }
}

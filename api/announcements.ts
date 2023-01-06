// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import AnnouncementModel from '../../models/AnnouncementModel';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method == "GET") {
      mongoose.connect(process.env.MONGO_URI!, async () => {
        res.status(200).send(await AnnouncementModel.find({}));
      })
    } else {
      res.status(500).json({ error: 'Invalid Method' });
    }
}

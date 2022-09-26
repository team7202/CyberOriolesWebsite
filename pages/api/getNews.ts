import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import NewsModel from "../../model/NewsModel";
const NextCors = require('nextjs-cors');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  connect(async () => {
    res.status(200).send(await NewsModel.find().sort({ createdAt: -1 }));
  })
}

const connect = (callback: CallbackWithoutResult) => {
  mongoose.connect(process.env.MONGO_URI!, callback);
}
import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import NewsModel from "../../model/NewsModel";
import news from "../../json/news.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  res.status(200).send(news);
}

const connect = (callback: CallbackWithoutResult) => {
  mongoose.connect(process.env.MONGO_URI!, callback);
}
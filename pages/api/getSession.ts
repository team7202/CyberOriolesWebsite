import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import SessionModel from "../../model/SessionModel";
const NextCors = require('nextjs-cors');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
      });

    if (req.query == undefined || req.query.pass != "cyber") {
        res.status(500).send({ error: "An error has occured" });
        return;
    }

    connect(async () => {
        res.status(200).send(await SessionModel.findOne({ query: "session" }));
    })
}

const connect = (callback: CallbackWithoutResult) => {
    mongoose.connect(process.env.MONGO_URI!, callback);
}
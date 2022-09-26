import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import SessionModel from "../../model/SessionModel";
import { generateRandomToken } from "../../script/generateRandomToken";
const NextCors = require('nextjs-cors');

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {

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
        await SessionModel.findOneAndUpdate({query: "session"}, {token: generateRandomToken(40)});
        res.status(200).send({message: "Update Session Success!"});
    })

}

const connect = (callback: CallbackWithoutResult) => {
    mongoose.connect(process.env.MONGO_URI!, callback);
}
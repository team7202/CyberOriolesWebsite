import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import SessionModel from "../../model/SessionModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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
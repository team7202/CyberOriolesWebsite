import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import SessionModel from "../../model/SessionModel";
import { generateRandomToken } from "../../script/generateRandomToken";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

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
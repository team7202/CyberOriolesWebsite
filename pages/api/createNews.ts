import mongoose, { CallbackWithoutResult } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
import NewsModel from "../../model/NewsModel";
import { getSession } from "../../script/getSession";
const NextCors = require('nextjs-cors');

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
     });

    if (req.query == undefined || req.query.title == undefined || req.query.description == undefined || req.query.token == undefined) {
        res.status(500).send({ error: "An error has occured" });
        return;
    }

    getSession().then((result) => {
        if (req.query.title == "" || req.query.description == "" || req.query.token != result.token) {
            res.status(500).send({ error: "An error has occured" });
            return;
        }

        connect(async () => {
            res.status(200).send(await NewsModel.create({
                title: req.query.title,
                description: req.query.description,
                createdAt: new Date()
            }));
        })
    })
}

const connect = (callback: CallbackWithoutResult) => {
    mongoose.connect(process.env.MONGO_URI!, callback);
}
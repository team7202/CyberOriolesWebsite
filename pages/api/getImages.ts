import fs from "fs";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const data = [];
    const images = fs.readdirSync("./public/images");
    for(const image of images) {
        data.push(image);
    }
    res.status(200).send(data);
}
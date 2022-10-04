import fs from "fs";

import { NextApiRequest, NextApiResponse } from "next";
import Constants from "../../scripts/Constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const data = [];
    let images;
    if(!Constants.SERVER.PUBLIC) images = fs.readdirSync("./public/images");
    else images = fs.readdirSync("./images");
    
    for(const image of images) {
        data.push(image);
    }
    res.status(200).send(data);
}
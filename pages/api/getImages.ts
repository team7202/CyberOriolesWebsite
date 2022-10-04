import fs from "fs";

import { NextApiRequest, NextApiResponse } from "next";
import Constants from "../../scripts/Constants";
import getConfig from 'next/config'
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { serverRuntimeConfig } = getConfig();
    const dir = path.join(process.cwd(), './public', "images");
    
    const data = [];
    const images = fs.readdirSync(dir);
    for(const image of images) {
        data.push(image);
    }
    res.status(200).send(data);
}
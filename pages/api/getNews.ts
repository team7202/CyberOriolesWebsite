import { NextApiRequest, NextApiResponse } from "next";
// const { groq } = require('next-sanity');
import { SanityClient } from "@sanity/client";
import client from "../../client";

// const feedQuery = groq`
// *[_type == "news"] {
//     _id,
//     ...
//   } | order(_createdAt desc)
// `

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const paths = await client.fetch(
    `*[_type == "news"] {
      _id,
      ...
    } | order(_createdAt desc)`
  )
  res.status(200).send(paths.map((news: any) => ({ news }))
  );
}
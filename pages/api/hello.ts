// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
}
// Me hace comprobar que la resoyesta de la api sea un name == string

export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}

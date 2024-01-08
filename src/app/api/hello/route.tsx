// src/app/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("first", req);
  res.status(200).json({ message: 'Hello, Next.js!' });
}

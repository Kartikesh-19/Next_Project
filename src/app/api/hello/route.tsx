import { NextApiRequest } from 'next';
export async function GET(request:NextApiRequest) {
  console.log("first",request)
    return new Response('Hello, Next.js!')
  }
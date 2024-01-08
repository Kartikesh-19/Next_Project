// src/app/api/hello.ts

export default async function GET(req: any, res: any) {
  console.log("first", req);
  res.status(200).json({ message: 'Hello, Next.js!' });
}

export async function GET(request:any) {
  console.log("first",request)
    return new Response('Hello, Next.js!')
  }
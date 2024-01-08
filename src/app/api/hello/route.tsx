export async function GET(request:string) {
  console.log("first",request)
    return new Response('Hello, Next.js!')
  }
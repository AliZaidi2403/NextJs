import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";
export async function GET(request: Request) {
  const remaining = await limiter.removeTokens(1);
  console.log("remaining : ", remaining);
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests ",
    });
  }
  return new Response("Hello, Next.js!");
}

//using rate limitting middleware
// now the thing aboutpulling this from config/limiter is that we can share the token count
//across diffrent route
// we would have to create diffrent limiter for diffrent route if we dont want to share the token

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ title: "Hello, Next.js!" });
}

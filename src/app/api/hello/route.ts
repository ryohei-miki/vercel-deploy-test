import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("GET request received");
  return NextResponse.json({ message: "Hello, world!", name: "Success GET request" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("POST request received");
  console.log(body);
  return NextResponse.json({ message: "Hello, world!", name: "Success POST request" });
}

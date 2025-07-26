import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("RSVP podaci:", data);
  
  return NextResponse.json({ success: true });

}

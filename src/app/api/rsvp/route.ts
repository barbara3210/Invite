import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();

  return NextResponse.json(responseData);
}

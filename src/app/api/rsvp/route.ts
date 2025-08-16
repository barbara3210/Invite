import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("RSVP podaci:", data);

  try {
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json({ success: false, error: "Google Script URL nije definiran." }, { status: 500 });
    }

    const response = await fetch(scriptUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

const text = await response.text();
console.log("Odgovor Google Skripta:", text);

let result;
try {
  result = JSON.parse(text);
} catch {
  return NextResponse.json({ success: false, error: text || "Nepoznata greška" }, { status: response.status });
}

if (!response.ok) {
  return NextResponse.json({ success: false, error: result.error || "Nepoznata greška" }, { status: response.status });
}

return NextResponse.json(result);


  } catch (error) {
    console.error("Greška pri slanju na Google Script:", error);
    return NextResponse.json({ success: false, error: error || "Greška pri komunikaciji sa skriptom." }, { status: 500 });
  }
}

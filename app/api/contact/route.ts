import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, subject, message } = body ?? {};

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmails({ name, email, phone, subject, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}

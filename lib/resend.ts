import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const CLUB_EMAIL = process.env.CLUB_CONTACT_EMAIL ?? "info@edoclubaustin.org";

// Sends the inquiry to the club, then sends the visitor a short acknowledgment.
// Both calls are skipped with a clear error if RESEND_API_KEY isn't set yet,
// so local development doesn't silently fail.
export async function sendContactEmails(payload: ContactPayload) {
  if (!resend) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local (see .env.example)."
    );
  }

  await resend.emails.send({
    from: "Edo Club of Austin Website <onboarding@resend.dev>", // swap once a verified sending domain is set up
    to: CLUB_EMAIL,
    reply_to: payload.email,
    subject: `New inquiry: ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  await resend.emails.send({
    from: "Edo Club of Austin <onboarding@resend.dev>",
    to: payload.email,
    subject: "We received your message",
    text: "Thank you for contacting Edo Club of Austin. We have received your inquiry and a member of our team will respond as soon as possible. We appreciate your interest in our organization.",
  });
}

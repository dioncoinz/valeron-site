import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // honeypot
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot: if filled, silently succeed (likely bot)
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Server is not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const subject = `Valeron enquiry — ${name}${company ? ` (${company})` : ""}`;

    const text = [
      `New enquiry from Valeron website`,
      ``,
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Reply directly to: ${email}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

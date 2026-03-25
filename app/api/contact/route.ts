import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const kontaktSchema = z.object({
  anrede: z.string().optional(),
  name: z.string().min(2),
  telefon: z.string().min(5),
  email: z.string().email(),
  betreff: z.string().min(1),
  nachricht: z.string().optional(),
  datenschutz: z.boolean().refine((v) => v === true),
  website: z.string().max(0), // honeypot
});

// Rate Limiting: max. 5 Anfragen pro IP pro Stunde
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = kontaktSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Ungültige Eingabe." },
        { status: 400 }
      );
    }

    const { anrede, name, telefon, email, betreff, nachricht, website } =
      parsed.data;

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "EsperIT Kontaktformular <info@esperit.net>",
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `Kontaktanfrage: ${betreff}`,
      html: `
        <p><strong>Anrede:</strong> ${anrede ?? "–"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${betreff}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht ? nachricht.replace(/\n/g, "<br>") : "–"}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Fehler beim E-Mail-Versand:", error);
    return NextResponse.json(
      {
        error:
          "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry";

/**
 * Placeholder enquiry endpoint. Validates the payload and logs it.
 *
 * TODO: connect email delivery. With Resend, for example:
 *   npm i resend
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from: "site@yourdomain.com", to: siteConfig.email, subject: `New ${kind} enquiry`, text: JSON.stringify(data, null, 2) });
 * TODO: add rate limiting (e.g. Upstash Ratelimit) before launch.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }

  console.log(`[enquiry:${parsed.data.kind}]`, JSON.stringify(parsed.data, null, 2));
  return NextResponse.json({ ok: true });
}

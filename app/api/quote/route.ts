import { NextResponse } from "next/server";
import { sendBrevoEmail, getSender, getRecipient } from "@/lib/brevo";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const sender = getSender();
    const toEmail = getRecipient();

    await sendBrevoEmail({
      sender,
      to: [{ email: toEmail }],
      subject: `Quote request: ${email}`,
      htmlContent: `
        <p>A quote has been requested.</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
      textContent: `Quote request from: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to submit." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

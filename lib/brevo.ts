const BREVO_API = "https://api.brevo.com/v3/smtp/email";

export type BrevoSendPayload = {
	sender: { email: string; name: string };
	to: Array<{ email: string; name?: string }>;
	subject: string;
	htmlContent: string;
	textContent?: string;
};

export async function sendBrevoEmail(
	payload: BrevoSendPayload
): Promise<{ messageId: string | null }> {
	const apiKey = process.env.EMAIL_API_KEY;
	if (!apiKey) {
		throw new Error("EMAIL_API_KEY is not set");
	}

	const res = await fetch(BREVO_API, {
		method: "POST",
		headers: {
			"api-key": apiKey,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		const err = await res.text();
		throw new Error(err || `Brevo API error: ${res.status}`);
	}

	const data = (await res.json()) as { messageId?: string | null };
	return { messageId: data.messageId ?? null };
}

export function getSender(): { email: string; name: string } {
	const email =
		process.env.BREVO_SENDER_EMAIL ??
		process.env.CONTACT_RECIPIENT_EMAIL ??
		"noreply@example.com";
	const name = process.env.BREVO_SENDER_NAME ?? "TransferLinkz";
	return { email, name };
}

export function getRecipient(): string {
	const email = process.env.CONTACT_RECIPIENT_EMAIL;
	if (!email) {
		throw new Error(
			"CONTACT_RECIPIENT_EMAIL is not set. Add it to .env for contact and quote emails."
		);
	}
	return email;
}

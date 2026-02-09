"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
	const [pending, setPending] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setPending(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok) {
				toast.error(data.error ?? "Something went wrong.");
				return;
			}
			toast.success("Message sent successfully.");
			setForm({ name: "", email: "", message: "" });
		} catch {
			toast.error("Failed to send message. Please try again.");
		} finally {
			setPending(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			<div className="space-y-3">
				<Label htmlFor="contact-name">Full name</Label>
				<Input
					id="contact-name"
					placeholder="Your name"
					className="mt-2"
					value={form.name}
					onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
					required
					disabled={pending}
				/>
			</div>
			<div className="space-y-3">
				<Label htmlFor="contact-email">Email</Label>
				<Input
					id="contact-email"
					type="email"
					placeholder="you@example.com"
					className="mt-2"
					value={form.email}
					onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
					required
					disabled={pending}
				/>
			</div>
			<div className="space-y-3">
				<Label htmlFor="contact-message">Message</Label>
				<Textarea
					id="contact-message"
					placeholder="Your message..."
					className="mt-2"
					value={form.message}
					onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
					required
					disabled={pending}
					rows={5}
				/>
			</div>
			<Button type="submit" disabled={pending}>
				{pending ? "Sending..." : "Send message"}
			</Button>
		</form>
	);
}

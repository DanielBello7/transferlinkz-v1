"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function QuoteForm() {
	const [pending, setPending] = useState(false);
	const [email, setEmail] = useState("");

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!email.trim()) return;
		setPending(true);
		try {
			const res = await fetch("/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: email.trim() }),
			});
			const data = await res.json();
			if (!res.ok) {
				toast.error(data.error ?? "Something went wrong.");
				return;
			}
			toast.success("Email successful.");
			setEmail("");
		} catch {
			toast.error("Failed to submit. Please try again.");
		} finally {
			setPending(false);
		}
	}

	return (
		<form
			onSubmit={onSubmit}
			className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-center">
			<div className="flex-1 space-y-3 sm:max-w-xs">
				<Label htmlFor="quote-email">Email</Label>
				<Input
					id="quote-email"
					type="email"
					placeholder="you@example.com"
					className="mt-2"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					disabled={pending}
				/>
			</div>
			<Button type="submit" disabled={pending} className="shrink-0">
				{pending ? "Sending..." : "Request a quote"}
			</Button>
		</form>
	);
}

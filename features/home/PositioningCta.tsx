import Link from "next/link";
import { POSITIONING_CTA } from "@/lib/data/home";

export function PositioningCta() {
	return (
		<section className="border-t border-slate-700/50 px-6 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-2xl font-semibold text-white sm:text-3xl">
					{POSITIONING_CTA.text}
				</p>
				<Link
					href={POSITIONING_CTA.href}
					className="btn-cta-gradient mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium transition">
					{POSITIONING_CTA.buttonLabel}
					<span aria-hidden>→</span>
				</Link>
			</div>
		</section>
	);
}

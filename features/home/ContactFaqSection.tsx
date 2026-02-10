import { ContactForm } from "@/components/contact-form";
import { FAQ_ITEMS } from "@/lib/data/home";

export function ContactFaqSection() {
	return (
		<section id="contact" className="border-t border-slate-700/50 px-6 py-24">
			<div className="mx-auto max-w-3xl space-y-20">
				<div>
					<h2 className="text-3xl font-semibold text-white">Contact us</h2>
					<p className="mt-2 text-slate-400">
						Send us a message and we&apos;ll get back to you.
					</p>
					<div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
						<ContactForm />
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-semibold text-white">
						Frequently asked questions
					</h2>
					<div className="mt-10 space-y-2">
						{FAQ_ITEMS.map(({ q, a }) => (
							<details
								key={q}
								className="group rounded-lg border border-slate-700 bg-slate-900/40">
								<summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left font-medium text-slate-200 transition hover:bg-slate-800/40 [&::-webkit-details-marker]:hidden">
									{q}
									<span className="shrink-0 transition group-open:rotate-180">
										<svg
											className="h-5 w-5 text-slate-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</span>
								</summary>
								<p className="border-t border-slate-700 px-5 py-4 text-sm text-slate-400">
									{a}
								</p>
							</details>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

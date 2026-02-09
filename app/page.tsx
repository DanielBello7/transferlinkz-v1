import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { QuoteForm } from "@/components/quote-form";

const NAV_LINKS = [
	{ label: "Problem", href: "#problem" },
	{ label: "Solution", href: "#solution" },
	{ label: "What This Fixes", href: "#fixes" },
	{ label: "Impact", href: "#impact" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Contact", href: "#contact" },
];

const PROBLEM_POINTS = ["Outsourced", "Time-critical", "Emotionally charged"];

const OPERATOR_COSTS = [
	"Complaints & refunds",
	"Call centre overload",
	"Tour Director stress",
	"Brand damage",
];

const ROOT_CAUSES = [
	"Guests lack clarity at arrival",
	"Suppliers lack real-time confirmation tools",
	"Operators are forced to intervene in preventable issues",
];

const SOLUTION_POINTS = [
	{
		who: "Guests",
		what: "receive a single arrival link with driver details and live status",
	},
	{
		who: "Suppliers",
		what: "confirm presence and communicate directly (masked)",
	},
	{ who: "Operators", what: "are notified only if escalation is needed" },
];

const FIXES = [
	"Missed transfers",
	'"Driver vs guest" disputes',
	"Arrival-related complaints",
	"Unnecessary call centre volume",
];

const IMPACT_ITEMS = [
	"Fewer escalations",
	"Calmer guests before TD interaction",
	"Reduced on-call pressure for ops teams",
];

const COMMERCIAL_POINTS = [
	"Low per-guest / per-transfer fee",
	"Scales with volume",
	"No guest app required",
];

const SUCCESS_METRICS = [
	{ label: "Missed transfers", direction: "down" },
	{ label: "Arrival complaints", direction: "down" },
	{ label: "Call centre tickets", direction: "down" },
	{ label: "TD satisfaction", direction: "up" },
];

const FAQ_ITEMS = [
	{
		q: "What is TransferLinkz?",
		a: "TransferLinkz is Arrival Risk Management software. Guests receive a single arrival link with driver details and live status; suppliers confirm presence and communicate directly (masked); operators are notified only if escalation is needed.",
	},
	{
		q: "Do guests need to download an app?",
		a: "No. TransferLinkz works without a guest app — guests use a single arrival link with driver details and live status.",
	},
	{
		q: "How is TransferLinkz priced?",
		a: "We use a low per-guest / per-transfer fee that scales with volume. Contact us for a quote.",
	},
];

export default function Home() {
	return (
		<div className="page-bg-blue min-h-screen text-white font-sans">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-[#0c1222]/90 backdrop-blur-md">
				<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link href="#" className="flex items-center gap-2">
						<Image
							src="/transferlinkz-logo.png"
							alt="TransferLinkz"
							width={32}
							height={32}
							className="h-8 w-8 object-contain"
						/>
						<span className="text-xl font-semibold tracking-tight text-cyan-400">
							TransferLinkz
						</span>
					</Link>
					<div className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-sm text-slate-300 transition hover:text-white">
								{item.label}
							</Link>
						))}
					</div>
					<div className="flex items-center gap-4">
						<Link
							href="#contact"
							className="btn-cta-gradient flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition">
							Contact
							<svg
								className="h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero */}
			<section className="relative px-6 pt-32 pb-20 text-center">
				<div className="mx-auto max-w-4xl">
					<div
						className="mb-4 h-0.5 w-12 rounded-full bg-cyan-400 mx-auto"
						aria-hidden
					/>
					<h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
						Reducing Arrival Risk & Operational Escalations with TransferLinkz
					</h1>
					<p className="mt-8 text-lg text-slate-300">
						TransferLinkz is not a messaging tool — it is arrival insurance.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-6">
						<Link
							href="#solution"
							className="btn-cta-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium transition">
							See how it works
							<span aria-hidden>→</span>
						</Link>
						<Link
							href="#contact"
							className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/40">
							Get in touch
						</Link>
					</div>
				</div>

				{/* Product mockup - arrival link / status */}
				<div className="mx-auto mt-16 max-w-5xl">
					<div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 shadow-2xl shadow-cyan-500/10">
						<div className="flex border-b border-slate-700 px-4 py-3">
							<div className="flex gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
								<span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
								<span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
							</div>
						</div>
						<div className="flex min-h-[280px] flex-col p-6 md:flex-row md:items-stretch">
							<aside className="w-full border-b border-slate-700 pb-4 md:w-48 md:border-b-0 md:border-r md:pb-0 md:pr-4">
								<div className="text-xs font-medium uppercase tracking-wider text-slate-500">
									Arrival link
								</div>
								<div className="mt-2 space-y-2">
									{["Driver details", "Live status", "Contact"].map((item) => (
										<div
											key={item}
											className="h-8 rounded-lg bg-slate-800/80"
										/>
									))}
								</div>
							</aside>
							<main className="flex-1 pt-4 md:pt-0 md:pl-6">
								<div className="text-xs font-medium uppercase tracking-wider text-slate-500">
									Live status
								</div>
								<div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
									{[1, 2, 3, 4, 5, 6].map((i) => (
										<div
											key={i}
											className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
											<div className="h-2 w-2/3 rounded bg-slate-600" />
											<div className="mt-2 h-2 w-full rounded bg-slate-700" />
											<div className="mt-3 h-3 w-1/2 rounded-full bg-cyan-500/30" />
										</div>
									))}
								</div>
							</main>
						</div>
					</div>
				</div>
			</section>

			{/* The Problem */}
			<section id="problem" className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">The Problem</h2>
					<p className="mt-4 max-w-3xl text-lg text-slate-400">
						Arrival is the most failure-prone moment of the guest journey. It
						is:
					</p>
					<ul className="mt-6 flex flex-wrap gap-3">
						{PROBLEM_POINTS.map((point) => (
							<li
								key={point}
								className="rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-200">
								{point}
							</li>
						))}
					</ul>
					<p className="mt-8 text-lg text-slate-400">
						When transfers fail, the tour operator absorbs:
					</p>
					<ul className="mt-4 space-y-2">
						{OPERATOR_COSTS.map((cost) => (
							<li key={cost} className="flex items-center gap-2 text-slate-300">
								<span className="text-red-400/80">×</span> {cost}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* The Root Cause */}
			<section
				id="root-cause"
				className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">The Root Cause</h2>
					<ul className="mt-8 space-y-4">
						{ROOT_CAUSES.map((cause) => (
							<li
								key={cause}
								className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-5">
								<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
									!
								</span>
								<span className="text-slate-300">{cause}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* The Solution: TransferLinkz */}
			<section
				id="solution"
				className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">
						The Solution: TransferLinkz
					</h2>
					<p className="mt-4 max-w-3xl text-lg text-slate-400">
						TransferLinkz is Arrival Risk Management software:
					</p>
					<div className="mt-10 grid gap-6 sm:grid-cols-3">
						{SOLUTION_POINTS.map(({ who, what }) => (
							<div
								key={who}
								className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 transition hover:border-cyan-500/40">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 font-semibold">
									{who.slice(0, 1)}
								</div>
								<h3 className="mt-4 font-semibold text-white">{who}</h3>
								<p className="mt-2 text-sm text-slate-400">{what}</p>
							</div>
						))}
					</div>
					<div className="mt-12 flex flex-wrap gap-4">
						<Link
							href="#contact"
							className="btn-cta-gradient inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition">
							Get started
							<span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* What This Fixes */}
			<section id="fixes" className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">What This Fixes</h2>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{FIXES.map((fix) => (
							<div
								key={fix}
								className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-5">
								<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
									✓
								</span>
								<span className="text-slate-200">{fix}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Operational Impact */}
			<section id="impact" className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">
						Operational Impact
					</h2>
					<ul className="mt-10 space-y-4">
						{IMPACT_ITEMS.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-4">
								<span className="text-emerald-500">✓</span>
								<span className="text-slate-200">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Commercial Model */}
			<section id="pricing" className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-center text-3xl font-semibold text-white">
						Commercial Model
					</h2>
					<p className="mt-4 text-center text-slate-400">
						Simple pricing that scales with your volume.
					</p>
					<div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
						{COMMERCIAL_POINTS.map((point) => (
							<div
								key={point}
								className="flex w-full max-w-xs items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/40 p-6 sm:w-auto">
								<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
									✓
								</span>
								<span className="text-slate-200">{point}</span>
							</div>
						))}
					</div>
					<div className="mt-12">
						<QuoteForm />
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-center text-3xl font-semibold text-white">
						Success Metrics
					</h2>
					<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{SUCCESS_METRICS.map(({ label, direction }) => (
							<div
								key={label}
								className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 text-center">
								<span
									className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
									aria-hidden>
									{direction === "down" ? "↓" : "↑"}
								</span>
								<p className="mt-3 font-medium text-slate-200">{label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Positioning CTA */}
			<section className="border-t border-slate-700/50 px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-2xl font-semibold text-white sm:text-3xl">
						TransferLinkz is not a messaging tool — it is arrival insurance.
					</p>
					<Link
						href="#contact"
						className="btn-cta-gradient mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium transition">
						Get started — it&apos;s free
						<span aria-hidden>→</span>
					</Link>
				</div>
			</section>

			{/* Contact & FAQ */}
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

			{/* Footer */}
			<footer className="border-t border-slate-700/50 px-6 py-12">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
					<span className="text-sm text-slate-500">
						© TransferLinkz. All rights reserved.
					</span>
					<div className="flex gap-8 text-sm text-slate-400">
						<Link href="#" className="transition hover:text-white">
							Privacy
						</Link>
						<Link href="#" className="transition hover:text-white">
							Terms
						</Link>
						<Link href="#contact" className="transition hover:text-white">
							Contact
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}

import Link from "next/link";

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
		<div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-md">
				<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link href="#" className="flex items-center gap-2">
						<span className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-500 text-white">
							<span className="text-sm font-bold">T</span>
						</span>
						<span className="text-xl font-semibold tracking-tight">
							TransferLinkz
						</span>
					</Link>
					<div className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-sm text-zinc-300 transition hover:text-white">
								{item.label}
							</Link>
						))}
					</div>
					<div className="flex items-center gap-4">
						<Link
							href="#contact"
							className="text-sm text-zinc-300 transition hover:text-white">
							Login
						</Link>
						<Link
							href="#contact"
							className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500">
							Start for free
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
					<h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
						Reducing Arrival Risk & Operational Escalations with TransferLinkz
					</h1>
					<p className="mt-8 text-lg text-violet-300 font-medium">
						TransferLinkz is not a messaging tool — it is arrival insurance.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-6">
						<Link
							href="#solution"
							className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-violet-500">
							See how it works
							<span aria-hidden>→</span>
						</Link>
						<Link
							href="#contact"
							className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-6 py-3.5 text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-800/50">
							Get in touch
						</Link>
					</div>
				</div>

				{/* Product mockup - arrival link / status */}
				<div className="mx-auto mt-16 max-w-5xl">
					<div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-violet-500/10">
						<div className="flex border-b border-zinc-800 px-4 py-3">
							<div className="flex gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
								<span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
								<span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
							</div>
						</div>
						<div className="flex min-h-[280px] flex-col p-6 md:flex-row md:items-stretch">
							<aside className="w-full border-b border-zinc-800 pb-4 md:w-48 md:border-b-0 md:border-r md:pb-0 md:pr-4">
								<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
									Arrival link
								</div>
								<div className="mt-2 space-y-2">
									{["Driver details", "Live status", "Contact"].map((item) => (
										<div key={item} className="h-8 rounded-lg bg-zinc-800/80" />
									))}
								</div>
							</aside>
							<main className="flex-1 pt-4 md:pt-0 md:pl-6">
								<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
									Live status
								</div>
								<div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
									{[1, 2, 3, 4, 5, 6].map((i) => (
										<div
											key={i}
											className="rounded-xl border border-zinc-800 bg-zinc-800/50 p-4">
											<div className="h-2 w-2/3 rounded bg-zinc-600" />
											<div className="mt-2 h-2 w-full rounded bg-zinc-700" />
											<div className="mt-3 h-3 w-1/2 rounded-full bg-emerald-500/30" />
										</div>
									))}
								</div>
							</main>
						</div>
					</div>
				</div>
			</section>

			{/* The Problem */}
			<section id="problem" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold">The Problem</h2>
					<p className="mt-4 max-w-3xl text-lg text-zinc-400">
						Arrival is the most failure-prone moment of the guest journey. It
						is:
					</p>
					<ul className="mt-6 flex flex-wrap gap-3">
						{PROBLEM_POINTS.map((point) => (
							<li
								key={point}
								className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm font-medium text-zinc-200">
								{point}
							</li>
						))}
					</ul>
					<p className="mt-8 text-lg text-zinc-400">
						When transfers fail, the tour operator absorbs:
					</p>
					<ul className="mt-4 space-y-2">
						{OPERATOR_COSTS.map((cost) => (
							<li key={cost} className="flex items-center gap-2 text-zinc-300">
								<span className="text-red-400/80">×</span> {cost}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* The Root Cause */}
			<section
				id="root-cause"
				className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold">The Root Cause</h2>
					<ul className="mt-8 space-y-4">
						{ROOT_CAUSES.map((cause) => (
							<li
								key={cause}
								className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
								<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
									!
								</span>
								<span className="text-zinc-300">{cause}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* The Solution: TransferLinkz */}
			<section id="solution" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold">
						The Solution: TransferLinkz
					</h2>
					<p className="mt-4 max-w-3xl text-lg text-zinc-400">
						TransferLinkz is Arrival Risk Management software:
					</p>
					<div className="mt-10 grid gap-6 sm:grid-cols-3">
						{SOLUTION_POINTS.map(({ who, what }) => (
							<div
								key={who}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-violet-500/30">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 font-semibold">
									{who.slice(0, 1)}
								</div>
								<h3 className="mt-4 font-semibold text-white">{who}</h3>
								<p className="mt-2 text-sm text-zinc-400">{what}</p>
							</div>
						))}
					</div>
					<div className="mt-12 flex flex-wrap gap-4">
						<Link
							href="#contact"
							className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500">
							Get started
							<span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* What This Fixes */}
			<section id="fixes" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold">What This Fixes</h2>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{FIXES.map((fix) => (
							<div
								key={fix}
								className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
								<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
									✓
								</span>
								<span className="text-zinc-200">{fix}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Operational Impact */}
			<section id="impact" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold">Operational Impact</h2>
					<ul className="mt-10 space-y-4">
						{IMPACT_ITEMS.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-4">
								<span className="text-emerald-500">✓</span>
								<span className="text-zinc-200">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Commercial Model */}
			<section id="pricing" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-center text-3xl font-semibold">
						Commercial Model
					</h2>
					<p className="mt-4 text-center text-zinc-400">
						Simple pricing that scales with your volume.
					</p>
					<div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
						{COMMERCIAL_POINTS.map((point) => (
							<div
								key={point}
								className="flex w-full max-w-xs items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:w-auto">
								<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
									✓
								</span>
								<span className="text-zinc-200">{point}</span>
							</div>
						))}
					</div>
					<div className="mt-12 text-center">
						<Link
							href="#contact"
							className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500">
							Request a quote
							<span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-center text-3xl font-semibold">
						Success Metrics
					</h2>
					<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{SUCCESS_METRICS.map(({ label, direction }) => (
							<div
								key={label}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
								<span
									className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
									aria-hidden>
									{direction === "down" ? "↓" : "↑"}
								</span>
								<p className="mt-3 font-medium text-zinc-200">{label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Positioning CTA */}
			<section className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
						TransferLinkz is not a messaging tool — it is arrival insurance.
					</p>
					<Link
						href="#contact"
						className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-violet-500">
						Get started — it&apos;s free
						<span aria-hidden>→</span>
					</Link>
				</div>
			</section>

			{/* FAQ */}
			<section id="contact" className="border-t border-zinc-800/50 px-6 py-24">
				<div className="mx-auto max-w-3xl">
					<h2 className="text-3xl font-semibold">Frequently asked questions</h2>
					<p className="mt-2 text-zinc-400">
						Contact us via email for more information.
					</p>
					<div className="mt-10 space-y-2">
						{FAQ_ITEMS.map(({ q, a }) => (
							<details
								key={q}
								className="group rounded-lg border border-zinc-800 bg-zinc-900/30">
								<summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left font-medium transition hover:bg-zinc-800/30 [&::-webkit-details-marker]:hidden">
									{q}
									<span className="shrink-0 transition group-open:rotate-180">
										<svg
											className="h-5 w-5 text-zinc-400"
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
								<p className="border-t border-zinc-800 px-5 py-4 text-sm text-zinc-400">
									{a}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-zinc-800/50 px-6 py-12">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
					<span className="text-sm text-zinc-500">
						© TransferLinkz. All rights reserved.
					</span>
					<div className="flex gap-8 text-sm text-zinc-400">
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

import Link from "next/link";
import { HERO } from "@/lib/data/home";

export function Hero() {
	return (
		<section className="relative px-6 pt-32 pb-20 text-center">
			<div className="mx-auto max-w-4xl">
				<div
					className="mb-4 h-0.5 w-12 rounded-full bg-cyan-400 mx-auto"
					aria-hidden
				/>
				<h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
					{HERO.title}
				</h1>
				<p className="mt-8 text-lg text-slate-300">{HERO.subtitle}</p>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-6">
					<Link
						href={HERO.ctaPrimary.href}
						className="btn-cta-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium transition">
						{HERO.ctaPrimary.label}
						<span aria-hidden>→</span>
					</Link>
					<Link
						href={HERO.ctaSecondary.href}
						className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/40">
						{HERO.ctaSecondary.label}
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
									<div key={item} className="h-8 rounded-lg bg-slate-800/80" />
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
	);
}

import { PROBLEM_POINTS, OPERATOR_COSTS } from "@/lib/data/home";

export function ProblemSection() {
	return (
		<section id="problem" className="border-t border-slate-700/50 px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-3xl font-semibold text-white">The Problem</h2>
				<p className="mt-4 max-w-3xl text-lg text-slate-400">
					Arrival is the most failure-prone moment of the guest journey. It is:
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
	);
}

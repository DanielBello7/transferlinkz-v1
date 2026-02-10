import Link from "next/link";
import { SOLUTION_POINTS } from "@/lib/data/home";

export function SolutionSection() {
  return (
    <section id="solution" className="border-t border-slate-700/50 px-6 py-24">
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
              className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 transition hover:border-cyan-500/40"
            >
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
            className="btn-cta-gradient inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition"
          >
            Get started
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

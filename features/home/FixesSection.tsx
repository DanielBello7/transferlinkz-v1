import { FIXES } from "@/lib/data/home";

export function FixesSection() {
  return (
    <section id="fixes" className="border-t border-slate-700/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">What This Fixes</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FIXES.map((fix) => (
            <div
              key={fix}
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                ✓
              </span>
              <span className="text-slate-200">{fix}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ROOT_CAUSES } from "@/lib/data/home";

export function RootCauseSection() {
  return (
    <section
      id="root-cause"
      className="border-t border-slate-700/50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">The Root Cause</h2>
        <ul className="mt-8 space-y-4">
          {ROOT_CAUSES.map((cause) => (
            <li
              key={cause}
              className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                !
              </span>
              <span className="text-slate-300">{cause}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

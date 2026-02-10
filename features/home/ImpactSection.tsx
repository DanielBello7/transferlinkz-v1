import { IMPACT_ITEMS } from "@/lib/data/home";

export function ImpactSection() {
  return (
    <section id="impact" className="border-t border-slate-700/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">
          Operational Impact
        </h2>
        <ul className="mt-10 space-y-4">
          {IMPACT_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-4"
            >
              <span className="text-emerald-500">✓</span>
              <span className="text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

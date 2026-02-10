import { SUCCESS_METRICS } from "@/lib/data/home";

export function SuccessMetricsSection() {
  return (
    <section className="border-t border-slate-700/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-white">
          Success Metrics
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUCCESS_METRICS.map(({ label, direction }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 text-center"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
                aria-hidden
              >
                {direction === "down" ? "↓" : "↑"}
              </span>
              <p className="mt-3 font-medium text-slate-200">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

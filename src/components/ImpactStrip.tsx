const STATS = [
  {
    value: '45+',
    label: 'Production issues resolved',
  },
  {
    value: '30%',
    label: 'Faster report processing',
  },
  {
    value: '100%',
    label: 'Daily cafe orders processed through Nexus-ERP',
  },
];

export default function ImpactStrip() {
  return (
    <section aria-labelledby="impact-heading" className="mx-auto max-w-4xl">
      <h2 id="impact-heading" className="sr-only">
        Impact at a glance
      </h2>

      <div className="grid grid-cols-1 border-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 dark:border-zinc-800 dark:sm:divide-zinc-800">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="
              px-5 py-6 text-center
              border-b border-slate-200 last:border-b-0
              sm:border-b-0 sm:px-6 sm:py-7
              dark:border-zinc-800
            "
          >
            <p className="font-mono text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              {stat.value}
            </p>

            <p className="mx-auto mt-2 max-w-[220px] text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-400 dark:text-zinc-600">
        Selected outcomes from production ERP work at Cultive8 Technologies and Nexus-ERP at Beans
        &amp; Butter Cafe.
      </p>
    </section>
  );
}

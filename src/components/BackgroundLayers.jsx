/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none mix-blend-soft-light opacity-[0.012] dark:mix-blend-overlay dark:opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    ></div>
  );
}

function GradientBands() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-center">
      {/* Top band */}
      <div className="absolute top-[-15%] left-[-10%] w-[120%] h-[40vh] bg-linear-to-r from-violet-200/20 via-violet-100/10 dark:from-violet-600/5 dark:via-violet-900/5 to-transparent transform -rotate-6 border-b border-violet-500/5 dark:border-violet-500/10"></div>

      {/* Middle band */}
      <div className="absolute top-[35%] right-[-10%] w-[120%] h-[35vh] bg-linear-to-l from-slate-200/25 via-slate-100/20 dark:from-zinc-800/20 dark:via-zinc-900/40 to-transparent transform rotate-3 border-y border-slate-300/10 dark:border-zinc-700/20"></div>

      {/* Bottom band */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[45vh] bg-linear-to-r from-violet-100/20 via-slate-50/15 dark:from-violet-950/20 dark:via-zinc-900/50 to-transparent transform -rotate-3 border-t border-violet-500/5"></div>
    </div>
  );
}

function MouseGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.04), transparent 80%)`,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function BackgroundLayers() {
  return (
    <>
      <NoiseOverlay />
      <GradientBands />
      <MouseGlow />
    </>
  );
}

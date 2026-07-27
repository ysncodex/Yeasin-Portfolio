/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none mix-blend-soft-light opacity-[0.03] dark:mix-blend-overlay dark:opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAP8AAAAAAAABAAAAAAAAAAAAAAD/AAAAAAAO9O6wAAAACHRSTlMAMwA0ADMAMwAzADMAAP///wD///8A////AP///wD///8A////AP///wD///8AAKMAAAA2SURBVDjLvZQxDsAgDAP9E0H+oH+pE3+hU1e6dbZkymQzM/OZmZmZmZmZmZl/zMzMzMzMzMzMzPxjZmZmZmZmZmZmZv4xMzMzMzMzMzMzM/OYmZmZmZmZmZmZmf/MzMzMzMzMzMzM/GNmZmZmZmZmZmZm/jEzMzMzMzMzMzMz/5iZmZmZmZmZmZmZ/8zMzMw/5wEaC7k2e9w8IQAAAABJRU5ErkJggg==")`,
        backgroundRepeat: 'repeat',
      }}
    ></div>
  );
}

function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30 dark:opacity-40"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    ></div>
  );
}

function AuroraOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Top Left Orb */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 dark:bg-violet-600/20 blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[8s]"></div>

      {/* Bottom Right Orb */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 dark:bg-indigo-600/20 blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[12s]"></div>
    </div>
  );
}

function MouseGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.05), transparent 80%)`,
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
      <GridBackground />
      <AuroraOrbs />
      <MouseGlow />
    </>
  );
}

import Image from 'next/image';
import { ExternalLink, Layers, Cpu, Code2, Terminal, Github } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Shared helpers
   ───────────────────────────────────────────── */

function CardWrapper({ children, className, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative rounded-4xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-violet-500 ${className}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSelect();
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Some Things I&apos;ve Built
      </h2>
      <div className="h-px bg-slate-200 dark:bg-zinc-800 grow max-w-xs"></div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card 1 — Immersive Hero (2×2)
   ───────────────────────────────────────────── */

function HeroCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      className="col-span-1 md:col-span-2 md:row-span-2 shadow-xl dark:shadow-2xl dark:shadow-violet-900/20 min-h-100 md:min-h-125"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div
        className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-60 dark:opacity-70 transition-transform duration-700 group-hover:scale-105`}
      ></div>
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

      <div className="relative h-full flex flex-col justify-end p-6 md:p-10">
        <div className="flex justify-between items-start mb-auto pt-2">
          <span className="px-4 py-1.5 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase border border-white/20">
            Featured
          </span>
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all z-10"
          >
            <Github size={20} />
          </a>
        </div>

        <div className="bg-white/10 dark:bg-zinc-950/40 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-3xl transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/80 dark:text-zinc-300 font-medium mb-6 line-clamp-2 md:line-clamp-none">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-bold font-mono text-white bg-black/20 dark:bg-white/10 px-3 py-1.5 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Card 2 — Typographic (1×1)
   ───────────────────────────────────────────── */

function TypographicCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      className="col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col justify-between p-8 min-h-70"
    >
      <div className="absolute -right-8 -bottom-10 text-[10rem] font-black text-slate-100 dark:text-zinc-800/50 leading-none select-none pointer-events-none transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
        02
      </div>

      <div className="relative z-10 flex justify-between items-start mb-8">
        <div
          className={`w-12 h-12 rounded-2xl bg-linear-to-br ${project.color} flex items-center justify-center shadow-inner`}
        >
          <Cpu className="text-white w-6 h-6" />
        </div>
        <a
          href={project.link}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          className="text-slate-400 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white transition-colors z-10"
        >
          <ExternalLink size={22} />
        </a>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium line-clamp-3 mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-bold tracking-wider uppercase text-slate-500 dark:text-zinc-500"
            >
              {t} {i < 2 && '•'}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Card 3 — Split Visual (1×1)
   ───────────────────────────────────────────── */

function SplitVisualCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      className="col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col min-h-70"
    >
      <div
        className={`h-1/2 w-full bg-linear-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-overlay"></div>
        <Code2 className="text-white/40 w-16 h-16 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
      </div>

      <div className="p-6 md:p-8 h-1/2 flex flex-col justify-between relative bg-white dark:bg-zinc-900 transition-colors">
        <div className="absolute top-0 right-8 -translate-y-1/2">
          <a
            href={project.link}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-lg text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-bold tracking-wider uppercase text-slate-500 dark:text-zinc-500"
            >
              {t} {i < 2 && '•'}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Card 4 — Wide Horizontal Banner (Full Width)
   ───────────────────────────────────────────── */

function BannerCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      className="col-span-1 md:col-span-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
        <div className="flex items-center gap-4 mb-6">
          <Terminal className="text-violet-600 dark:text-violet-400 w-8 h-8" />
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-lg text-slate-600 dark:text-zinc-400 font-medium mb-8 leading-relaxed max-w-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-bold font-mono text-slate-600 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10"
          >
            <ExternalLink size={18} /> Live
          </a>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 h-64 md:h-auto bg-linear-to-br ${project.color} relative overflow-hidden order-1 md:order-2 flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-overlay"></div>

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Projects({ setSelectedProject }) {
  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-6">
        <HeroCard project={PROJECTS[0]} onSelect={() => setSelectedProject(PROJECTS[0])} />
        <TypographicCard project={PROJECTS[1]} onSelect={() => setSelectedProject(PROJECTS[1])} />
        <SplitVisualCard project={PROJECTS[2]} onSelect={() => setSelectedProject(PROJECTS[2])} />
        <BannerCard project={PROJECTS[3]} onSelect={() => setSelectedProject(PROJECTS[3])} />
      </div>
    </section>
  );
}

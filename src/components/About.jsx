import { Terminal, Code2, Cpu, Layers, Download, Database } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const SKILL_ICONS = [Code2, Cpu, Database, Layers];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function SectionHeader() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
        <Terminal className="text-violet-600 dark:text-violet-500" /> About Me
      </h2>
      <div className="h-px bg-slate-200 dark:bg-zinc-800 grow max-w-xs"></div>
    </div>
  );
}

function Bio() {
  return (
    <div className="space-y-6 text-slate-600 dark:text-zinc-400 leading-relaxed text-lg">
      <p>
        Hi, I&apos;m {PERSONAL_INFO.name} — a Frontend-focused Full-Stack Engineer passionate about
        building fast, scalable, and user-centered web applications. I specialize in React.js and
        modern JavaScript ecosystems, with full-stack experience in Node.js and .NET Core, along
        with additional experience in Next.js and TypeScript.
      </p>
      <p>
        At Cultive8 Technologies, I contributed to enterprise ERP systems by building
        production-ready modules and improving system performance — reducing API latency and
        resolving 45+ production issues. I also developed a scalable React component library using
        Redux and Zustand.
      </p>
      <p>
        I enjoy creating clean architectures, reusable components, and responsive UI systems with
        tools like Tailwind CSS and Material UI, focusing on performance, accessibility, and
        maintainable code.
      </p>
      <p>
        When I&apos;m not coding, I&apos;m usually exploring modern frontend architectures,
        performance optimization techniques, and ways to improve developer experience.
      </p>
      <p>
        I hold a <strong>B.Sc. in Computer Science & Engineering</strong> from Green University of
        Bangladesh, with a core focus on building scalable, full-stack software solutions.
      </p>

      <DownloadCVButton />
    </div>
  );
}

function DownloadCVButton() {
  return (
    <div className="pt-4">
      <a
        href={PERSONAL_INFO.cv}
        target="_blank"
        rel="noreferrer"
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 text-slate-900 dark:text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 group"
      >
        <Download
          size={18}
          className="text-slate-400 dark:text-zinc-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
        />
        Download Resume
      </a>
    </div>
  );
}

function SkillGroup({ skillGroup, idx }) {
  const Icon = SKILL_ICONS[idx];

  return (
    <div className="space-y-4">
      <h3 className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
        {Icon && <Icon size={18} className="text-violet-600 dark:text-violet-400" />}
        {skillGroup.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skillGroup.items.map((skill, sIdx) => (
          <span
            key={sIdx}
            className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full text-sm font-mono text-slate-600 dark:text-zinc-300 hover:border-violet-400 dark:hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-300 transition-all hover:-translate-y-1 shadow-sm dark:shadow-none cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="space-y-8">
      {SKILLS.map((skillGroup, idx) => (
        <SkillGroup key={idx} skillGroup={skillGroup} idx={idx} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <SectionHeader />

      <div className="grid md:grid-cols-2 gap-16">
        <Bio />
        <SkillsList />
      </div>
    </section>
  );
}

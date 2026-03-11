import { EXPERIENCE } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function SectionHeader() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Where I&apos;ve Worked
      </h2>
      <div className="h-px bg-slate-200 dark:bg-zinc-800 grow max-w-xs"></div>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute w-4 h-4 bg-white dark:bg-zinc-950 border-[3px] border-violet-400 dark:border-violet-500 rounded-full -left-2.25 top-1 group-hover:bg-violet-500 group-hover:border-violet-600 transition-colors shadow-sm"></div>
  );
}

function JobHeader({ role, company }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        {role}
      </h3>
      <span className="text-violet-600 dark:text-violet-500 font-semibold">@ {company}</span>
    </div>
  );
}

function JobDescription({ description }) {
  if (Array.isArray(description)) {
    return (
      <ul className="list-disc list-outside ml-5 mb-6 space-y-2 text-slate-600 dark:text-zinc-400 leading-relaxed">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    );
  }

  return <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">{description}</p>;
}

function TechTags({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span
          key={i}
          className="text-xs font-mono text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/10 px-3 py-1 rounded-full border border-violet-200 dark:border-transparent"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function TimelineEntry({ job }) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <TimelineDot />
      <JobHeader role={job.role} company={job.company} />
      <p className="text-sm font-mono text-slate-500 dark:text-zinc-500 mb-4">{job.period}</p>
      <JobDescription description={job.description} />
      <TechTags tech={job.tech} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeader />

      <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
        {EXPERIENCE.map((job) => (
          <TimelineEntry key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

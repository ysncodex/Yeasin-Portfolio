import { EXPERIENCE } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

/* ─────────────────────────────────────────────
   Helper Functions
   ───────────────────────────────────────────── */

function calculateTotalExperience(experienceArray) {
  let totalMonths = 0;

  experienceArray.forEach((job) => {
    // Split the period string (e.g., "September 2024 - December 2025")
    const [startStr, endStr] = job.period.split(' - ');
    const startDate = new Date(startStr);
    const endDate = endStr.toLowerCase() === 'present' ? new Date() : new Date(endStr);

    if (!isNaN(startDate) && !isNaN(endDate)) {
      // Calculate total months between the two dates
      const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) +
        1; // +1 to include the starting month

      totalMonths += months > 0 ? months : 0;
    }
  });

  // Convert to years with one decimal place
  return (totalMonths / 12).toFixed(1);
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function SectionHeader({ totalYears }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Where I&apos;ve Worked
        </h2>
        <div className="hidden md:block h-px bg-slate-200 dark:bg-zinc-800 w-12 lg:w-32"></div>
      </div>
      {/* Dynamic Experience Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-sm font-bold tracking-wide shadow-sm">
        <Briefcase size={16} /> {totalYears} Years Experience
      </div>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute w-4 h-4 bg-white dark:bg-zinc-950 border-[3px] border-violet-400 dark:border-violet-500 rounded-full -left-[9px] top-6 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300 z-10"></div>
  );
}

function JobHeader({ role, company, period }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {role}
        </h3>
        <p className="text-violet-600 dark:text-violet-400 font-semibold mt-1">@ {company}</p>
      </div>
      <span className="text-xs font-mono font-medium text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700/50 self-start sm:self-auto">
        {period}
      </span>
    </div>
  );
}

function JobDescription({ description }) {
  if (Array.isArray(description)) {
    return (
      <ul className="list-none space-y-3 mb-6 text-slate-600 dark:text-zinc-400 leading-relaxed">
        {description.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-3 relative before:content-['▹'] before:absolute before:left-0 before:text-violet-500 pl-5"
          >
            {point}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">{description}</p>;
}

function TechTags({ tech }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800/50">
      {tech.map((t, i) => (
        <span
          key={i}
          className="text-xs font-mono text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default"
        >
          {t}{' '}
          {i < tech.length - 1 && <span className="text-slate-300 dark:text-zinc-700 ml-2">/</span>}
        </span>
      ))}
    </div>
  );
}

function TimelineEntry({ job }) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <TimelineDot />

      <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-violet-900/5 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300">
        <JobHeader role={job.role} company={job.company} period={job.period} />
        <JobDescription description={job.description} />
        <TechTags tech={job.tech} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Experience() {
  const dynamicTotalYears = calculateTotalExperience(EXPERIENCE);

  return (
    <section id="experience" className="scroll-mt-32 max-w-4xl mx-auto">
      <SectionHeader totalYears={dynamicTotalYears} />

      <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-2 md:ml-4 space-y-10 pb-4">
        {EXPERIENCE.map((job) => (
          <TimelineEntry key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

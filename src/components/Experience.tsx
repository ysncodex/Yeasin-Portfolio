import { EXPERIENCE } from '../data/portfolio';
import { Briefcase } from 'lucide-react';
import type { Experience as ExperienceType } from '../types';

const MONTH_PREFIXES = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

/* `new Date('September 2024')` is not spec-compliant and returns Invalid Date in Safari. */
function parseMonthYear(value: string) {
  const [month, year] = value.trim().split(/\s+/);
  const monthIndex = MONTH_PREFIXES.indexOf(month?.slice(0, 3).toLowerCase() ?? '');
  const parsedYear = Number(year);

  if (monthIndex === -1 || !Number.isInteger(parsedYear)) return null;

  return new Date(parsedYear, monthIndex, 1);
}

function calculateTotalExperience(experienceArray: ExperienceType[]) {
  let totalMonths = 0;

  experienceArray.forEach((job) => {
    const [startStr, endStr] = job.period.split(' - ');
    if (!startStr || !endStr) return;

    const startDate = parseMonthYear(startStr);
    const isPresent = endStr.trim().toLowerCase() === 'present';
    const endDate = isPresent ? new Date() : parseMonthYear(endStr);

    if (!startDate || !endDate) return;

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1;

    totalMonths += months > 0 ? months : 0;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months, totalMonths };
}

function formatExperienceLabel({ years, months }: { years: number; months: number }) {
  if (years <= 0 && months <= 0) return 'New';

  const yearPart = years > 0 ? `${years} Year${years !== 1 ? 's' : ''}` : '';
  const monthPart = months > 0 ? `${months} Month${months !== 1 ? 's' : ''}` : '';

  return [yearPart, monthPart].filter(Boolean).join(' ');
}

function SectionHeader({ experienceLabel }: { experienceLabel: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Where I&apos;ve Worked
        </h2>
        <div className="hidden md:block h-px bg-slate-200 dark:bg-zinc-800 w-12 lg:w-32"></div>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-bold tracking-wide shadow-sm w-fit">
        <Briefcase size={16} className="shrink-0" />
        {/* A "Present" role makes this depend on the current date, which drifts from the
            prerendered HTML between deploys. The build-time value is the one we keep. */}
        <span suppressHydrationWarning>{experienceLabel} Experience</span>
      </div>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute w-4 h-4 bg-white dark:bg-zinc-950 border-[3px] border-violet-400 dark:border-violet-500 rounded-full -left-[9px] top-6 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300 z-10"></div>
  );
}

function JobHeader({ role, company, period }: { role: string; company: string; period: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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

function JobDescription({ description }: { description: string | string[] }) {
  if (Array.isArray(description)) {
    return (
      <ul className="list-none space-y-3 mb-6 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
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
  return (
    <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
      {description}
    </p>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/50">
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

function TimelineEntry({ job }: { job: ExperienceType }) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <TimelineDot />

      <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-violet-900/5 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300">
        <JobHeader role={job.role} company={job.company} period={job.period} />
        <JobDescription description={job.description} />
        <TechTags tech={job.tech} />
      </div>
    </div>
  );
}

export default function Experience() {
  const duration = calculateTotalExperience(EXPERIENCE);
  const experienceLabel = formatExperienceLabel(duration);

  return (
    <section id="experience" className="scroll-mt-32 max-w-4xl mx-auto px-1">
      <SectionHeader experienceLabel={experienceLabel} />

      <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-2 md:ml-4 space-y-8 sm:space-y-10 pb-4">
        {EXPERIENCE.map((job) => (
          <TimelineEntry key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Github, Linkedin, ChevronRight, Download, Database, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const SOCIAL_PILLS = [
  { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
  { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: PERSONAL_INFO.resume, icon: Download, label: 'Resume', download: true },
];

const TECH_STACK = ['React.js', 'TypeScript', '.NET Core', 'Node.js', 'Databases (SQL/NoSQL)'];

interface HeroProps {
  scrollTo: (id: string) => void;
}

function Intro() {
  return (
    <div className="animate-fade-in-up space-y-4">
      <p className="text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium flex items-center gap-2">
        <Code2 size={18} /> Hi, my name is
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {PERSONAL_INFO.name}.
      </h1>
      <p className="text-3xl md:text-5xl font-bold tracking-tight text-slate-400 dark:text-zinc-500">
        {PERSONAL_INFO.role}
      </p>
      <p className="text-sm text-slate-500 dark:text-zinc-500">{PERSONAL_INFO.tagline}</p>
      <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed pt-2">
        {PERSONAL_INFO.bio}
      </p>
    </div>
  );
}

function ActionButtons({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => scrollTo('projects')}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2 shadow-lg shadow-violet-500/25 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Check out my work <ChevronRight size={18} />
      </button>
      <button
        onClick={() => scrollTo('contact')}
        className="px-6 py-3 bg-transparent border-2 border-slate-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 text-slate-700 dark:text-zinc-300 font-medium rounded-lg transition-all hover:-translate-y-1 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Contact Me
      </button>
    </div>
  );
}

function TechAndSocials() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {SOCIAL_PILLS.map(({ href, icon: Icon, label, download }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            {...(download ? { download: true } : {})}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-300 transition-all duration-300 shadow-xs"
          >
            <Icon size={16} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">{label}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Database size={14} className="text-slate-400 dark:text-zinc-500" />
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-zinc-800/50 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700/50 cursor-default hover:border-violet-400 dark:hover:border-violet-500/50 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroContent({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <div className="space-y-2 max-w-3xl flex-1 order-2 lg:order-1">
      <Intro />
      <div className="animate-fade-in-up delay-200 space-y-8 pt-6">
        <ActionButtons scrollTo={scrollTo} />
        <TechAndSocials />
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="flex-1 order-1 lg:order-2 flex justify-center w-full max-w-[280px] md:max-w-[340px] lg:max-w-md mb-12 lg:mb-0">
      <div className="animate-fade-in-up delay-100 relative w-full aspect-square">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-violet-600 dark:bg-violet-500" />

        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-xl bg-slate-100 dark:bg-zinc-900">
          <Image
            src={PERSONAL_INFO.avatar}
            alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`}
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 pt-10"
    >
      <HeroContent scrollTo={scrollTo} />
      <ProfileImage />
    </section>
  );
}

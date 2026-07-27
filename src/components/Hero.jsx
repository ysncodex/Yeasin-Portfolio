import Image from 'next/image';
import { Github, Linkedin, ChevronRight, Download, Database, Code2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const SOCIAL_PILLS = [
  { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
  { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: PERSONAL_INFO.resume, icon: Download, label: 'Resume', download: true },
];

const TECH_STACK = ['React.js', 'Node.js', 'MongoDB', 'MSSQL'];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function Intro() {
  return (
    <>
      <p className="animate-fade-in-up text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium flex items-center gap-2">
        <Code2 size={18} /> Hi, my name is
      </p>
      <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
        {PERSONAL_INFO.name}.
      </h1>
      <h2 className="animate-fade-in-up delay-200 text-3xl md:text-5xl font-bold tracking-tight text-slate-400 dark:text-zinc-500 mt-2">
        {PERSONAL_INFO.tagline}
      </h2>
      <p className="animate-fade-in-up delay-300 text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed pt-6">
        {PERSONAL_INFO.bio}
      </p>
    </>
  );
}

function ActionButtons({ scrollTo }) {
  return (
    <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 pt-6">
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
    <div className="animate-fade-in-up delay-500 pt-8 space-y-6">
      {/* Social Pills */}
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

      {/* Tech Stack Badges */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium text-slate-400 dark:text-zinc-500 flex items-center gap-1">
          <Database size={14} /> Core Stack:
        </span>
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

function HeroContent({ scrollTo }) {
  return (
    <div className="space-y-2 max-w-3xl flex-1 order-2 lg:order-1">
      <Intro />
      <ActionButtons scrollTo={scrollTo} />
      <TechAndSocials />
    </div>
  );
}

// Make sure to add the 'Terminal' icon to your lucide-react imports at the top of Hero.jsx!
// import { Github, Linkedin, ChevronRight, Download, Database, Code2, Terminal } from 'lucide-react';

function ProfileImage({ theme }) {
  return (
    <div className="animate-fade-in-up delay-200 flex-1 order-1 lg:order-2 flex justify-center w-full max-w-[280px] md:max-w-[340px] lg:max-w-md mb-12 lg:mb-0 relative">
      <div className="relative group w-full aspect-square">
        {/* Animated Gradient Halo Behind Image */}
        <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-60 transition duration-1000 group-hover:duration-500 animate-pulse"></div>

        {/* Main Glassmorphism Frame */}
        <div className="relative z-10 w-full h-full rounded-[2.5rem] p-2.5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800/80 shadow-2xl transition-all duration-500 group-hover:border-violet-500/50">
          {/* Inner Image Container */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-zinc-800 shadow-inner">
            <Image
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
              priority
              className="object-cover transition-all duration-700 ease-out transform group-hover:scale-105 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Floating UI Element - Bottom Left */}
        <div className="absolute -bottom-6 -left-6 z-20 transform transition-transform duration-500 group-hover:-translate-y-3 group-hover:-translate-x-3">
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center">
            <div className="w-10 h-10 flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl">
              <Code2 size={22} />
            </div>
          </div>
        </div>

        {/* Floating UI Element - Top Right */}
        <div className="absolute -top-6 -right-6 z-20 transform transition-transform duration-500 delay-100 group-hover:-translate-y-3 group-hover:translate-x-3">
          <div className="bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-800 flex items-center justify-center">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
              <Terminal size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Hero({ theme, scrollTo }) {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 pt-10"
    >
      <HeroContent scrollTo={scrollTo} />
      <ProfileImage theme={theme} />
    </section>
  );
}

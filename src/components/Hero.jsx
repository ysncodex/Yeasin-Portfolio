import Image from 'next/image';
import { Github, Linkedin, ChevronRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const SOCIAL_PILLS = [
  {
    href: PERSONAL_INFO.github,
    icon: Github,
    label: 'GitHub',
    hoverClass: 'group-hover:scale-110',
  },
  {
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin,
    label: 'LinkedIn',
    hoverClass: 'group-hover:scale-110',
  },
  {
    href: PERSONAL_INFO.resume,
    icon: Download,
    label: 'Resume',
    hoverClass: 'group-hover:-translate-y-1',
    download: true,
  },
];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function Intro() {
  return (
    <>
      <p className="animate-fade-in-up text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium">
        Hi, my name is
      </p>
      <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {PERSONAL_INFO.name}.
      </h1>
      <h2 className="animate-fade-in-up delay-200 text-xl md:text-4xl font-extrabold tracking-tight text-slate-500 dark:text-zinc-500">
        {PERSONAL_INFO.tagline}
      </h2>
      <p className="animate-fade-in-up delay-300 text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed pt-4">
        {PERSONAL_INFO.bio}
      </p>
    </>
  );
}

function ActionButtons({ scrollTo }) {
  return (
    <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 pt-8">
      <button
        onClick={() => scrollTo('projects')}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-white font-medium rounded-lg transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2 shadow-lg shadow-violet-500/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Check out my work <ChevronRight size={18} />
      </button>
      <button
        onClick={() => scrollTo('contact')}
        className="px-6 py-3 bg-white dark:bg-transparent border border-slate-300 dark:border-zinc-700 hover:border-violet-500 dark:hover:border-violet-500 text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium rounded-lg transition-all shadow-sm dark:shadow-none hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Contact Me
      </button>
    </div>
  );
}

function SocialPills() {
  const pillBase =
    'flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-300 transition-all duration-300 group shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950';

  return (
    <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-4 pt-6">
      {SOCIAL_PILLS.map(({ href, icon: Icon, label, hoverClass, download }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...(download ? { download: true } : {})}
          className={`${pillBase}${download ? ' backdrop-blur-sm' : ''}`}
        >
          <Icon size={18} className={`${hoverClass} transition-transform`} />
          <span className="text-sm font-semibold">{label}</span>
        </a>
      ))}
    </div>
  );
}

function HeroContent({ scrollTo }) {
  return (
    <div className="space-y-6 max-w-3xl flex-1 order-2 lg:order-1">
      <Intro />
      <ActionButtons scrollTo={scrollTo} />
      <SocialPills />
    </div>
  );
}

function ProfileImage({ theme }) {
  return (
    <div className="animate-fade-in-up delay-200 flex-1 order-1 lg:order-2 flex justify-center lg:justify-end w-full max-w-70 md:max-w-[320px] lg:max-w-md mb-12 lg:mb-0 mt-8 lg:mt-0">
      <div className="relative group w-full aspect-square md:w-80 md:h-80 lg:w-85 lg:h-85 animate-float">
        {/* Offset border */}
        <div className="absolute inset-0 border-2 border-violet-500/20 dark:border-violet-500/30 rounded-2xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 ease-out z-0"></div>

        {/* Dot pattern */}
        <div
          className="absolute -top-6 -left-6 w-32 h-32 transition-opacity duration-500 group-hover:opacity-80 opacity-40 z-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, ${theme === 'dark' ? '0.4' : '0.2'}) 1.5px, transparent 1.5px)`,
            backgroundSize: '16px 16px',
          }}
        ></div>

        {/* Glow */}
        <div className="absolute inset-0 bg-violet-600 rounded-2xl opacity-5 dark:opacity-10 blur-2xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 z-0"></div>

        {/* Image container */}
        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-zinc-800 group-hover:border-violet-300 dark:group-hover:border-violet-500/60 bg-white dark:bg-zinc-900 shadow-2xl dark:shadow-none transition-colors duration-500">
          <Image
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
            priority
            className={`object-cover transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 ${theme === 'dark' ? 'grayscale sepia-[.2] hue-rotate-240' : 'grayscale-50'}`}
          />
          <div className="absolute inset-0 bg-linear-to-tr from-violet-500/10 dark:from-violet-500/20 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
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
      className="min-h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20"
    >
      <HeroContent scrollTo={scrollTo} />
      <ProfileImage theme={theme} />
    </section>
  );
}

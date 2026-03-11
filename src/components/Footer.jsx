import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.github, icon: Github, external: true },
  { href: PERSONAL_INFO.linkedin, icon: Linkedin, external: true },
  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, external: false },
];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function Divider() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent"></div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mb-6 pt-4">
      {SOCIAL_LINKS.map(({ href, icon: Icon, external }) => (
        <a
          key={href}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-slate-400 hover:text-violet-600 dark:text-zinc-500 dark:hover:text-violet-400 transition-all hover:-translate-y-1"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 text-center">
      <Divider />
      <SocialLinks />
      <p className="text-slate-500 dark:text-zinc-600 font-mono text-sm">
        Designed & Built by {PERSONAL_INFO.name} © 2026
      </p>
    </footer>
  );
}

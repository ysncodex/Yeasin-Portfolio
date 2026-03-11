import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';

/* ─────────────────────────────────────────────
   Hooks
   ───────────────────────────────────────────── */

function useEscapeKey(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);
}

function useScrollLock(isOpen) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function ModalKeyframes() {
  return (
    <style>{`
      @keyframes modalSheet {
        from { opacity: 0; transform: translateY(40px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-modal-sheet { animation: modalSheet 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    `}</style>
  );
}

function Backdrop({ onClick }) {
  return (
    <div
      className="absolute inset-0 bg-slate-900/60 dark:bg-zinc-950/90 backdrop-blur-2xl animate-fade"
      onClick={onClick}
    ></div>
  );
}

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close modal"
      className="group absolute top-6 right-6 md:top-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-white/10 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/40 text-white rounded-full backdrop-blur-xl transition-all shadow-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
}

function HeroHeader({ project }) {
  return (
    <div
      className={`relative w-full h-[45vh] md:h-[50vh] shrink-0 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}
    >
      {/* Full-cover Project Image */}
      {project.image && (
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
      )}

      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      <div className="absolute inset-0 bg-linear-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>

      {/* Title Badge - bottom left */}
      <div className="absolute bottom-6 left-8 md:bottom-10 md:left-16 z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 dark:bg-black/50 backdrop-blur-xl border border-white/15 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
          <span className="text-white text-sm font-bold tracking-wide">{project.title}</span>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ label, children }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-zinc-500 mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-slate-200 dark:bg-zinc-800/50"></div>;
}

function SpecSheet({ project }) {
  return (
    <div className="flex flex-col gap-8 lg:sticky lg:top-8 h-max">
      <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-[#111111] border border-slate-200/60 dark:border-zinc-800/50 space-y-8 shadow-sm">
        <SpecItem label="Role">
          <p className="text-lg font-bold text-slate-900 dark:text-white">{project.role}</p>
        </SpecItem>

        <Divider />

        <SpecItem label="Year">
          <p className="text-lg font-bold text-slate-900 dark:text-white">{project.year}</p>
        </SpecItem>

        <Divider />

        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-zinc-500 mb-4">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-semibold font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-zinc-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex items-center gap-5">
      <div className="w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-violet-500/20 dark:ring-violet-500/30"></div>
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400">
        Project Overview
      </span>
      <div className="h-px flex-1 bg-linear-to-r from-slate-200 dark:from-zinc-800 to-transparent"></div>
    </div>
  );
}

function ActionButtons({ project }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 mt-6 pt-10 border-t border-slate-100 dark:border-zinc-900">
      {/* Glowing Primary Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group relative w-full sm:w-auto inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl p-[1.5px] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-[#0a0a0a]"
      >
        <span className="absolute inset-0 bg-linear-to-r from-violet-600 via-indigo-600 to-violet-600 opacity-70 group-hover:opacity-100 transition-opacity duration-500 bg-size-[200%_auto] animate-[gradient_2s_linear_infinite]" />
        <span className="inline-flex h-full w-full items-center justify-center gap-3 rounded-[15px] bg-slate-900 dark:bg-[#0a0a0a] px-8 py-1 text-base font-bold text-white transition-all group-hover:bg-slate-900/80 dark:group-hover:bg-[#0a0a0a]/50 backdrop-blur-xl">
          Launch Platform{' '}
          <ExternalLink
            size={18}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </span>
      </a>

      {/* Minimal Secondary Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 bg-transparent hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-900 dark:text-white font-bold text-base rounded-2xl transition-all border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-[#0a0a0a]"
      >
        View Source{' '}
        <Github size={18} className="transform group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

function NarrativeContent({ project }) {
  return (
    <div className="flex flex-col gap-10 md:gap-12 mt-4 lg:mt-0">
      <SectionHeader />

      {/* Deep Dive Description */}
      <p className="text-xl md:text-[1.35rem] text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
        {project.longDescription}
      </p>

      <ActionButtons project={project} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  const handleClose = useCallback(() => setSelectedProject(null), [setSelectedProject]);

  useEscapeKey(selectedProject, handleClose);
  useScrollLock(selectedProject);

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      <ModalKeyframes />

      {/* Deep Blur Backdrop */}
      <Backdrop onClick={handleClose} />

      {/* Modal Content */}
      <div
        className="relative w-full h-full max-w-340 bg-white dark:bg-[#0a0a0a] border border-slate-200/50 dark:border-zinc-800/30 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-modal-sheet transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={handleClose} />
        <HeroHeader project={selectedProject} />

        {/* Scrollable Editorial Content */}
        <div className="flex-1 overflow-y-auto px-6 py-12 md:px-12 lg:px-20 transition-colors">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
            <SpecSheet project={selectedProject} />
            <NarrativeContent project={selectedProject} />
          </div>
        </div>
      </div>
    </div>
  );
}

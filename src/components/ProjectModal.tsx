'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import {
  X,
  Target,
  CheckCircle2,
  Wrench,
  Layers3,
  ExternalLink,
  Github,
  ArrowUpRight,
} from 'lucide-react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { Project } from '../types';

interface ProjectModalProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

function ModalBackdrop({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-slate-950/70 dark:bg-black/90 backdrop-blur-md"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

function HeroHeader({ project }: { project: Project }) {
  return (
    <div
      className={`relative w-full h-[38vh] min-h-[300px] shrink-0 bg-gradient-to-br ${project.color} overflow-hidden`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute bottom-7 left-6 md:bottom-10 md:left-12 z-10">
        <h2
          id="project-modal-title"
          className="text-3xl md:text-5xl font-black text-white max-w-4xl tracking-tight leading-tight"
        >
          {project.title}
        </h2>
      </div>
    </div>
  );
}

function SpecSidebar({ project }: { project: Project }) {
  return (
    <aside className="lg:sticky lg:top-8 h-max bg-slate-50 dark:bg-[#111111] border border-slate-200/70 dark:border-zinc-800/70 rounded-3xl p-6 md:p-7">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
          <Layers3 size={17} />
        </div>
        <h3 className="font-extrabold text-slate-900 dark:text-white">At a glance</h3>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 mb-1">Role</p>
          <p className="font-bold text-slate-900 dark:text-white">{project.role}</p>
        </div>
        <div className="h-px w-full bg-slate-200 dark:bg-zinc-800/60" />
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 mb-1">Built</p>
          <p className="font-bold text-slate-900 dark:text-white">{project.year}</p>
        </div>
        <div className="h-px w-full bg-slate-200 dark:bg-zinc-800/60" />
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 mb-2">Technology</p>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold font-mono bg-white dark:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function NarrativeContent({ project }: { project: Project }) {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 mb-5">
          <Target size={20} className="text-violet-500" /> What I built
        </h3>
        <p className="text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed">
          {project.longDescription}
        </p>

        {project.problem && (
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/70">
            <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 mb-2">The Problem</p>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-zinc-300">
              {project.problem}
            </p>
          </div>
        )}

        {project.approach && (
          <div className="mt-4 p-5 rounded-2xl bg-violet-50/60 dark:bg-violet-500/[0.04] border border-violet-100 dark:border-violet-500/10">
            <p className="text-xs font-bold text-violet-600 dark:text-violet-400 mb-2">
              The Approach
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-zinc-300">
              {project.approach}
            </p>
          </div>
        )}
      </section>

      {project.responsibilities && (
        <section>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 mb-5">
            <CheckCircle2 size={20} className="text-violet-500" /> Ownership
          </h3>
          <ul className="space-y-3">
            {project.responsibilities.map((req, i) => (
              <li
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/70 text-sm leading-6 text-slate-700 dark:text-zinc-300 flex gap-3"
              >
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-violet-500" />
                {req}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.engineering && project.engineering.length > 0 && (
        <section>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 mb-5">
            <Wrench size={20} className="text-violet-500" /> Engineering Focus
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.engineering.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800/70 bg-slate-50 dark:bg-zinc-900/50 flex items-start gap-3"
              >
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-zinc-600" />
                <p className="text-sm leading-6 font-medium text-slate-700 dark:text-zinc-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.outcome && (
        <section>
          <div className="p-6 md:p-7 rounded-2xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800">
            <p className="text-xs font-bold text-violet-300 mb-3">Outcome</p>
            <p className="text-base md:text-lg leading-relaxed font-medium text-white">
              {project.outcome}
            </p>
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200 dark:border-zinc-800/70">
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:-translate-y-0.5 transition-transform"
          >
            View Live Demo <ArrowUpRight size={16} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-transparent text-slate-900 dark:text-white text-sm font-bold hover:border-violet-300 transition-colors"
          >
            <Github size={16} /> View Source
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectModal({ selectedProject, setSelectedProject }: ProjectModalProps) {
  const handleClose = useCallback(() => setSelectedProject(null), [setSelectedProject]);
  const dialogRef = useFocusTrap(Boolean(selectedProject), handleClose);

  if (!selectedProject) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <ModalBackdrop onClick={handleClose} />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full h-full md:h-auto md:max-h-[92vh] max-w-6xl bg-white dark:bg-[#0a0a0a] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-modal-sheet"
      >
        <button
          onClick={handleClose}
          aria-label="Close project dialog"
          className="absolute top-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xl border border-white/20 transition-colors"
        >
          <X size={21} />
        </button>

        <HeroHeader project={selectedProject} />
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-9 md:px-10 md:py-12 lg:px-14">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10 lg:gap-14">
              <SpecSidebar project={selectedProject} />
              <NarrativeContent project={selectedProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { ExternalLink, Code2, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';

interface ProjectsProps {
  setSelectedProject: (project: Project | null) => void;
}

function SectionHeader() {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
        Projects &amp; Case Studies
      </h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-zinc-400">
        A selection of products and systems I&apos;ve built across business operations, e-commerce,
        and recruitment.
      </p>
    </div>
  );
}

function TechTags({ tech = [], limit }: { tech: string[]; limit?: number }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const remaining = limit ? Math.max(tech.length - limit, 0) : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((technology, index) => (
        <span
          key={`${technology}-${index}`}
          className="text-[10px] md:text-[11px] font-bold font-mono text-slate-600 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800"
        >
          {technology}
        </span>
      ))}
      {remaining > 0 && (
        <span className="text-[10px] md:text-[11px] font-bold font-mono text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800">
          +{remaining}
        </span>
      )}
    </div>
  );
}

interface UnifiedProjectCardProps {
  project: Project;
  onSelect: () => void;
}

function UnifiedProjectCard({ project, onSelect }: UnifiedProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-500/40 focus-within:border-violet-400 dark:focus-within:border-violet-500/60">
      <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-slate-100 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800/80">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}
          >
            <Code2 className="text-white/60 w-12 h-12" />
          </div>
        )}

        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider border border-white/10">
              Featured
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[9px] font-bold uppercase tracking-wider border border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400 mb-2 block">
          {project.role}
        </span>
        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 mt-3 line-clamp-3 flex-1">
          {project.summary ?? project.longDescription}
        </p>

        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800/60">
          <TechTags tech={project.tech} limit={4} />
        </div>

        <div className="flex items-center justify-between mt-6">
          {/* `after` stretches this button over the whole card, so the card is clickable
              without nesting interactive elements inside another click handler. */}
          <button
            type="button"
            onClick={onSelect}
            aria-label={`Explore the ${project.title} case study`}
            className="flex items-center gap-2 rounded-lg text-sm font-bold cursor-pointer text-slate-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
          >
            Explore case study
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <div className="relative z-10 flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ setSelectedProject }: ProjectsProps) {
  if (!PROJECTS?.length) return null;

  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project) => (
          <UnifiedProjectCard
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Code2, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';

const PAGE_SIZE = 4;
const ROW_WIDTH = 3; // gallery columns at desktop width

/* ─────────────────────────────────────────────
   Shared helpers
   ───────────────────────────────────────────── */

function chunkRows(items, size) {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

function CardWrapper({ children, className, onSelect, label }) {
  return (
    <div
      onClick={onSelect}
      role="button"
      aria-label={label ? `View ${label} project details` : 'View project details'}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative h-full rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-violet-500 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({ count }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Some Things I&apos;ve Built
        </h2>
        <div className="hidden md:block h-px bg-slate-200 dark:bg-zinc-800 w-12 lg:w-32"></div>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-bold tracking-wide shadow-sm w-fit">
        <Code2 size={16} className="shrink-0" />
        <span>
          {count} Project{count !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}

function TechTags({ tech, limit }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {shown.map((t, i) => (
        <span key={i} className="text-[11px] font-bold font-mono text-slate-600 dark:text-zinc-300">
          {t}
          {i < shown.length - 1 && (
            <span className="text-slate-300 dark:text-zinc-700 ml-2">/</span>
          )}
        </span>
      ))}
    </div>
  );
}

function GridKeyframes() {
  return (
    <style>{`
      @keyframes projectPageIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-project-page { animation: projectPageIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      @media (prefers-reduced-motion: reduce) {
        .animate-project-page { animation: none; }
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────
   Hero card — for project.featured === true.
   spanClassName lets it stretch to fill a row on
   its own when it's the only side item present.
   ───────────────────────────────────────────── */

function HeroCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      label={project.title}
      className="sm:col-span-2 sm:row-span-2 shadow-xl dark:shadow-2xl dark:shadow-black min-h-[380px]"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 dark:opacity-80 transition-opacity duration-700 group-hover:opacity-60 mix-blend-multiply dark:mix-blend-overlay`}
      ></div>
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/60"></div>

      <div className="relative h-full flex flex-col justify-end p-6 md:p-10">
        <div className="flex justify-between items-start mb-auto pt-2">
          {project.featured && (
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase border border-white/20">
              Featured
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="ml-auto p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all z-10 hover:scale-110"
            >
              <Github size={20} />
            </a>
          )}
        </div>

        <div className="bg-white/10 dark:bg-zinc-950/50 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/80 dark:text-zinc-300 font-medium mb-6 line-clamp-2">
            {project.longDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-bold font-mono text-white bg-black/30 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Gallery card — regular grid entries.
   spanExtra stretches it to match the hero's full
   height when it's the only card beside the hero.
   ───────────────────────────────────────────── */

function GalleryCard({ project, onSelect, spanExtra = '' }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      label={project.title}
      className={`bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col min-h-[280px] ${spanExtra}`}
    >
      <div
        className={`relative h-40 md:h-44 w-full shrink-0 overflow-hidden bg-gradient-to-br ${project.color}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="text-white/60 w-10 h-10" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay"></div>

        {project.github && (
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-all z-10 hover:scale-110"
          >
            <Github size={15} />
          </a>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 mt-1 text-slate-400 hover:text-violet-600 dark:text-zinc-500 dark:hover:text-violet-400 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium line-clamp-2 mb-4 flex-1">
          {project.longDescription}
        </p>

        <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/60">
          <TechTags tech={project.tech} limit={4} />
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Wide card — used for a single leftover project
   that would otherwise sit alone with empty space
   beside it. Fills the entire row width.
   ───────────────────────────────────────────── */

function WideCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      label={project.title}
      className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col md:flex-row min-h-[260px]"
    >
      <div className="relative w-full md:w-2/5 h-48 md:h-auto shrink-0 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}
          >
            <Code2 className="text-white/60 w-12 h-12" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay"></div>
      </div>

      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0 mt-1">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-violet-600 dark:text-zinc-500 dark:hover:text-violet-400 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-violet-600 dark:text-zinc-500 dark:hover:text-violet-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium line-clamp-2 mb-4">
          {project.longDescription}
        </p>

        <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/60">
          <TechTags tech={project.tech} limit={6} />
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   Spotlight card — the only project on a page
   ───────────────────────────────────────────── */

function SpotlightCard({ project, onSelect }) {
  return (
    <CardWrapper
      onSelect={onSelect}
      label={project.title}
      className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:border-violet-300 dark:hover:border-violet-500/50 flex flex-col md:flex-row min-h-[380px] md:min-h-[420px]"
    >
      <div className="relative w-full md:w-1/2 h-56 md:h-auto shrink-0 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}
          >
            <Code2 className="text-white/60 w-16 h-16" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay"></div>
        {project.featured && (
          <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
            Featured
          </span>
        )}
      </div>

      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-500"></span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400">
            {project.role}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-4">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-bold font-mono text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/20 px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10"
            >
              <ExternalLink size={18} /> View Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors z-10"
            >
              <Github size={18} /> View Source
            </a>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────────────────────────────
   A row of leftover cards that always fills its
   full width evenly — 1 card = full-width WideCard,
   2 or 3 cards = equal-width GalleryCards.
   ───────────────────────────────────────────── */

function OverflowRow({ items, onSelect }) {
  if (items.length === 1) {
    return <WideCard project={items[0]} onSelect={() => onSelect(items[0])} />;
  }
  return (
    <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
      {items.map((project) => (
        <div key={project.id} className="flex-1 min-w-0">
          <GalleryCard project={project} onSelect={() => onSelect(project)} />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Pagination controls
   ───────────────────────────────────────────── */

function PaginationControls({ page, totalPages, onPrev, onNext, onJump }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        disabled={page === 0}
        aria-label="Previous projects"
        className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-300 dark:hover:border-violet-500/40 transition-all disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            aria-label={`Go to page ${i + 1}`}
            aria-current={page === i ? 'true' : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              page === i
                ? 'w-6 bg-violet-500'
                : 'w-1.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={page === totalPages - 1}
        aria-label="Next projects"
        className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-300 dark:hover:border-violet-500/40 transition-all disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Projects({ setSelectedProject }) {
  const [page, setPage] = useState(0);

  if (!PROJECTS?.length) return null;

  const hasAnyFeatured = PROJECTS.some((p) => p.featured);

  // Featured projects always land on page 1.
  const orderedProjects = hasAnyFeatured
    ? [...PROJECTS].sort((a, b) => (b.featured === true) - (a.featured === true))
    : PROJECTS;

  const totalPages = Math.max(1, Math.ceil(orderedProjects.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const start = safePage * PAGE_SIZE;
  const pageItems = orderedProjects.slice(start, start + PAGE_SIZE);

  const heroIds = new Set(
    pageItems
      .filter(
        (p) => p.featured || (!hasAnyFeatured && safePage === 0 && p.id === orderedProjects[0].id)
      )
      .map((p) => p.id)
  );
  const heroItems = pageItems.filter((p) => heroIds.has(p.id));
  const galleryItems = pageItems.filter((p) => !heroIds.has(p.id));

  // Up to 2 gallery cards pair beside the hero; anything past that
  // overflows into full-width row(s) below so nothing is ever orphaned.
  const sideItems = heroItems.length > 0 ? galleryItems.slice(0, 2) : [];
  const overflowItems = heroItems.length > 0 ? galleryItems.slice(2) : galleryItems;
  const overflowRows = chunkRows(overflowItems, ROW_WIDTH);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const goTo = (i) => setPage(Math.min(Math.max(i, 0), totalPages - 1));

  return (
    <section id="projects" className="scroll-mt-32">
      <GridKeyframes />
      <SectionHeader count={PROJECTS.length} />

      <div key={safePage} className="animate-project-page space-y-6 md:space-y-8">
        {pageItems.length === 1 ? (
          <SpotlightCard project={pageItems[0]} onSelect={() => setSelectedProject(pageItems[0])} />
        ) : (
          <>
            {heroItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 md:gap-8 sm:auto-rows-[minmax(260px,auto)]">
                {heroItems.map((project) => (
                  <HeroCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
                {sideItems.map((project) => (
                  <GalleryCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                    spanExtra={sideItems.length === 1 ? 'sm:row-span-2' : ''}
                  />
                ))}
              </div>
            )}

            {overflowRows.map((row, i) => (
              <OverflowRow
                key={row.map((p) => p.id).join('-') || i}
                items={row}
                onSelect={setSelectedProject}
              />
            ))}
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 md:mt-10">
          <PaginationControls
            page={safePage}
            totalPages={totalPages}
            onPrev={goPrev}
            onNext={goNext}
            onJump={goTo}
          />
        </div>
      )}
    </section>
  );
}

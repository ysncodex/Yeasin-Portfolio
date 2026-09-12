'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolio';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { Project } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
  setSelectedProject: (project: Project | null) => void;
  cycleTheme: () => void;
}

interface Command {
  group: string;
  label: string;
  action: () => void;
}

function buildCommands({
  scrollTo,
  setSelectedProject,
  cycleTheme,
  onClose,
}: Omit<CommandPaletteProps, 'isOpen'>): Command[] {
  const go = (id: string) => () => {
    scrollTo(id);
    onClose();
  };
  const openProject = (project: Project) => () => {
    setSelectedProject(project);
    onClose();
  };
  const openExternal = (href: string) => () => {
    window.open(href, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return [
    { group: 'Navigate', label: 'Go to About', action: go('about') },
    { group: 'Navigate', label: 'Go to Experience', action: go('experience') },
    { group: 'Navigate', label: 'Go to Projects', action: go('projects') },
    { group: 'Navigate', label: 'Go to Contact', action: go('contact') },
    ...PROJECTS.map((p) => ({
      group: 'Projects',
      label: `View case study — ${p.title}`,
      action: openProject(p),
    })),
    {
      group: 'Actions',
      label: 'Toggle theme',
      action: () => {
        cycleTheme();
        onClose();
      },
    },
    { group: 'Actions', label: 'Download resume', action: openExternal(PERSONAL_INFO.resume) },
    { group: 'Actions', label: 'Open GitHub profile', action: openExternal(PERSONAL_INFO.github) },
    {
      group: 'Actions',
      label: 'Open LinkedIn profile',
      action: openExternal(PERSONAL_INFO.linkedin),
    },
    {
      group: 'Actions',
      label: 'Send an email',
      action: openExternal(`mailto:${PERSONAL_INFO.email}`),
    },
  ];
}

export default function CommandPalette({
  isOpen,
  onClose,
  scrollTo,
  setSelectedProject,
  cycleTheme,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useFocusTrap(isOpen, onClose);

  const commands = useMemo(
    () => buildCommands({ scrollTo, setSelectedProject, cycleTheme, onClose }),
    [scrollTo, setSelectedProject, cycleTheme, onClose]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const safeActiveIndex = Math.min(activeIndex, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({ block: 'nearest' });
  }, [safeActiveIndex, query]);

  const moveActiveIndex = (offset: number) => {
    if (filtered.length === 0) return;
    setActiveIndex(Math.min(Math.max(safeActiveIndex + offset, 0), filtered.length - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveActiveIndex(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveActiveIndex(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[safeActiveIndex]?.action();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-24 px-4">
      <div
        className="absolute inset-0 bg-slate-950/50 dark:bg-black/70 backdrop-blur-sm animate-fade"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        tabIndex={-1}
        className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-modal-sheet"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-zinc-800">
          <Search size={18} className="text-slate-400 dark:text-zinc-500 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Jump to a section, project, or action…"
            className="w-full bg-transparent outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600"
          />
          <kbd className="hidden sm:block text-[10px] font-mono text-slate-400 dark:text-zinc-600 border border-slate-200 dark:border-zinc-700 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-center text-slate-400 dark:text-zinc-600">
              No matches for &ldquo;{query}&rdquo;.
            </p>
          )}
          {filtered.map((cmd, index) => {
            const showGroupLabel = index === 0 || cmd.group !== filtered[index - 1].group;
            return (
              <div key={`${cmd.group}-${cmd.label}`}>
                {showGroupLabel && (
                  <p className="px-4 pt-3 pb-1 text-[11px] font-semibold text-slate-400 dark:text-zinc-600">
                    {cmd.group}
                  </p>
                )}
                <button
                  ref={index === safeActiveIndex ? activeItemRef : null}
                  onClick={cmd.action}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                    index === safeActiveIndex
                      ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300'
                      : 'text-slate-700 dark:text-zinc-300'
                  }`}
                >
                  {cmd.label}
                  <ArrowRight
                    size={14}
                    className={index === safeActiveIndex ? 'opacity-100' : 'opacity-0'}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

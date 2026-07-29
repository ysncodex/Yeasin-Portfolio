'use client';

import { useEffect } from 'react';
import { Sun, Moon, X, Mail, User, Briefcase, FolderKanban } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: 'About', id: 'about', icon: User },
  { label: 'Experience', id: 'experience', icon: Briefcase },
  { label: 'Projects', id: 'projects', icon: FolderKanban },
  { label: 'Contact', id: 'contact', icon: Mail },
];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function Logo({ scrollTo }) {
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollTo('home');
      }}
      className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
    >
      {PERSONAL_INFO.name.split(' ')[1]}
      <span className="text-violet-500">.</span>
    </a>
  );
}

function ThemeToggle({ theme, toggleTheme, className, mounted }) {
  return (
    <button onClick={toggleTheme} className={className} aria-label="Toggle Theme">
      {mounted ? (
        theme === 'dark' ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )
      ) : (
        <span className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}

function DesktopNav({ activeSection, scrollTo, theme, toggleTheme, mounted }) {
  return (
    <div className="hidden md:flex items-center gap-10">
      {NAV_ITEMS.map(({ label, id }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-current={isActive ? 'page' : undefined}
            className={`text-sm font-semibold transition-colors duration-300 relative py-2
              after:content-[''] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-violet-500 after:transition-all after:duration-300
              ${isActive ? 'text-violet-600 dark:text-violet-400 after:w-full' : 'text-slate-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 after:w-0 hover:after:w-full'}`}
          >
            {label}
          </button>
        );
      })}

      <div className="w-px h-4 bg-slate-300 dark:bg-zinc-700 mx-2"></div>

      <ThemeToggle
        theme={theme}
        toggleTheme={toggleTheme}
        mounted={mounted}
        className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-105 focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}

/* Animated hamburger <-> close icon. Pure CSS transforms, no JS animation lib. */
function MenuToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-900 dark:text-zinc-300 hover:text-violet-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-full motion-reduce:transition-none"
    >
      <span
        className={`absolute w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'
        }`}
      />
      <span
        className={`absolute w-5 h-0.5 bg-current rounded-full transition-opacity duration-200 motion-reduce:transition-none ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'
        }`}
      />
    </button>
  );
}

function MobileMenu({ isOpen, activeSection, scrollTo, onClose, theme, toggleTheme, mounted }) {
  const handleNavClick = (id) => {
    scrollTo(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-[82%] max-w-xs flex flex-col bg-white dark:bg-zinc-950 border-l border-slate-200 dark:border-zinc-800 shadow-2xl md:hidden transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-zinc-900">
          <span className="text-lg font-bold tracking-tighter dark:text-white">
            Menu<span className="text-violet-500">.</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-900 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4 overflow-y-auto">
          {NAV_ITEMS.map(({ label, id, icon: Icon }, index) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                style={{ transitionDelay: isOpen ? `${80 + index * 60}ms` : '0ms' }}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-left transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                } ${
                  isActive
                    ? 'bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900'
                }`}
              >
                <Icon size={18} className="shrink-0" />
                <span>{label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto p-6 flex flex-col gap-4 border-t border-slate-100 dark:border-zinc-900">
          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-zinc-900 text-sm font-semibold dark:text-zinc-300"
          />
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center justify-center gap-2 text-slate-500 dark:text-zinc-500 text-sm"
          >
            <Mail size={16} /> Get in touch
          </a>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Navigation({
  theme,
  toggleTheme,
  mounted,
  isScrolled,
  activeSection,
  scrollTo,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  // Lock body scroll + allow Escape to close while the drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-lg border-b border-slate-200 dark:border-zinc-800/80 py-4 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo scrollTo={scrollTo} />
          <DesktopNav
            activeSection={activeSection}
            scrollTo={scrollTo}
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
          />
          <MenuToggle isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)} />
        </div>
      </nav>

      {/* Always mounted so the drawer/backdrop can transition in and out via CSS */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
        onClose={() => setMobileMenuOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        mounted={mounted}
      />
    </>
  );
}

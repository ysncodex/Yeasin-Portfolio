import { Sun, Moon, Layers, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Contact'];

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
      {NAV_ITEMS.map((item) => {
        const id = item.toLowerCase();
        const isActive = activeSection === id;
        return (
          <button
            key={item}
            onClick={() => scrollTo(id)}
            className={`text-sm font-semibold transition-colors duration-300 relative py-2
              after:content-[''] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-violet-500 after:transition-all after:duration-300
              ${isActive ? 'text-violet-600 dark:text-violet-400 after:w-full' : 'text-slate-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 after:w-0 hover:after:w-full'}`}
          >
            {item}
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

function MobileMenu({ activeSection, scrollTo, onClose, theme, toggleTheme, mounted }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl animate-fade-in">
      <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-zinc-900">
        <span className="text-lg font-bold tracking-tighter dark:text-white">Menu.</span>
        <button
          onClick={onClose}
          className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-900 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center grow gap-8">
        {NAV_ITEMS.map((item) => {
          const id = item.toLowerCase();
          return (
            <button
              key={item}
              onClick={() => scrollTo(id)}
              className={`text-3xl font-bold tracking-tight transition-all hover:scale-105 ${activeSection === id ? 'text-violet-600 dark:text-violet-400' : 'text-slate-600 dark:text-zinc-400'}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Enhanced Mobile Footer */}
      <div className="p-8 flex flex-col items-center gap-6 border-t border-slate-100 dark:border-zinc-900">
        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
          mounted={mounted}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-zinc-900 text-sm font-semibold dark:text-zinc-300"
        />
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-slate-500 dark:text-zinc-500 text-sm flex items-center gap-2"
        >
          <Mail size={16} /> Get in touch
        </a>
      </div>
    </div>
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
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-lg border-b border-slate-200 dark:border-zinc-800/80 py-4 shadow-sm' : 'bg-transparent py-6'}`}
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
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-slate-900 dark:text-zinc-300 hover:text-violet-500 transition-colors p-2"
          >
            <Layers size={24} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          scrollTo={scrollTo}
          onClose={() => setMobileMenuOpen(false)}
          theme={theme}
          toggleTheme={toggleTheme}
          mounted={mounted}
        />
      )}
    </>
  );
}

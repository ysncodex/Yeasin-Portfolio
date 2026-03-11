import { Sun, Moon, Layers, X } from 'lucide-react';
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
      className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white hover:opacity-80"
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
        <span className="w-4.5 h-4.5" />
      )}
    </button>
  );
}

function DesktopNav({ activeSection, scrollTo, theme, toggleTheme, mounted }) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => {
        const id = item.toLowerCase();
        return (
          <button
            key={item}
            onClick={() => scrollTo(id)}
            className={`text-sm font-semibold transition-all duration-300 hover:text-violet-600 dark:hover:text-violet-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-violet-500 after:transition-all hover:after:w-full ${activeSection === id ? 'text-violet-600 dark:text-violet-400 after:w-full' : 'text-slate-500 dark:text-zinc-400'}`}
          >
            {item}
          </button>
        );
      })}

      <ThemeToggle
        theme={theme}
        toggleTheme={toggleTheme}
        mounted={mounted}
        className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      />
    </div>
  );
}

function MobileNavToggle({ theme, toggleTheme, mounted, onOpen }) {
  return (
    <div className="md:hidden flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="p-2 text-slate-600 dark:text-zinc-400 transition-colors"
      >
        {mounted ? (
          theme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )
        ) : (
          <span className="w-5 h-5" />
        )}
      </button>
      <button
        onClick={onOpen}
        className="text-slate-900 dark:text-zinc-300 hover:text-violet-500 transition-colors"
      >
        <Layers size={24} />
      </button>
    </div>
  );
}

function MobileMenu({ activeSection, scrollTo, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex md:hidden flex-col bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md animate-fade">
      <div className="flex justify-end p-6 border-b border-slate-100 dark:border-zinc-900">
        <button
          onClick={onClose}
          className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-900 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center grow gap-8">
        {NAV_ITEMS.map((item) => {
          const id = item.toLowerCase();
          return (
            <button
              key={item}
              onClick={() => scrollTo(id)}
              className={`text-2xl font-bold tracking-tight transition-colors ${activeSection === id ? 'text-violet-600 dark:text-violet-400' : 'text-slate-600 dark:text-zinc-400'}`}
            >
              {item}
            </button>
          );
        })}
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
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800/50 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Logo scrollTo={scrollTo} />
          <DesktopNav
            activeSection={activeSection}
            scrollTo={scrollTo}
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
          />
          <MobileNavToggle
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
            onOpen={() => setMobileMenuOpen(true)}
          />
        </div>
      </nav>

      {mobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          scrollTo={scrollTo}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

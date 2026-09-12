'use client';

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import BackgroundLayers from '../components/BackgroundLayers';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ImpactStrip from '../components/ImpactStrip';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import type { Project } from '../types';

const ContactModal = dynamic(() => import('../components/ContactModal'), { ssr: false });
const ProjectModal = dynamic(() => import('../components/ProjectModal'), { ssr: false });
const CommandPalette = dynamic(() => import('../components/CommandPalette'), { ssr: false });

const SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'];
const SCROLL_THRESHOLD = 50;

function useTheme() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  const applyResolvedTheme = useCallback((mode: string) => {
    const isDark =
      mode === 'dark' ||
      (mode === 'system' &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    applyResolvedTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme, applyResolvedTheme]);

  useEffect(() => {
    if (theme !== 'system') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyResolvedTheme('system');
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [theme, applyResolvedTheme]);

  const cycleTheme = useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light')),
    []
  );

  return { theme, cycleTheme, mounted };
}

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return { activeSection, isScrolled };
}

function useBodyScrollLock(...conditions: (boolean | null)[]) {
  useEffect(() => {
    if (conditions.some(Boolean)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, conditions); // eslint-disable-line react-hooks/exhaustive-deps
}

function useCommandPaletteShortcut(onToggle: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onToggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggle]);
}

export default function Page() {
  const { theme, cycleTheme, mounted } = useTheme();
  const { activeSection, isScrolled } = useScrollSpy();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeCommandPalette = useCallback(() => setShowCommandPalette(false), []);

  useBodyScrollLock(Boolean(selectedProject), showContactModal, mobileMenuOpen, showCommandPalette);
  useCommandPaletteShortcut(useCallback(() => setShowCommandPalette((open) => !open), []));

  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-zinc-300">
      <BackgroundLayers />

      <Navigation
        theme={theme}
        cycleTheme={cycleTheme}
        mounted={mounted}
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenPalette={() => setShowCommandPalette(true)}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <Hero scrollTo={scrollTo} />
        <ImpactStrip />
        <About />
        <Experience />
        <Projects setSelectedProject={setSelectedProject} />
        <Contact setShowContactModal={setShowContactModal} />
      </main>

      <Footer />

      <ContactModal showContactModal={showContactModal} setShowContactModal={setShowContactModal} />
      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      {/* Mounted only while open so the query and highlighted row reset on every launch. */}
      {showCommandPalette && (
        <CommandPalette
          isOpen
          onClose={closeCommandPalette}
          scrollTo={scrollTo}
          setSelectedProject={setSelectedProject}
          cycleTheme={cycleTheme}
        />
      )}
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import BackgroundLayers from '@/components/BackgroundLayers';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactModal = dynamic(() => import('@/components/ContactModal'), { ssr: false });
const ProjectModal = dynamic(() => import('@/components/ProjectModal'), { ssr: false });

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'];
const SCROLL_THRESHOLD = 50;
const INTERSECTION_OFFSET = 150;

/* ─────────────────────────────────────────────
   Hooks
   ───────────────────────────────────────────── */

function useTheme() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    []
  );

  return { theme, toggleTheme, mounted };
}

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

        const lastIndex = SECTIONS.length - 1;
        const viewportMid = window.innerHeight * 0.5;
        let current = SECTIONS[0];

        for (let i = 0; i < SECTIONS.length; i++) {
          const el = document.getElementById(SECTIONS[i]);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          // Last section can never scroll to the top, so use a generous threshold
          const offset = i === lastIndex ? viewportMid : INTERSECTION_OFFSET;
          if (top <= offset) current = SECTIONS[i];
        }

        setActiveSection(current);
        scrollRafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  return { activeSection, isScrolled };
}

function useMouseGlow() {
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const root = document.documentElement;
        root.style.setProperty('--mouse-x', e.clientX + 'px');
        root.style.setProperty('--mouse-y', e.clientY + 'px');
        rafRef.current = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
}

function useBodyScrollLock(...conditions) {
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

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Page() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { activeSection, isScrolled } = useScrollSpy();

  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMouseGlow();
  useBodyScrollLock(selectedProject, showContactModal, mobileMenuOpen);

  const scrollTo = useCallback((id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-zinc-300">
      <BackgroundLayers />

      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        mounted={mounted}
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <Hero theme={theme} scrollTo={scrollTo} />
        <About />
        <Experience />
        <Projects setSelectedProject={setSelectedProject} />
        <Contact setShowContactModal={setShowContactModal} />
      </main>

      <Footer />

      <ContactModal showContactModal={showContactModal} setShowContactModal={setShowContactModal} />
      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  );
}

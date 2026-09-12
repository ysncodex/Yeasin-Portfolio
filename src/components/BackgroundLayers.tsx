'use client';
import { useEffect, useRef } from 'react';

function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20 dark:opacity-30 bg-grid-pattern" />
  );
}

function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
            glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.05), transparent 80%)`,
      }}
    />
  );
}

export default function BackgroundLayers() {
  return (
    <>
      <GridBackground />
      <MouseGlow />
    </>
  );
}

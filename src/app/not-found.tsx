import Link from 'next/link';
import { Terminal, Home } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This page could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-slate-50 dark:bg-zinc-950">
      <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-mono text-sm mb-6">
        <Terminal size={18} />
        <span>404 — route not found</span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
        404
      </h1>
      <p className="text-slate-600 dark:text-zinc-400 max-w-md mb-8 leading-relaxed">
        Whatever you were looking for isn&apos;t at this address. It might have moved, or never
        existed in the first place.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1"
      >
        <Home size={18} />
        Back to home
      </Link>
    </div>
  );
}

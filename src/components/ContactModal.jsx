'use client';

import { useState, useCallback } from 'react';
import { Mail, Linkedin, Github, ChevronRight, X, Copy, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function Backdrop({ onClose }) {
  return (
    <div
      className="absolute inset-0 bg-slate-900/40 dark:bg-zinc-950/80 backdrop-blur-sm animate-fade"
      onClick={onClose}
    ></div>
  );
}

function CloseButton({ onClose }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 p-2 text-slate-400 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      <X size={20} />
    </button>
  );
}

function ModalHeader() {
  return (
    <div className="mb-8 pr-8">
      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 transition-colors tracking-tight">
        Let&apos;s Connect
      </h3>
      <p className="text-slate-600 dark:text-zinc-400 transition-colors">
        Choose your preferred method to get in touch. I&apos;m always open to discussing product
        design work or partnership opportunities.
      </p>
    </div>
  );
}

function EmailCard({ copied, onCopy }) {
  return (
    <div className="p-4 md:p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-violet-300 dark:hover:border-violet-500/50 transition-colors shadow-sm dark:shadow-none">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-500/10 flex shrink-0 items-center justify-center text-violet-600 dark:text-violet-400">
          <Mail size={24} />
        </div>
        <div className="overflow-hidden">
          <p className="text-sm text-slate-500 dark:text-zinc-500 font-mono mb-1">Direct Email</p>
          <p className="text-slate-900 dark:text-white font-bold truncate transition-colors">
            {PERSONAL_INFO.email}
          </p>
        </div>
      </div>
      <button
        onClick={onCopy}
        className="shrink-0 px-4 py-2.5 rounded-lg bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-900 dark:text-white border border-slate-200 dark:border-transparent text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-violet-500"
      >
        {copied ? (
          <CheckCircle size={16} className="text-emerald-500 dark:text-emerald-400" />
        ) : (
          <Copy size={16} />
        )}
        {copied ? 'Copied!' : 'Copy Email'}
      </button>
    </div>
  );
}

function LinkCard({ href, iconBg, icon, label, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-4 md:p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/50 flex items-center justify-between group hover:border-violet-300 dark:hover:border-violet-500/50 transition-colors shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-zinc-500 font-mono mb-1">{label}</p>
          <p className="text-slate-900 dark:text-white font-bold transition-colors">{title}</p>
        </div>
      </div>
      <ChevronRight
        size={20}
        className="text-slate-400 dark:text-zinc-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-all transform group-hover:translate-x-1"
      />
    </a>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function ContactModal({ showContactModal, setShowContactModal }) {
  const [copied, setCopied] = useState(false);

  const handleClose = useCallback(() => setShowContactModal(false), [setShowContactModal]);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard
      .writeText(PERSONAL_INFO.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  }, []);

  if (!showContactModal) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      <Backdrop onClose={handleClose} />

      <div
        className="relative w-full max-w-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-violet-900/20 animate-modal p-6 md:p-10 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={handleClose} />
        <ModalHeader />

        <div className="space-y-4">
          <EmailCard copied={copied} onCopy={handleCopyEmail} />

          <LinkCard
            href={PERSONAL_INFO.linkedin}
            iconBg="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
            icon={<Linkedin size={24} />}
            label="Professional Network"
            title="Connect on LinkedIn"
          />

          <LinkCard
            href={PERSONAL_INFO.github}
            iconBg="bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-white transition-colors"
            icon={<Github size={24} />}
            label="Code & Contributions"
            title="Follow on GitHub"
          />
        </div>
      </div>
    </div>
  );
}

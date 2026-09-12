import { Send, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ContactProps {
  setShowContactModal: (show: boolean) => void;
}

export default function Contact({ setShowContactModal }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-32 max-w-2xl mx-auto text-center pb-32">
      <div className="flex items-center justify-center gap-2 text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium mb-4">
        <MapPin size={16} /> Based in Dhaka, Bangladesh
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
        Get In Touch
      </h2>
      <p className="text-slate-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
        I&apos;m currently open to full-stack engineering roles. Whether you&apos;re hiring, have a
        project in mind, or just want to talk shop, my inbox is open — I read every message and
        reply.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => setShowContactModal(true)}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
        >
          <Send
            size={20}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
          Say Hello
        </button>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-6 py-4 font-mono text-sm text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl"
        >
          <Mail size={16} />
          {PERSONAL_INFO.email}
        </a>
      </div>
    </section>
  );
}

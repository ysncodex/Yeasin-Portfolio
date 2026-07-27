import { Send, MapPin } from 'lucide-react';

export default function Contact({ setShowContactModal }) {
  return (
    <section id="contact" className="scroll-mt-32 max-w-2xl mx-auto text-center pb-32">
      <div className="flex items-center justify-center gap-2 text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium mb-4">
        <MapPin size={16} /> Based in Dhaka, Bangladesh
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
        Get In Touch
      </h2>
      <p className="text-slate-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
        Although I&apos;m currently looking for new opportunities, my inbox is always open. Whether
        you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get
        back to you!
      </p>
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
    </section>
  );
}

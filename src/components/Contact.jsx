import { Send } from 'lucide-react';

export default function Contact({ setShowContactModal }) {
  return (
    <section id="contact" className="scroll-mt-32 max-w-2xl mx-auto text-center pb-32">
      <p className="text-violet-600 dark:text-violet-400 font-mono tracking-wide font-medium mb-4">
        What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
        Get In Touch
      </h2>
      <p className="text-slate-600 dark:text-zinc-400 text-lg mb-12">
        Although I&apos;m currently looking for new opportunities, my inbox is always open. Whether
        you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <button
        onClick={() => setShowContactModal(true)}
        className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-white font-bold rounded-xl transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-xl shadow-violet-500/20 dark:shadow-violet-900/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        <Send size={20} /> Say Hello
      </button>
    </section>
  );
}

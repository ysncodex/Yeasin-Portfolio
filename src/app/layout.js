import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

/* ─────────────────────────────────────────────
   Fonts
   ───────────────────────────────────────────── */

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

/* ─────────────────────────────────────────────
   Metadata
   ───────────────────────────────────────────── */

export const metadata = {
  title: 'Alex Developer | Portfolio',
  description: 'Creative Software Engineer building exceptional digital experiences.',
};

/* ─────────────────────────────────────────────
   Inline script – prevents dark-mode flash (FOUC)
   ───────────────────────────────────────────── */

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.style.colorScheme='light'}else{document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}}catch(e){}})()`;

/* ─────────────────────────────────────────────
   Layout
   ───────────────────────────────────────────── */

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}

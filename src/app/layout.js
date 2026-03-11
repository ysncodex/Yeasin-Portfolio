import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

/* ─────────────────────────────────────────────
   Fonts
   ───────────────────────────────────────────── */

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

/* ─────────────────────────────────────────────
   Metadata (SEO)
   ───────────────────────────────────────────── */

const SITE_URL = 'https://yeasin-dev.netlify.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Md Yeasin | Full-Stack Engineer',
    template: '%s | Md Yeasin',
  },
  description:
    'Portfolio of Md Yeasin — a Full-Stack Engineer specializing in React.js, Next.js, Node.js, and .NET Core. Building fast, scalable, and user-centered web applications.',
  keywords: [
    'Md Yeasin',
    'Full-Stack Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    '.NET Core',
    'MERN Stack',
    'Portfolio',
    'Web Developer',
    'Software Engineer',
    'Bangladesh',
  ],
  authors: [{ name: 'Md Yeasin', url: SITE_URL }],
  creator: 'Md Yeasin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Md Yeasin — Portfolio',
    title: 'Md Yeasin | Full-Stack Engineer',
    description:
      'Full-Stack Engineer specializing in React.js, Next.js, Node.js, and .NET Core. Building fast, scalable, and user-centered web applications.',
    images: [
      {
        url: '/images/Intro.png',
        width: 1200,
        height: 630,
        alt: 'Md Yeasin — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Yeasin | Full-Stack Engineer',
    description: 'Full-Stack Engineer specializing in React.js, Next.js, Node.js, and .NET Core.',
    images: ['/images/Intro.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/avatar.jpg',
    apple: '/images/avatar.jpg',
  },
};

/* ─────────────────────────────────────────────
   Inline script – prevents dark-mode flash (FOUC)
   ───────────────────────────────────────────── */

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.style.colorScheme='light'}else{document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}}catch(e){}})()`;

/* ─────────────────────────────────────────────
   JSON-LD Structured Data
   ───────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Yeasin',
  url: SITE_URL,
  image: `${SITE_URL}/images/Intro.png`,
  jobTitle: 'Full-Stack Engineer',
  description: 'Full-Stack Engineer specializing in React.js, Next.js, Node.js, and .NET Core.',
  email: 'mailto:yeasin7y@gmail.com',
  sameAs: ['https://github.com/ysncodex', 'https://www.linkedin.com/in/yeasin7/'],
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    '.NET Core',
    'TypeScript',
    'Tailwind CSS',
    'MongoDB',
    'MERN Stack',
  ],
};

/* ─────────────────────────────────────────────
   Layout
   ───────────────────────────────────────────── */

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}

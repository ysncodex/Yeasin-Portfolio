import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PERSONAL_INFO } from '../data/portfolio';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

const SITE_URL = 'https://yeasin-dev.netlify.app';
const ROLE_LINE = `${PERSONAL_INFO.role} specializing in React.js, Next.js, Node.js, and .NET Core.`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: `Portfolio of ${PERSONAL_INFO.name} — a ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}. Building production ERP systems and full-stack web applications with React.js, Next.js, Node.js, and .NET Core.`,
  keywords: [
    PERSONAL_INFO.name,
    'Full Stack Developer',
    'Full-Stack Software Engineer',
    'Software Engineer Bangladesh',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    '.NET Core Developer',
    'ASP.NET Web API',
    'ERP Systems Developer',
    'MERN Stack Developer',
    'Dhaka Bangladesh',
    'Portfolio',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: SITE_URL }],
  creator: PERSONAL_INFO.name,
  applicationName: `${PERSONAL_INFO.name} — Portfolio`,
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `${PERSONAL_INFO.name} — Portfolio`,
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: ROLE_LINE,
    images: [
      {
        url: '/images/Intro.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: ROLE_LINE,
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
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=t==='dark'||((!t||t==='system')&&prefersDark);if(isDark){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light'}}catch(e){}})()`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/Intro.png`,
  jobTitle: PERSONAL_INFO.role,
  description: ROLE_LINE,
  email: `mailto:${PERSONAL_INFO.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: PERSONAL_INFO.location,
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Green University of Bangladesh',
  },
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    '.NET Core',
    'ASP.NET Web API',
    'Entity Framework Core',
    'TypeScript',
    'Tailwind CSS',
    'MSSQL',
    'PostgreSQL',
    'MongoDB',
    'MERN Stack',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

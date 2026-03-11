/* ─────────────────────────────────────────────
   Personal Info
   ───────────────────────────────────────────── */

export const PERSONAL_INFO = {
  name: 'Md Yeasin',
  role: 'Frontend-Focused Full-Stack Engineer',
  tagline: 'Frontend | Full-Stack Engineer',
  bio: "I'm a Full-Stack Engineer who enjoys turning complex ideas into fast, responsive, and user-friendly web applications. My core stack includes React.js, MERN Stack, and .NET Core, with additional experience in Next.js and TypeScript. I focus on writing clean, scalable code and delivering smooth user experiences.",

  // Contact
  email: 'yeasin7y@gmail.com',

  // Socials
  github: 'https://github.com/ysncodex',
  linkedin: 'https://www.linkedin.com/in/yeasin7/',

  // Documents
  resume: '/docs/Md_Yeasin_Resume.pdf',
  cv: '/docs/Md_Yeasin_CV.pdf',

  // Media
  avatar: '/images/avatar.jpg',
};

/* ─────────────────────────────────────────────
   Skills
   ───────────────────────────────────────────── */

export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Framer Motion',
      'Redux / Zustand',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', '.NET Core', 'RESTful APIs'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Docker', 'Webpack', 'CI/CD', 'Figma', 'Azure'],
  },
];

/* ─────────────────────────────────────────────
   Experience
   ───────────────────────────────────────────── */

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Executive, Software Development',
    company: 'Cultive8 Technologies Limited',
    period: 'September 2024 - December 2025',
    tech: ['React', 'Node.js', '.NET Core', 'MSSQL', 'Zustand', 'Redux', 'Tailwind', 'Azure'],
    description: [
      'Spearheading end-to-end development of enterprise ERP modules (Payroll, Plucking, HR) using React.js, Node.js, and .NET Core.',
      'Architecting optimized database schemas with MSSQL Server & EF Core, improving report generation performance by 30%.',
      'Refactoring legacy APIs using Clean Architecture and async processing, successfully reducing API latency by 40%.',
      'Building a scalable, reusable React component library integrated with Zustand & Redux for state management.',
      'Resolved 45+ critical production issues, reducing user-reported system errors by over 50% through proactive debugging and code reviews.',
    ],
  },
  {
    id: 2,
    role: 'Intern Full Stack Developer',
    company: 'DataXpie Ltd.',
    period: 'June 2023 - November 2023',
    tech: ['CSS3', 'JavaScript', 'Git'],
    description: [
      'Assisted in full-stack development tasks including frontend implementation with HTML5, CSS3, and JavaScript.',
      'Collaborated with experienced team members on web application features, conducting research and troubleshooting.',
      'Participated in team meetings, adhered to coding standards, and contributed to debugging and optimization efforts.',
      'Gained hands-on experience with full-stack development workflows in a remote, international team environment.',
    ],
  },
];

/* ─────────────────────────────────────────────
   Projects
   ───────────────────────────────────────────── */

export const PROJECTS = [
  // Project 1 — Featured Hero Card
  {
    id: 1,
    title: 'Bengaldeli - Multivendor E-commerce',
    role: 'Full Stack Engineer',
    year: '2024',
    featured: true,

    longDescription:
      'Developed a comprehensive multi-vendor platform (Bengaldeli) designed to handle diverse storefronts. Key features include a custom vendor dashboard, JWT-based authentication, and a RESTful API architecture. I integrated the SSLCommerz payment gateway for localized transactions and utilized Redux for complex state management across customer and vendor workflows, ensuring a seamless, responsive UI/UX.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'SSLCommerz'],

    link: '#',
    github: 'https://github.com/ysncodex/Bengaldeli-Fullstack-Multivendor',
    color: 'from-blue-500 to-violet-600',
    image: '/images/project-1.png',
  },

  // Project 2 — Typographic Card
  {
    id: 2,
    title: 'QuickHire - Job Portal',
    role: 'Full-Stack Engineer',
    year: '2026',
    featured: false,

    longDescription:
      'QuickHire optimizes the recruitment lifecycle by streamlining job postings and applications. I implemented a robust caching layer using Redis to enhance performance and used D3.js to visualize hiring trends and data points. The platform features a dedicated employer dashboard, a custom-built dark-mode design system, and a Firebase-backed real-time notification system for application updates.',
    tech: ['React.js', 'Firebase', 'Redis', 'D3.js', 'Material UI', 'Node.js'],

    link: 'https://yeasin-quickhire.netlify.app/',
    github: 'https://github.com/ysncodex/QuickHire',
    color: 'from-emerald-400 to-teal-600',
    image: '/images/project-3.png',
  },

  // Project 3 — Split Visual Card
  {
    id: 3,
    title: 'Aura AI Writer',
    role: 'Frontend Engineer',
    year: '2023',
    featured: false,

    longDescription:
      "Aura AI streamlines content creation by interfacing directly with OpenAI's GPT models. I engineered a rich-text editor from the ground up that supports markdown shortcuts and real-time SEO scoring. The backend architecture handles prompt engineering and dynamic context-aware content generation, allowing users to export production-ready articles in seconds.",
    tech: ['OpenAI API', 'Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],

    link: '#',
    github: '#',
    color: 'from-orange-400 to-red-500',
    image: '',
  },

  // Project 4 — Wide Banner Card
  {
    id: 4,
    title: 'Instagram Clone',
    role: 'Full Stack Developer',
    year: '2024',
    featured: false,

    longDescription:
      'A modern social media platform focused on real-time engagement. I implemented a component-based architecture using React and Zustand for efficient state management. The application features secure Firebase authentication, image hosting via Cloud Storage, and an interactive feed with real-time likes and comments. Designed with a mobile-first approach using Tailwind CSS to ensure a polished user experience.',
    tech: ['React.js', 'Firebase', 'Zustand', 'Tailwind CSS', 'React Hooks'],

    link: 'https://social-media-clone-created-by-yeasin.vercel.app/auth',
    github: 'https://github.com/ysncodex/Instagram-Clone-React',
    color: 'from-slate-600 to-slate-800',
    image: '/images/project-2.png',
  },
];

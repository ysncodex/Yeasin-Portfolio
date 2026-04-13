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
    role: 'Software Engineer',
    company: 'Cultive8 Technologies Limited',
    period: 'September 2024 - December 2025',
    tech: [
      'React.js',
      'Node.js',
      '.NET Core',
      'MSSQL',
      'Zustand',
      'Redux',
      'Tailwind CSS',
      'Azure',
    ],
    description: [
      'Developed and enhanced enterprise ERP modules (Attendance, Payroll, Plucking and Employee Management) using React.js, Node.js and .NET Core., delivering seamless end-to-end functionality for enterprise environments.',
      'Refactored existing APIs and backend modules to improve reporting and data-processing performance by 30%.',
      'Optimized backend infrastructure through database query tuning, API restructuring, and robust validation, significantly improving overall system reliability and scalability',
      'Identified and resolved 45+ critical production bugs within large-scale systems, reducing user-reported errors by over 50% and improving client satisfaction.',
      'Developed interactive dashboards using Zustand and Redux to manage state and display complex real-time data clearly.',
    ],
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Cultive8 Technologies Limited',
    period: 'September 2024 - December 2025',
    tech: [
      'React.js',
      'Node.js',
      '.NET Core',
      'MSSQL',
      'Zustand',
      'Redux',
      'Tailwind CSS',
      'Azure',
    ],
    description: [
      'Built core features for complex ERP modules using React.js and Node.js, seamlessly connecting frontend UI components to backend databases.',
      'Enhanced user workflows by building interactive UI components and implementing session-based navigation for a smoother experience.',
      'Improved platform stability by actively debugging both frontend and backend issues, ensuring higher quality and more reliable software releases.',
    ],
  },
  {
    id: 3,
    role: 'Full Stack Developer Intern',
    company: 'DataXpie Ltd.',
    period: 'June 2023 - November 2023',
    tech: ['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'],
    description: [
      'Developed responsive frontend interfaces using React.js, focusing on reusable components and clean UI structure.',
      'Integrated REST APIs to seamlessly connect the user interface with backend services, ensuring smooth and reliable data flow.',
      'Improved application performance and user experience through efficient state handling and component design.',
      'Collaborated in a remote team using Git workflows to manage code, review updates, and deliver software efficiently.',
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
    role: 'Full-Stack',
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
    role: 'Full-Stack',
    year: '2026',
    featured: false,

    longDescription:
      'QuickHire is a modern MERN-based job portal that streamlines the recruitment process for both job seekers and employers. It offers real-time job search, seamless applications, and a fully responsive user experience. The platform includes a secure backend with validated APIs and an admin dashboard for efficient job management with instant UI updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'Axios ', 'Tailwind CSS'],

    link: 'https://yeasin-quickhire.netlify.app/',
    github: 'https://github.com/ysncodex/QuickHire',
    color: 'from-emerald-400 to-teal-600',
    image: '/images/project-3.png',
  },

  // Project 3 — Split Visual Card
  {
    id: 3,
    title: 'Cafe ERP',
    role: 'Frontend',
    year: '2026',
    featured: false,

    longDescription:
      'A user-friendly cafe operations dashboard built with React and TypeScript. It helps owners and managers track sales, expenses, fund movements, and reports from one place, with optional backend API integration.',
    tech: [
      'React',
      'React DOM',
      'Typescript',
      'React Router',
      'Axios',
      'Tailwind CSS',
      'Lucide React',
    ],

    link: 'https://cafeerp.netlify.app/',
    github: 'https://github.com/ysncodex/Cafe-ERP',
    color: 'from-sky-400 to-blue-900',
    image: '/images/project-4.png',
  },

  // Project 4 — Wide Banner Card
  {
    id: 4,
    title: 'Instagram Clone',
    role: 'Full-Stack',
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

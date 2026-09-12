/* ─────────────────────────────────────────────
   Personal Info
   ───────────────────────────────────────────── */

import { PersonalInfo, SkillGroup, Experience, Project } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Md Yeasin',
  role: 'Full-Stack Software Engineer',
  location: 'Dhaka, Bangladesh',

  tagline: 'Building enterprise ERP systems and full-stack web products for real operational use.',

  bio: "I'm a full-stack software engineer with hands-on experience building and maintaining production ERP systems, business applications, and modern web platforms. At Cultive8 Technologies, I worked across React, .NET Core, Node.js, and MSSQL on enterprise payroll, attendance, employee management, and reporting workflows. I also designed, built, and deployed Nexus-ERP, a POS and operations platform used by Beans & Butter Cafe for day-to-day orders, payments, expenses, and financial reporting. I enjoy solving real business problems across frontend, backend, database, and deployment layers.",

  email: 'yeasin7y@gmail.com',
  github: 'https://github.com/ysncodex',
  linkedin: 'https://www.linkedin.com/in/yeasin7/',

  resume: '/docs/Md_Yeasin_Resume.pdf',
  cv: '/docs/Md_Yeasin_Resume.pdf',
  avatar: '/images/avatar.jpg',
};

/* ─────────────────────────────────────────────
   Skills
   ───────────────────────────────────────────── */

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Zustand',
      'React Query',
    ],
  },
  {
    category: 'Backend',
    items: [
      '.NET Core (C#)',
      'Node.js',
      'Express.js',
      'Entity Framework Core',
      'REST APIs',
      'JWT / RBAC',
    ],
  },
  {
    category: 'Database & Data',
    items: ['MSSQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'Redis'],
  },
  {
    category: 'Tools & Deployment',
    items: ['Git / GitHub', 'Docker', 'Azure', 'Postman', 'Netlify', 'Render'],
  },
];

/* ─────────────────────────────────────────────
   Experience
   ───────────────────────────────────────────── */

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Cultive8 Technologies Limited',
    period: 'September 2024 - December 2025',
    tech: ['React.js', 'Node.js', '.NET Core', 'MSSQL', 'Zustand', 'Azure'],
    description: [
      'Developed and maintained enterprise ERP modules covering payroll, attendance, employee management, plucking operations, and operational reporting.',
      'Built and optimized React interfaces, .NET Core APIs, and complex MSSQL queries for data-intensive enterprise workflows.',
      'Improved reporting performance by approximately 30% through API optimization, MSSQL query improvements, efficient filtering, and database-level enhancements.',
      'Diagnosed and resolved 45+ production issues across frontend, backend, and database layers, improving application stability and user experience.',
      'Worked closely with product, business, and QA teams to translate operational requirements into reliable production-ready ERP features.',
    ],
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Cultive8 Technologies Limited',
    period: 'March 2024 - August 2024',
    tech: ['React.js', '.NET Core', 'MSSQL', 'Redux', 'Tailwind CSS'],
    description: [
      'Developed ERP features by integrating React.js interfaces with .NET Core APIs and MSSQL-backed business workflows.',
      'Built reusable UI components, complex forms, filters, and data-driven screens used across enterprise modules.',
      'Managed asynchronous API interactions, client-side state, validation, and session-based workflows for data-intensive user operations.',
      'Investigated and resolved frontend-to-backend integration issues before production releases, contributing to more stable deployments.',
    ],
  },
  {
    id: 3,
    role: 'Full-Stack Developer Intern',
    company: 'DataXpie Ltd.',
    period: 'June 2023 - November 2023',
    tech: ['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'],
    description: [
      'Developed responsive, component-driven React.js interfaces with a focus on reusable UI patterns and maintainable code.',
      'Integrated REST APIs to connect frontend features with backend services and persistent application data.',
      'Improved client-side rendering, state handling, and responsive behavior across application interfaces.',
    ],
  },
];

/* ─────────────────────────────────────────────
   Projects — Case Studies
   ───────────────────────────────────────────── */

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nexus-ERP — Beans & Butter',
    role: 'Full-Stack Engineer',
    year: '2026',
    featured: true,

    summary:
      'A production POS and operations platform for Beans & Butter Cafe, unifying orders, payments, inventory, expenses, funds, and financial reporting.',

    longDescription:
      'Nexus-ERP is a full-stack business operations platform built for Beans & Butter Cafe. It centralizes point-of-sale operations, order management, payments, inventory, expenses, fund movements, and daily financial reporting in a single system. The platform was designed around real operational workflows and continuously improved based on day-to-day staff usage. A sanitized read-only demo of the production architecture is publicly available as ERP_Solution.',

    problem:
      'The cafe relied on fragmented processes for orders, payments, expenses, and reporting, making reconciliation difficult and limiting real-time visibility into business performance. Existing POS solutions also lacked the flexibility required for the cafe’s operational workflow.',

    approach:
      'Designed the system around actual cafe operations, released the core POS workflow first, and iterated based on staff usage. Reworked desktop-oriented interactions into touch-friendly patterns, centralized cash, bank, and bKash transactions in a unified ledger, and implemented Dhaka-timezone business-day reporting for consistent daily financial calculations.',

    responsibilities: [
      'Owned the full development lifecycle from requirements analysis and system design to implementation, deployment, and production iteration.',
      'Engineered POS and order-management workflows for dine-in, takeaway, delivery, receipt printing, and kitchen order handling.',
      'Developed financial modules for expense tracking, fund movements, payment reconciliation, and automated daily reporting.',
      'Implemented inventory, product, transaction, and operational management workflows within a unified dashboard.',
      'Built JWT-based authentication, role-based access control, and a read-only visitor mode for public demonstrations.',
      'Redesigned key POS interactions for touch-based devices after observing real staff usage in production.',
    ],

    engineering: [
      'React 19 + TypeScript + Vite frontend deployed on Netlify',
      'Express.js + Prisma + PostgreSQL backend deployed on Render',
      'Schema validation and type-safe API handling with Zod',
      'JWT authentication and role-based authorization',
      'Dhaka-timezone business-day reporting',
      'Unified transaction ledger across cash, bank, and bKash payments',
      'Touch-first POS interaction model optimized for operational use',
    ],

    outcome:
      'Replaced fragmented order and financial workflows with a centralized platform used for the cafe’s day-to-day POS operations, payments, expense tracking, and business reporting.',

    tech: ['React 19', 'TypeScript', 'Vite', 'Express.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],

    link: 'https://erpasolutions.netlify.app/',
    github: 'https://github.com/ysncodex/ERP_Solution',

    color: 'from-sky-400 to-blue-900',
    image: '/images/project-4.jpeg',
  },

  {
    id: 2,
    title: 'Bengaldeli — Multivendor Marketplace',
    role: 'Full-Stack Engineer — Final-Year Capstone',
    year: '2024',
    featured: false,

    summary:
      'A full-featured multivendor e-commerce platform with customer, vendor, and admin ecosystems, real-time chat, secure payments, and complete order-management workflows.',

    longDescription:
      'Bengaldeli is my final-year capstone project — a full-stack multivendor marketplace inspired by platforms such as Daraz and Alibaba. Built as a complete e-commerce ecosystem rather than a tutorial project, it supports dedicated customer, vendor, and administrator workflows across product management, inventory, cart and checkout, payments, order processing, vendor operations, and platform administration. The platform also includes real-time customer-vendor communication using Socket.io and webhook-driven payment and order-state handling.',

    problem:
      'A multivendor marketplace must coordinate several independent workflows within the same platform. Customers need seamless product discovery, checkout, payment, and communication; vendors need isolated access to their products, inventory, orders, and customers; and administrators need platform-wide control without compromising role boundaries or data security.',

    approach:
      'Designed the platform around three distinct roles — customer, vendor, and administrator — backed by a shared Node.js and Express.js API. Implemented JWT-based authentication and role-aware authorization to enforce access boundaries, MongoDB data models for marketplace entities, Redux for predictable client-side state, Socket.io for real-time communication, and Stripe with webhook handling for payment verification and order-state synchronization.',

    responsibilities: [
      'Designed and developed the complete customer, vendor, and administrator workflows across the marketplace.',
      'Built vendor dashboards for product management, inventory control, order processing, and storefront operations.',
      'Developed customer-facing product discovery, cart, checkout, order, and account-management experiences.',
      'Implemented JWT authentication and role-based authorization across protected frontend routes and backend APIs.',
      'Built real-time customer-vendor communication using Socket.io for instant marketplace messaging.',
      'Integrated Stripe payment processing with webhook-driven payment verification and order-state updates.',
      'Designed MongoDB data models connecting users, vendors, products, orders, payments, and marketplace operations.',
      'Developed administrative workflows for platform-wide user, vendor, product, and order management.',
    ],

    engineering: [
      'Three-role marketplace architecture: Customer, Vendor, and Admin',
      'React.js frontend with Redux-based global state management',
      'Node.js + Express.js REST API architecture',
      'MongoDB data modeling for interconnected marketplace entities',
      'JWT authentication and role-based access control',
      'Socket.io real-time customer-vendor chat',
      'Stripe payment gateway integration',
      'Webhook-driven payment verification and order-state transitions',
      'Vendor-scoped product, inventory, and order management',
      'Protected role-aware frontend and backend workflows',
    ],

    outcome:
      'Completed a fully functional end-to-end multivendor marketplace as my final-year capstone, covering the complete commerce lifecycle from vendor and product management to customer checkout, payments, real-time communication, order processing, and administrative control.',

    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Socket.io',
      'JWT',
      'Stripe',
      'Webhooks',
    ],

    github: 'https://github.com/ysncodex/Bengaldeli-Fullstack-Multivendor',

    color: 'from-blue-500 to-violet-600',
    image: '/images/project-1.png',
  },

  {
    id: 3,
    title: 'ZENJI — Streetwear Storefront',
    role: 'Frontend Engineer',
    year: '2026',
    featured: false,

    summary:
      'A limited-drop streetwear storefront with editorial product pages, persistent cart state, product discovery, and an accessible multi-route shopping experience.',

    longDescription:
      'ZENJI is an anime-inspired streetwear storefront built to demonstrate frontend architecture, visual design, state management, accessibility, and complete e-commerce interaction patterns. The project includes product collections, editorial content, a lookbook, persistent cart behavior, checkout flows, and account-oriented interfaces without depending on a production backend.',

    problem:
      'The goal was to demonstrate frontend engineering beyond traditional CRUD dashboards by building a visually distinctive commerce experience with multiple routes, persistent state, product discovery, checkout interactions, and accessibility considerations.',

    approach:
      'Built the storefront entirely client-side using React 19, TypeScript, Vite, and React Router. Implemented an 11-route application structure covering catalogue, product detail, checkout, account, and editorial experiences. Added persistent cart state, URL-backed filtering, responsive interactions, and accessibility support across the application.',

    responsibilities: [
      'Designed and implemented the visual identity and editorial content structure for drops, collections, lookbook, and brand-story experiences.',
      'Architected an 11-route React Router application covering catalogue, product detail, checkout, account, and supporting pages.',
      'Built a persistent cart with quantity management, localStorage synchronization, and a free-shipping progress indicator.',
      'Implemented URL-backed collection filtering and product search.',
      'Implemented client-side checkout, authentication, and review flows to demonstrate complete e-commerce interactions without requiring a backend.',
    ],

    engineering: [
      'Type-safe component architecture with React 19 and TypeScript',
      'React Router multi-route SPA architecture',
      'Netlify SPA fallback routing',
      'LocalStorage-backed cart persistence',
      'URL-driven product filtering and search',
      'Reduced-motion, keyboard, and labelled-control accessibility support',
    ],

    outcome:
      'Deployed a complete frontend storefront that demonstrates range beyond enterprise dashboards, with strong emphasis on responsive UI engineering, application structure, state persistence, accessibility, and visual product presentation.',

    tech: ['React 19', 'TypeScript', 'Vite', 'React Router', 'CSS Design Tokens'],

    link: 'https://zenji-streetwear.netlify.app/',
    github: 'https://github.com/ysncodex/Zenji-StreetWear-Store',

    color: 'from-red-600 to-neutral-950',
    image: '/images/project-5.png',
  },

  {
    id: 4,
    title: 'QuickHire — Two-Sided Recruitment Platform',
    role: 'Full-Stack Engineer',
    year: '2026',
    featured: false,

    summary:
      'A two-sided recruitment platform combining fast job discovery with an authenticated employer portal for job posting and candidate management.',

    longDescription:
      'QuickHire is a full-stack recruitment platform designed around two distinct user journeys: job seekers discovering and applying for opportunities, and employers publishing roles and managing incoming applications. The application combines role-aware interfaces, API-driven workflows, search and filtering, authentication, and application status management within a single platform.',

    problem:
      'Recruitment platforms must support two different workflows without sacrificing usability. Job seekers need fast search, filtering, and application flows, while employers need structured job-management tools and clear application tracking—all operating on the same interconnected application data model.',

    approach:
      'Separated the interface into role-specific job seeker and employer experiences powered by a shared API layer. Used Zustand for lightweight client-state management and designed MongoDB collections around users, job postings, and applications to support efficient role-aware workflows.',

    responsibilities: [
      'Developed the job seeker workflow including job discovery, search filtering, job details, and application submission.',
      'Built the employer portal for authenticated job posting, candidate review, and application status management.',
      'Designed the MongoDB data model linking users, job postings, and application records.',
      'Implemented role-aware API validation and protected application workflows.',
    ],

    engineering: [
      'Structured MongoDB data model for users, jobs, and applications',
      'Node.js and Express.js REST API architecture',
      'Lightweight client-state synchronization with Zustand',
      'Role-aware API validation and protected routing',
      'Search and filtering workflows for job discovery',
      'Dynamic application status updates across employer workflows',
    ],

    outcome:
      'Deployed an end-to-end recruitment application that supports both candidate and employer workflows, from job discovery and application submission to job publishing and candidate management.',

    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'Tailwind CSS'],

    link: 'https://yeasin-quickhire.netlify.app/',
    github: 'https://github.com/ysncodex/QuickHire',

    color: 'from-emerald-400 to-teal-600',
    image: '/images/project-3.png',
  },
];

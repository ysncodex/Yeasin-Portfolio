import type { LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  cv: string;
  avatar: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  tech: string[];
  description: string | string[];
}

export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  featured: boolean;
  /** Short, card-facing line. Falls back to `longDescription` when absent. */
  summary?: string;
  longDescription: string;
  problem?: string;
  approach?: string;
  responsibilities?: string[];
  engineering?: string[];
  outcome?: string;
  tech: string[];
  link?: string;
  github?: string;
  color: string;
  image?: string;
}

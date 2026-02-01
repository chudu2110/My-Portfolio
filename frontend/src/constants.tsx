
import React from 'react';
import { Project, Skill, Achievement, Feedback } from './types';

export const CV_DATA = {
  name: "VU HUY DU",
  role: "Software Developer",
  specialization: "Specialize in: Web / App & AI Integration",
  location: "Vietnam",
  email: "dudzquadu@gmail.com",
  avatar: "/assets/avatar.png",
  socials: [
    { label: "GitHub", url: "https://github.com/chudu2110" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chu-du-5698b128a/" },
    { label: "Behance", url: "https://www.behance.net/chudu4" }
  ],
  education: {
    school: "Posts and Telecommunications Institute of Technology (PTIT)",
    major: "Advanced Information Technology",
    logo: "/assets/school_logo.png"
  },
  about: "Work as a Full-Stack Developer building scalable, production-ready web and application systems with AI-driven features. Fluent in English and experienced in working with global, remote teams."
};

export const PROJECTS: Project[] = [
  {
    title: "Elysian Luxe Fashion",
    description: "High-end fashion e-commerce with dynamic catalogs, advanced filters, and seamless checkout.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://elysianluxe.netlify.app/",
    color: "#E4FCE4", // Mint
    projectPath: "elysian-luxe-fashion",
    image: "/assets/projects/elysian-luxe.png"
  },
  {
    title: "L'Aura Luxury Jewelry",
    description: "Premium jewelry boutique with 3D product views, secure payments, and elegant interface.",
    tags: ["Next.js", "FastAPI", "Supabase"],
    link: "https://laura-france.netlify.app/",
    color: "#FCE4E4", // Pink
    projectPath: "l'aura-luxury-jewelry",
    image: "/assets/projects/laura.png"
  },
  {
    title: "Lumina Botanical",
    description: "Natural skincare platform with product catalogs, ingredient transparency, and user reviews.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    link: "https://lumina-france.netlify.app/",
    color: "#E4E4FC", // Lavender
    projectPath: "lumina-botanical---natural-skincare",
    image: "/assets/projects/lumina.png"
  },
  {
    title: "Lumina Brew",
    description: "Artisanal coffee website with interactive menus, brewing guides, and flavor profiles.",
    tags: ["Next.js", "Node.js", "Supabase"],
    link: "https://luminabrew.netlify.app/",
    color: "#FCF4E4", // Cream
    projectPath: "lumina-brew---artisanal-coffee-experience",
    image: "/assets/projects/lumina-brew.png"
  },
  {
    title: "Lumière",
    description: "Fine dining platform with reservation system, interactive menus, and wine pairings.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://lumiere-france.netlify.app/",
    color: "#E4F4FC", // Sky Blue
    projectPath: "lumière---modern-gastronomy",
    image: "/assets/projects/lumiere.png"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: 'frontend' },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: 'frontend' },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: 'frontend' },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: 'backend' },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: 'backend' },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: 'database' },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: 'database' },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: 'devops' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Google Project Management", image: "/assets/achievements/1.Google Project Management.jpeg", issuer: "Certificate" },
  { title: "Google UX Design", image: "/assets/achievements/2.Google UX Design.jpeg", issuer: "Certificate" },
  { title: "Google IT Support", image: "/assets/achievements/3.Google IT Support.jpeg", issuer: "Certificate" },
  { title: "Google Data Analytics", image: "/assets/achievements/4.Google Data Analytics.jpeg", issuer: "Certificate" },
  { title: "WorldQuant Gold Medal", image: "/assets/achievements/4.World Quant Gold.png", issuer: "Certificate" },
  { title: "WorldQuant Top 20% Globally", image: "/assets/achievements/5.World Quant Top 20.png", issuer: "Certificate" },
  { title: "VIETNAM Youth Start Up Challenge 2025 - 2nd Place", image: "/assets/achievements/6.Viet Nam Youth Start Up Challenge 2025 2nd.jpg", issuer: "Award" },
  { title: "Keep VIETNAM Clean 2025", image: "/assets/achievements/7. Keep VIETNAM Clean 2025.png", issuer: "Award" }
];

export const FEEDBACKS: Feedback[] = [
  { image: "/assets/feedbacks/collab 1.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 2.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 3.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 4.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 5.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 6.png", type: 'collab' },
  { image: "/assets/feedbacks/collab 7.png", type: 'collab' },
  { image: "/assets/feedbacks/feedback 1.png", type: 'feedback' },
  { image: "/assets/feedbacks/feedback 2.png", type: 'feedback' }
];

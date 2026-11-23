export const profile = {
  name: "Gaurav Kumar",
  title: "Software Engineer · Full-Stack Developer",
  intro: "I build thoughtful software that makes complex problems feel simple — from polished interfaces to practical applications with real utility.",
  links: {
    github: "https://github.com/gsk718/",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar187/",
    resume: "/resume.pdf",
    email: "mailto:your.email@example.com",
  },
};

export const alphaWatch = {
  name: "AlphaWatch",
  eyebrow: "Featured project · Full-stack stock analysis",
  description: "A full-stack stock analysis platform built with a React and TypeScript frontend, a Python REST API, and PostgreSQL persistence. Deployed in production with Vercel, Render, and Supabase.",
  github: "https://github.com/gsk718/AlphaWatch",
  demo: "https://alphawatch.gauravdevport.com",
  technologies: ["React", "TypeScript", "Vite", "Python", "FastAPI", "REST API", "PostgreSQL", "Vercel", "Render", "Supabase"],
  screenshots: [
    { src: "/assets/alphawatch/screenshot-1.png", alt: "AlphaWatch market overview with stock analysis, rankings, and activity history", label: "Market overview" },
    { src: "/assets/alphawatch/screenshot-2.png", alt: "AlphaWatch stock analysis screen", label: "Stock analysis" },
    { src: "/assets/alphawatch/screenshot-3.png", alt: "AlphaWatch stock rankings screen", label: "Stock rankings" },
    { src: "/assets/alphawatch/screenshot-4.png", alt: "AlphaWatch backtesting screen", label: "Backtesting" },
  ],
  features: [
    "Stock analysis and technical indicators",
    "Stock rankings",
    "Historical backtesting",
    "Analysis history and backtest history",
  ],
  architecture: "The React, TypeScript, and Vite frontend communicates with a Python backend built with FastAPI through REST APIs. PostgreSQL provides persistent storage through Supabase. The frontend is deployed on Vercel and the backend on Render.",
};

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
  "Backend & data": ["Spring Boot", "Supabase", "PostgreSQL", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code"],
};

export const education = [
  { school: "Arizona State University", degree: "B.S. Applied Computing, Computer Science", date: "June 2024" },
];

// Add verified roles here as experience is available.
export const experience: { role: string; company: string; date: string; summary: string }[] = [];

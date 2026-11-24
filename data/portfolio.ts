export const profile = {
  name: "Gaurav Kumar",
  title: "Software Engineer · Full-Stack Developer",
  intro: "I’m a software engineer with a background in Applied Computing and Computer Science from Arizona State University. I’m interested in full-stack development, backend engineering, and practical applications built with APIs, databases, and modern web technologies.",
  links: {
    github: "https://github.com/gsk718/",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar187/",
    resume: "/resume.pdf",
    email: "mailto:gauravsk187@gmail.com",
  },
};

export const alphaWatch = {
  name: "AlphaWatch",
  eyebrow: "Featured project · Full-stack stock analysis",
  description: "A full-stack stock analysis platform built with a React and TypeScript frontend, a Python REST API, and PostgreSQL persistence. Deployed with Vercel, Render, and Supabase.",
  github: "https://github.com/gsk718/AlphaWatch",
  demo: "https://alphawatch.gauravdevport.com",
  technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Vercel", "Render", "Supabase"],
  screenshots: [
    { src: "/assets/alphawatch/screenshot-1.png", alt: "AlphaWatch market overview with stock analysis, rankings, and activity history", label: "Market overview" },
    { src: "/assets/alphawatch/screenshot-2.png", alt: "AlphaWatch stock analysis screen", label: "Stock analysis" },
    { src: "/assets/alphawatch/screenshot-3.png", alt: "AlphaWatch stock rankings screen", label: "Stock rankings" },
    { src: "/assets/alphawatch/screenshot-4.png", alt: "AlphaWatch backtesting screen", label: "Backtesting" },
  ],
  features: [
    "Technical analysis with moving averages, RSI, momentum, and volatility scoring",
    "Stock rankings",
    "Historical backtesting",
    "SPY benchmark comparisons",
    "Analysis history and backtest history",
  ],
  architecture: "The React, TypeScript, and Vite frontend communicates with a Python backend built with FastAPI through REST APIs. PostgreSQL provides persistent storage through Supabase. The frontend is deployed on Vercel and the backend on Render.",
};

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  Frontend: ["React", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["FastAPI", "REST APIs"],
  Databases: ["PostgreSQL", "Supabase"],
  "Tools & infrastructure": ["Git", "GitHub", "Vercel", "Render", "Alembic"],
};

export const series = {
  name: "Series",
  description: "A mobile app for discovering and tracking movies and television shows.",
  technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "TMDB API"],
};

export const education = [
  { school: "Arizona State University", degree: "B.S. Applied Computing, Computer Science", date: "June 2024" },
];

// Add verified roles here as experience is available.
export const experience: { role: string; company: string; date: string; summary: string }[] = [];

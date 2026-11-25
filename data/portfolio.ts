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
  eyebrow: "Mobile project · Film & television discovery",
  description: "A mobile application for discovering TV shows and movies, then keeping track of what you want to watch. Built with React Native and Expo, with TMDB providing entertainment data and Supabase-backed PostgreSQL handling persistent app data with Row Level Security.",
  github: "https://github.com/gsk718/qlyp",
  screenshots: [
    { src: "/assets/series/series-discovery.png", alt: "Series home screen featuring a featured series and an Up Next carousel", label: "Series discovery" },
    { src: "/assets/series/title-details.png", alt: "Series title page with a video preview and actions to like, save, rate, view information, or share", label: "Title details" },
    { src: "/assets/series/profile-activity.png", alt: "Series profile activity with watch ratings and reviews", label: "Profile activity" },
  ] as { src: string; alt: string; label: string }[],
  features: [
    "Discover TV shows and movies using information from TMDB",
    "Track shows and movies in a personal collection",
    "Persist application data with PostgreSQL and Supabase Row Level Security",
  ],
  architecture: "The React Native application is built with Expo for local development and uses TypeScript for its application code. It connects to TMDB for TV and movie information. Supabase provides the data service backed by PostgreSQL, where Row Level Security policies control access to persisted records. The app currently runs locally through Expo and does not have a public deployment.",
  technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "TMDB API"],
};

export const education = [
  { school: "Arizona State University", degree: "B.S. Applied Computing, Computer Science", date: "June 2024" },
];

// Add verified roles here as experience is available.
export const experience: { role: string; company: string; date: string; summary: string }[] = [];

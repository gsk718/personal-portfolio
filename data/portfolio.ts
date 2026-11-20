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
  eyebrow: "Featured project · Market analysis",
  description: "A stock market analysis application designed to help users explore performance, understand market trends, and interpret technical indicators.",
  github: "https://github.com/your-github-username/alphawatch",
  demo: "#",
  technologies: ["Python", "yfinance", "Pandas", "Plotly", "OpenAI API"],
  features: [
    "Stock price and performance analysis using market data from yfinance",
    "Technical indicators including MA5, MA20, and RSI",
    "Buy / Sell / Hold analysis to help interpret indicator signals",
    "Interactive charting with Plotly",
  ],
  architecture: "The confirmed technology list includes Python, yfinance, Pandas, Plotly, and the OpenAI API. The available project information does not specify component boundaries or data flow, so this page describes the stack without assigning roles beyond the listed tools.",
  challenges: [
    { title: "Presenting multiple market signals", body: "The confirmed feature set includes MA5, MA20, and RSI for analyzing stock performance and market trends." },
    { title: "Making stock trends visible", body: "Plotly is part of the confirmed technology stack for the application's market analysis experience." },
  ],
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { alphaWatch, education, experience, profile, skills } from "@/data/portfolio";

const navItems = ["About", "Projects", "Skills", "Experience"];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Header() {
  const [active, setActive] = useState("About");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <header className="site-header"><Link href="/" className="wordmark" aria-label="Gaurav Kumar home">GK<span>.</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
      {navItems.map((item) => <a key={item} className={active === item ? "active" : ""} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
      <a className="nav-contact" href={profile.links.email}>Let’s talk <Arrow diagonal /></a>
    </nav>
  </header>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function ScreenshotPreview({ index = 0, className = "" }: { index?: number; className?: string }) {
  const screenshot = alphaWatch.screenshots[index];
  return <figure className={`screenshot-preview ${className}`}>
    <Image src={screenshot.src} alt={screenshot.alt} width={3300} height={1756} priority={index === 0} />
  </figure>;
}

function ScreenshotGallery() {
  return <div className="screenshot-gallery" aria-label="AlphaWatch application screenshots">
    {alphaWatch.screenshots.map((screenshot, index) => <figure className="screenshot-card" key={screenshot.src}>
      <Image src={screenshot.src} alt={screenshot.alt} width={3300} height={1756} loading="lazy" />
      <figcaption><span>0{index + 1}</span>{screenshot.label}</figcaption>
    </figure>)}
  </div>;
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="section-heading"><div className="section-kicker"><span>{number}</span><span>{label}</span></div><h2>{title}</h2></div>;
}

export function HomePage() {
  return <><Header/><main>
    <section className="hero section-shell" id="about"><div className="hero-grid"><div className="hero-copy"><div className="availability"><span className="pulse"/> OPEN TO WHAT’S NEXT</div><p className="hero-pretitle">HELLO, I’M</p><h1>Gaurav<br/><span>Kumar.</span></h1><p className="hero-role">Software Engineer <i> / </i> Full-Stack Developer</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a href="#projects" className="button button-light">Explore my work <Arrow/></a><a href={profile.links.email} className="button button-quiet">Get in touch <Arrow diagonal/></a></div><div className="social-links"><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a><a href={profile.links.resume}>Resume <Arrow diagonal/></a></div></div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="art-core"><span>GK</span><i>BUILD · SOLVE · REFINE</i></div><span className="orbit-label label-one">CRAFT</span><span className="orbit-label label-two">CURIOSITY</span><span className="orbit-label label-three">PURPOSE</span><span className="art-coord">37° 20′ 20″ N<br/>121° 53′ 26″ W</span><div className="art-star">✳</div></div></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span>BASED IN CALIFORNIA</span><span className="hero-index">01 — 04</span></div></section>

    <section className="section-shell project-section" id="projects"><Reveal><SectionHeading number="01" label="SELECTED WORK" title="Built with intention."/></Reveal><Reveal className="project-intro"><div><p className="eyebrow">{alphaWatch.eyebrow}</p><h3>{alphaWatch.name}<span className="project-index">01</span></h3></div><p>{alphaWatch.description}</p></Reveal><Reveal><Link href="/projects/alphawatch" className="project-link"><ScreenshotPreview/><div className="project-link-caption"><span>Explore the project</span><Arrow diagonal/></div></Link></Reveal><div className="project-meta"><div><span className="meta-label">STACK</span><div className="tag-list">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-cta"><a href={alphaWatch.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href={alphaWatch.demo} target="_blank" rel="noreferrer">Live demo <Arrow diagonal/></a></div></div></section>

    <section className="section-shell skills-section" id="skills"><Reveal><SectionHeading number="02" label="THE TOOLKIT" title="Skills that ship."/></Reveal><div className="skills-layout"><p className="skills-note">A practical set of tools for shaping ideas into useful, dependable software.</p><div className="skill-groups">{Object.entries(skills).map(([group, items], index) => <Reveal key={group} className="skill-group"><span className="skill-number">0{index + 1}</span><h3>{group}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div></div></section>

    <section className="section-shell experience-section" id="experience"><Reveal><SectionHeading number="03" label="THE PATH SO FAR" title="Grounded in learning."/></Reveal><div className="experience-columns"><div><div className="column-heading"><span>EXPERIENCE</span><span>01</span></div>{experience.length ? experience.map((role) => <article className="timeline-item" key={role.company}><div><h3>{role.role}</h3><span>{role.company}</span></div><time>{role.date}</time><p>{role.summary}</p></article>) : <div className="empty-experience"><span className="empty-mark">+</span><div><h3>More chapters ahead.</h3><p>Professional experience details will be added here as they’re ready to share.</p></div><span className="placeholder-label">DETAILS TO COME</span></div>}</div><div><div className="column-heading"><span>EDUCATION</span><span>01</span></div>{education.map((item, index) => <article className="education-item" key={item.school}><span className="education-number">0{index + 1}</span><div><h3>{item.school}</h3><p>{item.degree}</p></div><time>{item.date}</time></article>)}</div></div></section>

    <section className="contact-section"><div className="section-shell contact-inner"><div><span className="eyebrow">HAVE A GOOD PROBLEM?</span><h2>Let’s make<br/><em>something matter.</em></h2></div><a className="contact-circle" href={profile.links.email} aria-label="Email Gaurav Kumar">LET’S TALK <Arrow diagonal/></a><div className="contact-bottom"><span>OPEN TO CONVERSATION</span><a href={profile.links.email}>{profile.links.email.replace("mailto:", "")}</a></div></div></section>
  </main><footer className="site-footer"><Link href="/" className="wordmark">GK<span>.</span></Link><span>© 2026 Gaurav Kumar</span><span>DESIGNED & BUILT WITH CARE</span><a href="#about">BACK TO TOP ↑</a></footer></>;
}

export function AlphaWatchPage() {
  return <><Header/><main className="detail-page"><div className="section-shell"><div className="breadcrumb"><Link href="/">HOME</Link><span>/</span><span>PROJECTS</span><span>/</span><b>ALPHAWATCH</b></div><div className="detail-hero"><span className="eyebrow">{alphaWatch.eyebrow}</span><h1>Alpha<span>Watch.</span></h1><p>{alphaWatch.description}</p><div className="detail-actions"><a className="button button-light" href={alphaWatch.demo} target="_blank" rel="noreferrer">Live application <Arrow diagonal/></a><a className="button button-quiet" href={alphaWatch.github} target="_blank" rel="noreferrer">View on GitHub <Arrow diagonal/></a></div></div><ScreenshotGallery/>
      <div className="detail-overview"><div><span className="eyebrow">01 — OVERVIEW</span><h2>Full-stack stock<br/><em>analysis platform.</em></h2></div><p>{alphaWatch.description}</p></div>
      <div className="detail-grid"><section><span className="eyebrow">02 — CAPABILITIES</span><h2>What it does</h2><ul className="feature-list">{alphaWatch.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span>{feature}<Arrow diagonal/></li>)}</ul></section><section><span className="eyebrow">03 — TECHNOLOGY</span><h2>Built with</h2><p className="architecture-copy">{alphaWatch.architecture}</p><div className="tag-list detail-tags">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section></div>
      <div className="detail-end"><span>PRODUCTION · VERCEL / RENDER / SUPABASE</span><Link href="/">Back to portfolio <Arrow/></Link></div></div></main><footer className="site-footer"><Link href="/" className="wordmark">GK<span>.</span></Link><span>© 2026 Gaurav Kumar</span><span>ALPHAWATCH · PROJECT 01</span><Link href="/">BACK HOME ↑</Link></footer></>;
}

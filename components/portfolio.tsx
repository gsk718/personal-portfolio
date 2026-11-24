"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { alphaWatch, education, profile, series, skills } from "@/data/portfolio";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const items = [{ label: "About", href: "#background" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (
    <header className="site-header">
      <Link href="/#about" className="wordmark" aria-label="Gaurav Kumar home">GK<span>.</span></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="main-nav" className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {items.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </header>
  );
}

function Heading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="section-heading"><p className="section-kicker"><span>{number}</span>{label}</p><h2>{title}</h2></div>;
}

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    const timeout = window.setTimeout(() => setYear(new Date().getFullYear()), 0);
    return () => window.clearTimeout(timeout);
  }, []);
  return <footer className="site-footer">
    <Link href="/#about" className="wordmark">GK<span>.</span></Link>
    <div className="footer-links"><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.links.email}>Email</a></div>
    <span>© {year ?? ""} Gaurav Kumar</span>
  </footer>;
}

export function HomePage() {
  return <>
    <Header />
    <main>
      <section className="hero section-shell" id="about">
        <div className="hero-copy">
          <p className="hero-pretitle"><span className="status-mark" />SOFTWARE ENGINEER · CALIFORNIA</p>
          <h1>Gaurav<br /><span>Kumar.</span></h1>
          <p className="hero-role">Software Engineer <i>/</i> Full-Stack Developer</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore projects <Arrow /></a>
            <a href={profile.links.email} className="text-link">Contact <Arrow diagonal /></a>
            <a href={profile.links.resume} className="text-link resume-link" target="_blank" rel="noreferrer">Resume <Arrow diagonal /></a>
          </div>
          <div className="hero-index"><span>01 / 03</span><span>Selected work · 2024—26</span></div>
        </div>
        <div className="hero-portrait">
          <Image src="/images/gaurav-kumar.jpeg" alt="Gaurav Kumar standing outside" width={3024} height={4032} priority sizes="(max-width: 800px) 100vw, 42vw" />
        </div>
      </section>

      <section className="section-shell project-section" id="projects">
        <Heading number="01" label="SELECTED PROJECTS" title="Built and shipped." />
        <article className="project-feature">
          <div className="project-heading"><div><p className="eyebrow">FULL-STACK · WEB APPLICATION</p><h3>AlphaWatch <span>01</span></h3></div><p>{alphaWatch.description}</p></div>
          <Link href="/projects/alphawatch" className="project-screenshot" aria-label="Explore AlphaWatch project details">
            <Image src={alphaWatch.screenshots[0].src} alt={alphaWatch.screenshots[0].alt} width={3300} height={1756} sizes="(max-width: 900px) 100vw, 1100px" />
            <span className="image-cue">VIEW PROJECT <Arrow diagonal /></span>
          </Link>
          <div className="project-details"><ul className="capability-list">{alphaWatch.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="project-meta"><div><span className="meta-label">TECHNOLOGY</span><div className="tag-list">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-links"><a href={alphaWatch.demo} target="_blank" rel="noreferrer">Live application <Arrow diagonal /></a><a href={alphaWatch.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><Link href="/projects/alphawatch">Case study <Arrow diagonal /></Link></div></div></div>
        </article>

        <article className="series-project">
          <div className="series-visual" aria-label="Series mobile application, visual preview coming soon">
            <div className="phone-frame"><div className="phone-island"/><span className="series-wordmark">series<span>.</span></span><div className="series-rule"/><p>YOUR NEXT<br/>FAVORITE<br/><em>STORY.</em></p><span className="series-note">DISCOVER · SAVE · KEEP TRACK</span><div className="series-screen-footer">FILM & TELEVISION / MOBILE</div></div>
          </div>
          <div className="series-copy"><p className="eyebrow">MOBILE · IN DEVELOPMENT</p><h3>{series.name}<span>02</span></h3><p>{series.description}</p><p className="private-note">Private repository · No public deployment</p><span className="meta-label">TECHNOLOGY</span><div className="tag-list">{series.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        </article>
      </section>

      <section className="about-section" id="background"><div className="section-shell about-grid">
        <div><Heading number="02" label="BACKGROUND" title="A little about me." /><div className="education"><span className="meta-label">EDUCATION</span><div><strong>{education[0].school}</strong><p>{education[0].degree}</p><time>{education[0].date}</time></div></div></div>
        <div className="skills-panel"><p className="eyebrow">TOOLS I WORK WITH</p>{Object.entries(skills).map(([group, values], index) => <div className="skill-row" key={group}><span className="skill-number">0{index + 1}</span><h3>{group}</h3><p>{values.join(" · ")}</p></div>)}</div>
      </div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div><p className="eyebrow">CONTACT</p><h2>Gaurav Kumar</h2><a className="contact-email" href={profile.links.email}>{profile.links.email.replace("mailto:", "")} <Arrow diagonal /></a></div><div className="contact-social"><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div></section>
    </main>
    <Footer />
  </>;
}

export function AlphaWatchPage() {
  return <><Header /><main className="detail-page"><div className="section-shell">
    <div className="breadcrumb"><Link href="/#projects">PROJECTS</Link><span>/</span><b>ALPHAWATCH</b></div>
    <div className="detail-hero"><span className="eyebrow">{alphaWatch.eyebrow}</span><h1>Alpha<span>Watch.</span></h1><p>{alphaWatch.description}</p><div className="detail-actions"><a className="button button-primary" href={alphaWatch.demo} target="_blank" rel="noreferrer">Live application <Arrow diagonal /></a><a className="text-link" href={alphaWatch.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div></div>
    <div className="screenshot-gallery">{alphaWatch.screenshots.map((screenshot, index) => <figure className="screenshot-card" key={screenshot.src}><a className="screenshot-full" href={screenshot.src} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${screenshot.label}`}><Image src={screenshot.src} alt={screenshot.alt} width={3300} height={1756} loading="lazy" sizes="(max-width: 700px) 100vw, 50vw"/><span>OPEN FULL SIZE ↗</span></a><figcaption><span>0{index + 1}</span>{screenshot.label}</figcaption></figure>)}</div>
    <div className="detail-grid"><section><span className="eyebrow">CAPABILITIES</span><h2>What it does</h2><ul className="detail-list">{alphaWatch.features.map((item) => <li key={item}>{item}</li>)}</ul></section><section><span className="eyebrow">TECHNOLOGY</span><h2>Built and deployed</h2><p className="architecture-copy">{alphaWatch.architecture}</p><div className="tag-list">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section></div>
    <div className="detail-end"><span>PRODUCTION · VERCEL / RENDER / SUPABASE</span><Link href="/#projects">Back to projects <Arrow /></Link></div>
  </div></main><Footer /></>;
}

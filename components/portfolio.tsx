"use client";

import Link from "next/link";
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

function ChartPreview() {
  return <div className="app-preview" aria-label="AlphaWatch interface concept showing stock performance and technical indicators">
    <div className="preview-top"><div className="preview-brand"><span className="brand-mark">A</span><span>alphawatch</span></div><span className="preview-status"><i /> MARKET OPEN</span><span className="preview-date">MARKET OVERVIEW&nbsp;&nbsp; · &nbsp;&nbsp;01</span></div>
    <div className="preview-body"><aside className="preview-sidebar"><b>WATCHLIST</b><div className="ticker selected"><span>NVDA</span><small>NVIDIA</small><strong>$875.28</strong><em>+2.84%</em></div><div className="ticker"><span>AAPL</span><small>Apple Inc.</small><strong>$189.84</strong><em>+0.62%</em></div><div className="ticker"><span>MSFT</span><small>Microsoft</small><strong>$420.72</strong><em>+1.21%</em></div><div className="ticker"><span>TSLA</span><small>Tesla Inc.</small><strong>$172.63</strong><em className="down">−1.08%</em></div></aside>
      <div className="preview-main"><div className="stock-heading"><div><small>NASDAQ · NVIDIA CORPORATION</small><h3>NVDA <span>↗</span></h3></div><div className="price">$875.28 <span>+2.84% today</span></div></div><div className="chart-label"><span>PRICE PERFORMANCE</span><span>1D &nbsp; 1W &nbsp; <b>1M</b> &nbsp; 3M &nbsp; 1Y</span></div><div className="chart-wrap"><div className="chart-y"><span>900</span><span>875</span><span>850</span><span>825</span></div><svg viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label="Illustrative rising stock price chart"><defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a5d2ba" stopOpacity=".2"/><stop offset="100%" stopColor="#a5d2ba" stopOpacity="0"/></linearGradient></defs><path d="M0 152 C35 145 42 164 78 136 S121 148 154 119 S202 127 227 102 S265 112 299 89 S345 100 371 67 S410 82 444 73 S482 85 510 51 S557 63 579 39 S620 61 650 27 S680 34 700 12 L700 190 L0 190Z" fill="url(#chart-fill)"/><path d="M0 152 C35 145 42 164 78 136 S121 148 154 119 S202 127 227 102 S265 112 299 89 S345 100 371 67 S410 82 444 73 S482 85 510 51 S557 63 579 39 S620 61 650 27 S680 34 700 12" fill="none" stroke="#9ccab0" strokeWidth="2.5"/><path d="M0 168 C60 155 115 155 170 140 S280 130 340 111 S450 98 510 77 S615 61 700 45" fill="none" stroke="#8798ae" strokeWidth="1.4" strokeDasharray="5 5"/></svg><div className="chart-x"><span>10:00</span><span>11:00</span><span>12:00</span><span>13:00</span><span>14:00</span><span>15:00</span></div></div><div className="indicator-row"><span><i className="dot-green"/> PRICE</span><span><i className="dot-muted"/> MA20</span><span className="indicator-reading">RSI <b>62.4</b></span><span className="indicator-reading">SIGNAL <b className="signal">HOLD</b></span></div></div></div>
    <div className="preview-footer"><span>INDICATORS · MA5 / MA20 / RSI</span><span>DATA VISUALIZATION · PLOTLY</span><span>01 / 01</span></div>
  </div>;
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="section-heading"><div className="section-kicker"><span>{number}</span><span>{label}</span></div><h2>{title}</h2></div>;
}

export function HomePage() {
  return <><Header/><main>
    <section className="hero section-shell" id="about"><div className="hero-grid"><div className="hero-copy"><div className="availability"><span className="pulse"/> OPEN TO WHAT’S NEXT</div><p className="hero-pretitle">HELLO, I’M</p><h1>Gaurav<br/><span>Kumar.</span></h1><p className="hero-role">Software Engineer <i> / </i> Full-Stack Developer</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a href="#projects" className="button button-light">Explore my work <Arrow/></a><a href={profile.links.email} className="button button-quiet">Get in touch <Arrow diagonal/></a></div><div className="social-links"><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a><a href={profile.links.resume}>Resume <Arrow diagonal/></a></div></div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="art-core"><span>GK</span><i>BUILD · SOLVE · REFINE</i></div><span className="orbit-label label-one">CRAFT</span><span className="orbit-label label-two">CURIOSITY</span><span className="orbit-label label-three">PURPOSE</span><span className="art-coord">37° 20′ 20″ N<br/>121° 53′ 26″ W</span><div className="art-star">✳</div></div></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span>BASED IN CALIFORNIA</span><span className="hero-index">01 — 04</span></div></section>

    <section className="section-shell project-section" id="projects"><Reveal><SectionHeading number="01" label="SELECTED WORK" title="Built with intention."/></Reveal><Reveal className="project-intro"><div><p className="eyebrow">{alphaWatch.eyebrow}</p><h3>{alphaWatch.name}<span className="project-index">01</span></h3></div><p>{alphaWatch.description}</p></Reveal><Reveal><Link href="/projects/alphawatch" className="project-link"><ChartPreview/><div className="project-link-caption"><span>Explore the project</span><Arrow diagonal/></div></Link></Reveal><div className="project-meta"><div><span className="meta-label">STACK</span><div className="tag-list">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-cta"><a href={alphaWatch.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href={alphaWatch.demo} aria-disabled="true" onClick={(event) => event.preventDefault()}>Live demo <span className="soon">COMING SOON</span></a></div></div></section>

    <section className="section-shell skills-section" id="skills"><Reveal><SectionHeading number="02" label="THE TOOLKIT" title="Skills that ship."/></Reveal><div className="skills-layout"><p className="skills-note">A practical set of tools for shaping ideas into useful, dependable software.</p><div className="skill-groups">{Object.entries(skills).map(([group, items], index) => <Reveal key={group} className="skill-group"><span className="skill-number">0{index + 1}</span><h3>{group}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div></div></section>

    <section className="section-shell experience-section" id="experience"><Reveal><SectionHeading number="03" label="THE PATH SO FAR" title="Grounded in learning."/></Reveal><div className="experience-columns"><div><div className="column-heading"><span>EXPERIENCE</span><span>01</span></div>{experience.length ? experience.map((role) => <article className="timeline-item" key={role.company}><div><h3>{role.role}</h3><span>{role.company}</span></div><time>{role.date}</time><p>{role.summary}</p></article>) : <div className="empty-experience"><span className="empty-mark">+</span><div><h3>More chapters ahead.</h3><p>Professional experience details will be added here as they’re ready to share.</p></div><span className="placeholder-label">DETAILS TO COME</span></div>}</div><div><div className="column-heading"><span>EDUCATION</span><span>02</span></div>{education.map((item, index) => <article className="education-item" key={item.school}><span className="education-number">0{index + 1}</span><div><h3>{item.school}</h3><p>{item.degree}</p></div><time>{item.date}</time></article>)}</div></div></section>

    <section className="contact-section"><div className="section-shell contact-inner"><div><span className="eyebrow">HAVE A GOOD PROBLEM?</span><h2>Let’s make<br/><em>something matter.</em></h2></div><a className="contact-circle" href={profile.links.email} aria-label="Email Gaurav Kumar">LET’S TALK <Arrow diagonal/></a><div className="contact-bottom"><span>OPEN TO CONVERSATION</span><a href={profile.links.email}>{profile.links.email.replace("mailto:", "")}</a></div></div></section>
  </main><footer className="site-footer"><Link href="/" className="wordmark">GK<span>.</span></Link><span>© 2026 Gaurav Kumar</span><span>DESIGNED & BUILT WITH CARE</span><a href="#about">BACK TO TOP ↑</a></footer></>;
}

export function AlphaWatchPage() {
  return <><Header/><main className="detail-page"><div className="section-shell"><div className="breadcrumb"><Link href="/">HOME</Link><span>/</span><span>PROJECTS</span><span>/</span><b>ALPHAWATCH</b></div><div className="detail-hero"><span className="eyebrow">{alphaWatch.eyebrow}</span><h1>Alpha<span>Watch.</span></h1><p>{alphaWatch.description}</p><div className="detail-actions"><a className="button button-light" href={alphaWatch.github} target="_blank" rel="noreferrer">View on GitHub <Arrow diagonal/></a><span className="detail-demo">Live application <i>Coming soon</i></span></div></div><ChartPreview/>
      <div className="detail-overview"><div><span className="eyebrow">01 — OVERVIEW</span><h2>Market signals,<br/><em>made easier to read.</em></h2></div><p>{alphaWatch.description} AlphaWatch brings technical stock indicators and market analysis into a focused application experience.</p></div>
      <div className="detail-grid"><section><span className="eyebrow">02 — CAPABILITIES</span><h2>What it does</h2><ul className="feature-list">{alphaWatch.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span>{feature}<Arrow diagonal/></li>)}</ul></section><section><span className="eyebrow">03 — TECHNOLOGY</span><h2>Built with</h2><p className="architecture-copy">{alphaWatch.architecture}</p><div className="tag-list detail-tags">{alphaWatch.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section></div>
      <section className="challenge-section"><span className="eyebrow">04 — ENGINEERING FOCUS</span><h2>Designed around clarity.</h2><div className="challenge-grid">{alphaWatch.challenges.map((challenge, index) => <article key={challenge.title}><span>0{index + 1}</span><h3>{challenge.title}</h3><p>{challenge.body}</p></article>)}</div></section><div className="detail-end"><span>PROJECT INFORMATION FROM THE CURRENT PORTFOLIO BRIEF</span><Link href="/">Back to portfolio <Arrow/></Link></div></div></main><footer className="site-footer"><Link href="/" className="wordmark">GK<span>.</span></Link><span>© 2026 Gaurav Kumar</span><span>ALPHAWATCH · PROJECT 01</span><Link href="/">BACK HOME ↑</Link></footer></>;
}

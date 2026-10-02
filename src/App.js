import React, { useEffect, useState } from "react";
import content from "./content";
import "./index.css";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiPhone,
  FiSun
} from "react-icons/fi";

const sections = [
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

function initialTheme() {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // Storage can be blocked; fall back to the system preference.
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
      // Ignore: the theme still applies for this visit.
    }
  }, [theme]);

  const resumeUrl = `${process.env.PUBLIC_URL}/${content.resumePdf}`;

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">
            {content.name}
          </a>
          <nav className="nav" aria-label="Sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="nav-link">
                {s.label}
              </a>
            ))}
          </nav>
          <button
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <img src={content.profileImage} alt={content.name} className="hero-photo" />
          <div className="hero-body">
            <p className="eyebrow">{content.role}</p>
            <h1 className="hero-name">{content.name}</h1>
            <p className="hero-headline">{content.headline}</p>
            <p className="hero-pitch">{content.pitch}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${content.email}`}>
                <FiMail /> Email me
              </a>
              <a className="btn" href={resumeUrl} target="_blank" rel="noreferrer">
                <FiDownload /> CV (PDF)
              </a>
              <a className="btn" href={content.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
              <a className="btn" href={content.links.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>
        </section>

        <dl className="facts">
          {content.facts.map((f) => (
            <div key={f.label} className="fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <section className="highlights" aria-label="Highlights">
          {content.highlights.map((h) => (
            <div key={h.label} className="highlight">
              <span className="highlight-value">{h.value}</span>
              <span className="highlight-label">{h.label}</span>
            </div>
          ))}
        </section>

        <Section id="work" title="Selected work">
          <div className="projects">
            {content.projects.map((p) => (
              <article key={p.title} className="project">
                <header>
                  <h3>{p.title}</h3>
                  <p className="muted small">{p.context}</p>
                </header>
                <dl className="project-story">
                  <dt>Problem</dt>
                  <dd>{p.problem}</dd>
                  <dt>Approach</dt>
                  <dd>{p.approach}</dd>
                  <dt>Result</dt>
                  <dd>{p.result}</dd>
                </dl>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {(p.link || p.secondaryLink) && (
                  <div className="project-links">
                    {[p.link, p.secondaryLink].filter(Boolean).map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                        {l.label} <FiArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {content.experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-head">
                  <img src={job.logo} alt="" className="job-logo" />
                  <div className="job-title">
                    <h3>{job.role}</h3>
                    <p className="muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="job-period">{job.period}</p>
                </div>
                <ul className="job-points">
                  {job.milestones.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {content.skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul className="tags">
                  {group.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="education">
            {content.education.map((ed) => (
              <article key={ed.degree} className="degree">
                <img src={ed.logo} alt="" className="job-logo" />
                <div>
                  <h3>{ed.degree}</h3>
                  <p className="muted">
                    {ed.school} · {ed.location} · {ed.period}
                  </p>
                  <p className="degree-note">{ed.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="extras">
            <div>
              <h3>Languages</h3>
              <ul className="plain-list">
                {content.languages.map((l) => (
                  <li key={l.name}>
                    <strong>{l.name}</strong>: {l.level}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Interests</h3>
              <ul className="plain-list">
                {content.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">{content.name}</p>
            <p className="muted small">
              <FiMapPin /> {content.location}
            </p>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${content.email}`}>
              <FiMail /> {content.email}
            </a>
            <a href={`tel:${content.phone.replace(/\s/g, "")}`}>
              <FiPhone /> {content.phone}
            </a>
            <a href={content.links.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={content.links.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default App;

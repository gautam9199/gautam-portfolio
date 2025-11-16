import React, { useState } from "react";
import content from "./content";
import techIcons from "./techIcons";
import "./index.css";
import { FiMail, FiGithub, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" }
];

function App() {
  const [mode, setMode] = useState("dark"); // "dark" | "light"

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app mode-${mode}`}>
      <header className="header">
        <div className="brand">
          <div>
            <h1 className="name">{content.name}</h1>
            <p className="role">{content.role}</p>
          </div>
        </div>

        <nav className="nav">
          {sections.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => handleNavClick(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleMode}
            aria-label="Toggle color mode"
          >
            {mode === "dark" ? (
              <FiSun className="theme-toggle-icon" />
            ) : (
              <FiMoon className="theme-toggle-icon" />
            )}
          </button>
        </div>
      </header>

      <main className="main">
        {/* CV-style hero with photo + summary */}
        <section className="hero">
          <div className="hero-left">
            <div className="profile-card">
              <div className="profile-photo-wrapper">
                {content.profileImage && (
                  <img
                    src={content.profileImage}
                    alt={content.name}
                    className="profile-photo"
                  />
                )}
              </div>

              <div className="profile-main">
                <h1 className="profile-name">{content.name}</h1>
                <p className="profile-role">{content.role}</p>
              </div>

              <div className="profile-contact">
                <div className="profile-contact-col">
                  <span className="profile-label">Location</span>
                  <span className="profile-value">{content.location}</span>
                </div>
                <div className="profile-contact-col">
                  <span className="profile-label">Email</span>
                  <a
                    href={`mailto:${content.email}`}
                    className="profile-value link"
                  >
                    {content.email}
                  </a>
                </div>
                <div className="profile-contact-col">
                  <span className="profile-label">Phone</span>
                  <a
                    href={`tel:${content.phone}`}
                    className="profile-value link"
                  >
                    {content.phone}
                  </a>
                </div>
                <div className="profile-contact-col">
                  <span className="profile-label">LinkedIn</span>
                  <a
                    href={content.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-value link"
                  >
                    /in/gautam-parmar
                  </a>
                </div>
                <div className="profile-contact-col">
                  <span className="profile-label">GitHub</span>
                  <a
                    href={content.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-value link"
                  >
                    github.com/gautam9199
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <p className="hero-kicker">
              Software Engineer · Java · React · Microservices
            </p>
            <h2 className="hero-title">Professional Summary</h2>
            <p className="hero-text">
              {content.summary.trim()}
            </p>
            <div className="hero-actions">
              <a
                href={content.links.github}
                className="btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="timeline">
            <div className="timeline-line" />
            {content.experience.map((item, idx) => (
              <article key={idx} className="timeline-item">
                <div className="timeline-node">
                  <div className="timeline-dot" />
                  <span className="timeline-index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-block">
                      <div className="logo-wrapper">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="logo-img"
                          />
                        )}
                      </div>
                      <div>
                        <h3>{item.role}</h3>
                        <p className="timeline-company">
                          {item.company} · {item.location}
                        </p>
                      </div>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <ul className="timeline-list">
                    {item.milestones.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>

                  {item.techStack && item.techStack.length > 0 && (
                    <div className="timeline-tech">
                      {item.techStack.map((key, i) => {
                        const Icon = techIcons[key] || techIcons._default;
                        return (
                          <span key={i} className="tech-pill">
                            <Icon className="tech-pill-icon" />
                            <span className="tech-pill-label">{key}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="skills-grid">
            {content.skills.map((group, idx) => (
              <div key={idx} className="card card--skills">
                <h3>{group.category}</h3>
                <ul className="skills-pill-list">
                  {group.technologies.map((tech, i) => {
                    const Icon = techIcons[tech.icon] || techIcons._default;
                    return (
                      <li key={i} className="skill-pill">
                        <Icon className="skill-pill-icon" />
                        <span>{tech.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="edu-list">
            {content.education.map((ed, idx) => (
              <article key={idx} className="edu-item">
                <div className="edu-header">
                  <div className="logo-wrapper edu-logo">
                    {ed.logo && (
                      <img
                        src={ed.logo}
                        alt={ed.school}
                        className="logo-img"
                      />
                    )}
                  </div>
                  <div>
                    <h3>{ed.degree}</h3>
                    <p className="edu-school">
                      {ed.school} · {ed.location}
                    </p>
                    <p className="edu-period">{ed.period}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ACHIEVEMENTS & OTHER */}
        <Section id="achievements" title="Achievements & Other">
          <div className="two-column">
            <div>
              <h3>Achievements</h3>
              <ul className="body-list">
                {content.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul className="body-list">
                {content.languages.map((lang, idx) => (
                  <li key={idx}>
                    <strong>{lang.name}</strong> — {lang.level}
                  </li>
                ))}
              </ul>

              <h3>Interests</h3>
              <ul className="pill-list">
                {content.interests.map((i, idx) => (
                  <li key={idx} className="pill">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER WITH PLATFORM ICONS ONLY */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} {content.name}</p>
          <div className="footer-links">
            <a
              href={`mailto:${content.email}`}
              aria-label="Email"
              className="footer-icon-link"
            >
              <FiMail className="footer-icon" />
            </a>
            <a
              href={content.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-link"
            >
              <FiLinkedin className="footer-icon" />
            </a>
            <a
              href={content.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-icon-link"
            >
              <FiGithub className="footer-icon" />
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
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-divider" />
      </div>
      {children}
    </section>
  );
}

export default App;

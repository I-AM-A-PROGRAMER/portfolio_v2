import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { getGitHubStats } from '@/lib/github';
import { getLeetCodeStats } from '@/lib/leetcode';

export default async function HomePage() {
  const { identity, flagshipProjects, skills, experience } = portfolio;
  const [projectA, projectB, projectC] = flagshipProjects;
  const [gitHubStats, leetcodeStats] = await Promise.all([
    getGitHubStats('I-AM-A-PROGRAMER'),
    getLeetCodeStats(identity.alias || 'RiyoSup'),
  ]);

  return (
    <div>
      {/* 1. Hero Component (DESIGN.md §7) */}
      <section aria-labelledby="hero-heading" className="hero-container">
        <span className="tech-label font-mono">SYS.ENG // PORTFOLIO</span>
        <h1 id="hero-heading" className="hero-name">
          {identity.name.toUpperCase()}
        </h1>
        <p className="hero-positioning">{identity.positioning}</p>
        <div className="hero-actions">
          <Link href="/projects" className="button-link button-primary">
            View Projects →
          </Link>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="button-link"
          >
            GitHub ↗
          </a>
        </div>
        <div className="hero-meta font-mono">
          <span>{identity.role}</span>
          <span>{identity.location}</span>
          <span>{identity.alias}</span>
        </div>
      </section>

      <hr />

      {/* 2. 12-Column Asymmetric Editorial Grid for Featured Work (DESIGN.md §6) */}
      <section aria-labelledby="featured-work-heading">
        <div className="section-header">
          <h2 id="featured-work-heading">Featured Work</h2>
          <Link href="/projects" className="font-mono stack-tag">
            View All Projects ({flagshipProjects.length}) →
          </Link>
        </div>

        <div className="grid-12">
          {/* Project A: 8 Columns (Strongest flagship: KIIT Timetable) */}
          {projectA && (
            <article className="col-8 project-card project-card-primary">
              <div>
                <span className="project-badge font-mono">FLAGSHIP 01 // CORE SYSTEM</span>
                <h3>
                  <Link href={'/projects/' + projectA.slug}>{projectA.name}</Link>
                </h3>
                <p className="project-outcome">
                  <strong>Outcome:</strong> {projectA.outcome}
                </p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {projectA.overview}
                </p>
                <div className="project-meta-row">
                  <span className="tech-label font-mono" style={{ margin: 0 }}>Stack:</span>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {projectA.stack.map((item) => (
                      <span key={item} className="skill-tag-pill font-mono">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-links font-mono">
                <a href={projectA.github} target="_blank" rel="noreferrer">GitHub Repo ↗</a>
                {projectA.liveUrl && (
                  <a href={projectA.liveUrl} target="_blank" rel="noreferrer">Live App ↗</a>
                )}
                <Link href={'/projects/' + projectA.slug} style={{ marginLeft: 'auto' }}>
                  Read Case Study →
                </Link>
              </div>
            </article>
          )}

          {/* Project B: 4 Columns (Villageroll Trade Predictor) */}
          {projectB && (
            <article className="col-4 project-card">
              <div>
                <span className="project-badge font-mono" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--text-primary)' }}>
                  FLAGSHIP 02 // ALGORITHMS
                </span>
                <h3>
                  <Link href={'/projects/' + projectB.slug}>{projectB.name}</Link>
                </h3>
                <p className="project-outcome">
                  <strong>Outcome:</strong> {projectB.outcome}
                </p>
                <div className="project-meta-row" style={{ marginTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {projectB.stack.map((item) => (
                      <span key={item} className="skill-tag-pill font-mono">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-links font-mono">
                <a href={projectB.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                {projectB.liveUrl && (
                  <a href={projectB.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>
                )}
                <Link href={'/projects/' + projectB.slug} style={{ marginLeft: 'auto' }}>
                  Case Study →
                </Link>
              </div>
            </article>
          )}

          {/* Project C: 12 Columns Full-Width (Network Protocol Suite) */}
          {projectC && (
            <article className="col-12 project-card project-card-full">
              <div>
                <span className="project-badge font-mono">FLAGSHIP 03 // NETWORKING & RESILIENCE</span>
                <h3>
                  <Link href={'/projects/' + projectC.slug}>{projectC.name}</Link>
                </h3>
                <p className="project-outcome">
                  <strong>Outcome:</strong> {projectC.outcome}
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  {projectC.overview}
                </p>
                <div className="project-links font-mono" style={{ borderTop: 'none', padding: 0 }}>
                  <a href={projectC.github} target="_blank" rel="noreferrer">GitHub Repository ↗</a>
                  <Link href={'/projects/' + projectC.slug}>Read Case Study →</Link>
                </div>
              </div>

              <div>
                <strong className="tech-label font-mono">Engineering Decisions & Architecture:</strong>
                <ul style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  {projectC.engineeringDecisions.map((decision, idx) => (
                    <li key={idx} style={{ fontSize: 'var(--font-size-mono)' }}>{decision}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {projectC.stack.map((item) => (
                    <span key={item} className="skill-tag-pill font-mono">{item}</span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <hr />

      {/* 3. Engineering Activity Preview Section (Phase 4 Live Integration) */}
      <section aria-labelledby="activity-preview-heading">
        <div className="section-header">
          <h2 id="activity-preview-heading">Engineering Activity</h2>
          <Link href="/activity" className="font-mono stack-tag">
            Full Dashboard & Heatmap →
          </Link>
        </div>
        <div className="activity-preview-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <span className="tech-label font-mono">GITHUB CADENCE</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                {gitHubStats.totalContributions} Contributions in the last year
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <span className="tech-label font-mono" style={{ margin: 0 }}>PUBLIC REPOS</span>
                <p className="font-mono" style={{ fontWeight: 600, margin: 0 }}>{gitHubStats.publicRepos}</p>
              </div>
              <div>
                <span className="tech-label font-mono" style={{ margin: 0 }}>CURRENT STREAK</span>
                <p className="font-mono" style={{ fontWeight: 600, margin: 0, color: 'var(--accent)' }}>{gitHubStats.streak} days</p>
              </div>
              <div>
                <span className="tech-label font-mono" style={{ margin: 0, color: 'var(--text-muted)' }}>LEETCODE SOLVED</span>
                <p className="font-mono" style={{ fontWeight: 600, margin: 0, color: 'var(--text-muted)' }}>
                  {leetcodeStats.totalSolved} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>({leetcodeStats.easySolved}E / {leetcodeStats.mediumSolved}M / {leetcodeStats.hardSolved}H)</span>
                </p>
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Live activity synchronization connected to <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">{identity.github}</a>.
          </p>

          <Link href="/activity" className="button-link font-mono" style={{ fontSize: '0.85rem' }}>
            View Complete 52-Week Contribution Matrix →
          </Link>
        </div>
      </section>

      <hr />

      {/* 4. Experience Timeline (Differentiated from cards) */}
      <section aria-labelledby="experience-heading">
        <div className="section-header">
          <h2 id="experience-heading">Experience & Milestones</h2>
          <Link href="/experience" className="font-mono stack-tag">
            Full Timeline →
          </Link>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h4>{exp.role} — <span style={{ color: 'var(--accent)' }}>{exp.organization}</span></h4>
              <p className="font-mono stack-tag"><small>{exp.period} · {exp.location}</small></p>
              <p style={{ marginTop: '0.5rem' }}>{exp.description}</p>
              <ul>
                {exp.achievements.map((item, aIdx) => (
                  <li key={aIdx} style={{ fontSize: 'var(--font-size-mono)' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* 5. Technologies & Stack Cluster (Inline tagged, no percentage bars) */}
      <section aria-labelledby="skills-heading">
        <div className="section-header">
          <h2 id="skills-heading">Technical Domains</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <span className="tech-label font-mono">{category}</span>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag-pill font-mono">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* 6. Contact CTA */}
      <section aria-labelledby="contact-heading">
        <div className="section-header">
          <h2 id="contact-heading">Direct Contact</h2>
        </div>
        <p style={{ marginBottom: '1.5rem' }}>
          Available for systems engineering roles, backend architecture, and technical collaboration.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={'mailto:' + identity.email} className="button-link button-primary font-mono">
            {identity.email}
          </a>
          <a href={identity.github} target="_blank" rel="noreferrer" className="button-link font-mono">
            GitHub ↗
          </a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="button-link font-mono">
            LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}

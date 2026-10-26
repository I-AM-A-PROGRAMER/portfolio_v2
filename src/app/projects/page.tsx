import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Projects — ' + portfolio.identity.name,
  description: 'Flagship engineering projects, open source tools, and system architectures built by ' + portfolio.identity.name,
};

export default function ProjectsPage() {
  const { flagshipProjects } = portfolio;

  return (
    <div>
      <div className="section-header">
        <div>
          <span className="tech-label font-mono">CODEBASE & SYSTEMS</span>
          <h1>Engineered Projects</h1>
          <p>
            Verifiable systems architectures, deterministic tooling, and production utilities with source code.
          </p>
        </div>
      </div>

      <div className="grid-12" style={{ marginTop: '2.5rem' }}>
        {flagshipProjects.map((project, idx) => {
          const isPrimary = idx === 0;
          const colSpan = isPrimary ? 'col-12' : 'col-6';

          return (
            <article
              key={project.slug}
              className={`${colSpan} project-card ${isPrimary ? 'project-card-primary' : ''}`}
            >
              <div>
                <span className="project-badge font-mono">
                  {`PROJECT 0${idx + 1} // ${project.stack[0]?.toUpperCase() || 'SYSTEM'}`}
                </span>
                <h2>
                  <Link href={'/projects/' + project.slug}>{project.name}</Link>
                </h2>
                <p className="project-outcome">
                  <strong>Outcome:</strong> {project.outcome}
                </p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {project.overview}
                </p>
                <div className="project-meta-row">
                  <span className="tech-label font-mono" style={{ margin: 0 }}>Stack:</span>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {project.stack.map((item) => (
                      <span key={item} className="skill-tag-pill font-mono">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-links font-mono">
                <a href={project.github} target="_blank" rel="noreferrer">Source Repo ↗</a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">Live App ↗</a>
                )}
                <Link href={'/projects/' + project.slug} style={{ marginLeft: 'auto' }}>
                  Full Case Study →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

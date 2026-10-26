import { notFound } from 'next/navigation';
import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.flagshipProjects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const project = portfolio.flagshipProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <p style={{ marginBottom: '1.5rem' }}>
        <Link href="/projects" className="button-link font-mono" style={{ padding: '0.4rem 0.8rem' }}>
          ← All Projects
        </Link>
      </p>

      <div className="case-study-grid">
        {/* Sticky Sidebar: Metadata & Tech Specs */}
        <aside className="case-study-sidebar">
          <span className="tech-label font-mono">SPECIFICATION</span>
          <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.15rem' }}>{project.name}</h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <span className="tech-label font-mono">OWNERSHIP</span>
            <p className="font-mono stack-tag" style={{ fontSize: '0.85rem' }}>{project.role}</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <span className="tech-label font-mono">TECHNOLOGY STACK</span>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
              {project.stack.map((t) => (
                <span key={t} className="skill-tag-pill font-mono" style={{ fontSize: '0.75rem' }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <span className="tech-label font-mono">RESOURCES</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <a href={project.github} target="_blank" rel="noreferrer" className="button-link font-mono" style={{ fontSize: '0.85rem' }}>
                GitHub Repository ↗
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-link font-mono button-primary" style={{ fontSize: '0.85rem' }}>
                  Live Deployment ↗
                </a>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <article className="case-study-content">
          <header style={{ marginBottom: '2.5rem' }}>
            <span className="project-badge font-mono">ARCHITECTURAL CASE STUDY</span>
            <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem' }}>{project.name}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              <strong>Outcome:</strong> {project.outcome}
            </p>
          </header>

          <section>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          <section>
            <h2>Problem Statement</h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <h2>Engineered Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section>
            <h2>Architecture & Pipeline</h2>
            <p>{project.architecture}</p>
          </section>

          <section>
            <h2>Engineering Decisions & Tradeoffs</h2>
            <ul>
              {project.engineeringDecisions.map((decision, idx) => (
                <li key={idx}>{decision}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Challenges Faced</h2>
            <ul>
              {project.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Known Limitations</h2>
            <p>{project.limitations}</p>
          </section>

          <section>
            <h2>What I Would Improve</h2>
            <p>{project.whatToImprove}</p>
          </section>
        </article>
      </div>
    </div>
  );
}

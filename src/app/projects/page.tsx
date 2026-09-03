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
      <p className="tech-label font-mono">Archive & Flagships</p>
      <h1>Projects</h1>
      <p>Technical projects with verifiable source code and deployed implementations.</p>

      <div style={{ marginTop: '2.5rem' }}>
        {flagshipProjects.map((project) => (
          <article key={project.slug} style={{ marginBottom: '3rem' }}>
            <h2>
              <Link href={'/projects/' + project.slug}>{project.name}</Link>
            </h2>
            <p><strong>Outcome:</strong> {project.outcome}</p>
            <p><small className="font-mono stack-tag">Role: {project.role}</small></p>
            <p>
              <strong className="tech-label font-mono">Stack: </strong>
              <span className="font-mono stack-tag">{project.stack.join(' · ')}</span>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <a href={project.github} target="_blank" rel="noreferrer" className="font-mono">GitHub ↗</a>
              {project.liveUrl && (
                <> · <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-mono">Live Demo ↗</a></>
              )}
              {' '}· <Link href={'/projects/' + project.slug}>Technical Case Study →</Link>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

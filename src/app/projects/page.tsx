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
      <h1>Projects</h1>
      <p>Technical projects with verifiable source code and deployed implementations.</p>

      <div>
        {flagshipProjects.map((project) => (
          <article key={project.slug}>
            <h2>
              <Link href={'/projects/' + project.slug}>{project.name}</Link>
            </h2>
            <p><strong>Outcome:</strong> {project.outcome}</p>
            <p><small>Role: {project.role}</small></p>
            <p><strong>Stack:</strong> {project.stack.join(' · ')}</p>
            <p>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              {project.liveUrl && (
                <> · <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo ↗</a></>
              )}
              {' '}· <Link href={'/projects/' + project.slug}>Technical Case Study →</Link>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

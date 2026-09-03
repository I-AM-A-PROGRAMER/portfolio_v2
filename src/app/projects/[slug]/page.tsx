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
    <article>
      <header>
        <p><Link href="/projects" className="font-mono">← Back to Projects</Link></p>
        <p className="tech-label font-mono" style={{ marginTop: '1.5rem' }}>Case Study</p>
        <h1>{project.name}</h1>
        <p><strong>{project.outcome}</strong></p>
        <p className="font-mono stack-tag"><small>Ownership: {project.role}</small></p>
        <p style={{ marginTop: '1rem' }}>
          <a href={project.github} target="_blank" rel="noreferrer" className="font-mono">View Source on GitHub ↗</a>
          {project.liveUrl && (
            <> · <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-mono">Open Live Deployment ↗</a></>
          )}
        </p>
      </header>

      <hr />

      <section>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section>
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>{project.solution}</p>
      </section>

      <section>
        <h2>Architecture</h2>
        <p>{project.architecture}</p>
      </section>

      <section>
        <h2>Engineering Decisions</h2>
        <ul>
          {project.engineeringDecisions.map((decision, idx) => (
            <li key={idx}>{decision}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Challenges & Tradeoffs</h2>
        <ul>
          {project.challenges.map((challenge, idx) => (
            <li key={idx}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Limitations</h2>
        <p>{project.limitations}</p>
      </section>

      <section>
        <h2>What I Would Improve</h2>
        <p>{project.whatToImprove}</p>
      </section>

      <section>
        <h2>Technology Stack</h2>
        <p className="font-mono stack-tag">{project.stack.join(' · ')}</p>
      </section>

      <section>
        <h2>Repository Links</h2>
        <p>
          <a href={project.github} target="_blank" rel="noreferrer" className="font-mono">{project.github}</a>
        </p>
      </section>
    </article>
  );
}

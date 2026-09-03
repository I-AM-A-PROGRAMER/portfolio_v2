import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export default function HomePage() {
  const { identity, flagshipProjects, skills, experience } = portfolio;

  return (
    <div>
      <section aria-labelledby="hero-heading">
        <p>Software Engineer</p>
        <h1 id="hero-heading">{identity.name}</h1>
        <p>{identity.positioning}</p>
        <p>
          <Link href="/projects">View Projects</Link> ·{' '}
          <a href={identity.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </p>
        <p><small>{identity.location} · {identity.alias}</small></p>
      </section>

      <hr />

      <section aria-labelledby="featured-projects-heading">
        <h2 id="featured-projects-heading">Featured Work</h2>
        <div>
          {flagshipProjects.map((project) => (
            <article key={project.slug}>
              <h3>
                <Link href={'/projects/' + project.slug}>{project.name}</Link>
              </h3>
              <p><strong>Outcome:</strong> {project.outcome}</p>
              <p><small>Role: {project.role}</small></p>
              <p>
                <strong>Stack:</strong> {project.stack.join(' · ')}
              </p>
              <p>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub Repository ↗</a>
                {project.liveUrl && (
                  <> · <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Deployment ↗</a></>
                )}
                {' '}· <Link href={'/projects/' + project.slug}>Read Case Study →</Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <hr />

      <section aria-labelledby="activity-preview-heading">
        <h2 id="activity-preview-heading">Engineering Activity</h2>
        <p>Live integrations with GitHub public repositories and LeetCode problem solving metrics.</p>
        <p><Link href="/activity">View Full Activity Dashboard →</Link></p>
      </section>

      <hr />

      <section aria-labelledby="experience-preview-heading">
        <h2 id="experience-preview-heading">Experience & Background</h2>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <h4>{exp.role} — {exp.organization}</h4>
            <p><small>{exp.period} · {exp.location}</small></p>
            <p>{exp.description}</p>
          </div>
        ))}
        <p><Link href="/experience">View Full Experience & Timeline →</Link></p>
      </section>

      <hr />

      <section aria-labelledby="tech-overview-heading">
        <h2 id="tech-overview-heading">Technologies & Tools</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <strong>{category}:</strong> {items.join(' · ')}
          </div>
        ))}
      </section>

      <hr />

      <section aria-labelledby="contact-cta-heading">
        <h2 id="contact-cta-heading">Contact</h2>
        <p>Available for engineering roles, technical collaboration, and systems projects.</p>
        <p>
          <a href={'mailto:' + identity.email}>{identity.email}</a> ·{' '}
          <a href={identity.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Resume — ' + portfolio.identity.name,
  description: 'Curriculum Vitae and professional qualifications of ' + portfolio.identity.name,
};

export default function ResumePage() {
  const { identity, skills, experience, flagshipProjects } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Curriculum Vitae</p>
      <h1>{identity.name}</h1>
      <p>
        <strong>{identity.role}</strong> · <span className="font-mono stack-tag">{identity.location}</span>
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        <a href={'mailto:' + identity.email} className="font-mono">{identity.email}</a> ·{' '}
        <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">{identity.github}</a> ·{' '}
        <a href={identity.linkedin} target="_blank" rel="noreferrer" className="font-mono">LinkedIn</a>
      </p>

      <p style={{ marginTop: '1.5rem' }}>
        <a href="/resume.pdf" download="supriyo-pramanik-resume.pdf" className="font-mono">↓ Download Resume PDF</a>
      </p>

      <hr />

      <section>
        <h2>Technical Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '0.75rem' }}>
            <strong className="tech-label font-mono">{category}: </strong>
            <span className="font-mono stack-tag">{items.join(', ')}</span>
          </div>
        ))}
      </section>

      <hr />

      <section>
        <h2>Projects</h2>
        {flagshipProjects.map((proj) => (
          <div key={proj.slug} style={{ marginBottom: '2rem' }}>
            <h3>{proj.name}</h3>
            <p>
              <strong className="tech-label font-mono">Stack: </strong>
              <span className="font-mono stack-tag">{proj.stack.join(', ')}</span>
            </p>
            <p style={{ marginTop: '0.5rem' }}>{proj.outcome}</p>
            <p><small className="font-mono">Source: <a href={proj.github} target="_blank" rel="noreferrer">{proj.github}</a></small></p>
          </div>
        ))}
      </section>

      <hr />

      <section>
        <h2>Experience & Education</h2>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: '2rem' }}>
            <h3>{exp.role} — {exp.organization}</h3>
            <p className="font-mono stack-tag"><small>{exp.period} · {exp.location}</small></p>
            <p style={{ marginTop: '0.5rem' }}>{exp.description}</p>
            <ul style={{ marginTop: '0.75rem' }}>
              {exp.achievements.map((item, aIdx) => (
                <li key={aIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

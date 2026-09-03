import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Resume — ' + portfolio.identity.name,
  description: 'Curriculum Vitae and professional qualifications of ' + portfolio.identity.name,
};

export default function ResumePage() {
  const { identity, skills, experience, flagshipProjects } = portfolio;

  return (
    <div>
      <h1>{identity.name}</h1>
      <p><strong>{identity.role}</strong> · {identity.location}</p>
      <p>
        <a href={'mailto:' + identity.email}>{identity.email}</a> ·{' '}
        <a href={identity.github} target="_blank" rel="noreferrer">{identity.github}</a> ·{' '}
        <a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>

      <p>
        <a href="/resume.pdf" download="supriyo-pramanik-resume.pdf">Download Resume PDF</a>
      </p>

      <hr />

      <section>
        <h2>Technical Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <strong>{category}:</strong> {items.join(', ')}
          </div>
        ))}
      </section>

      <hr />

      <section>
        <h2>Projects</h2>
        {flagshipProjects.map((proj) => (
          <div key={proj.slug}>
            <h3>{proj.name}</h3>
            <p><strong>Stack:</strong> {proj.stack.join(', ')}</p>
            <p>{proj.outcome}</p>
            <p><small>Source: <a href={proj.github} target="_blank" rel="noreferrer">{proj.github}</a></small></p>
          </div>
        ))}
      </section>

      <hr />

      <section>
        <h2>Experience & Education</h2>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <h3>{exp.role} — {exp.organization}</h3>
            <p><small>{exp.period} · {exp.location}</small></p>
            <p>{exp.description}</p>
            <ul>
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

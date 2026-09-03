import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Experience — ' + portfolio.identity.name,
  description: 'Work history, academic background, and technical milestones for ' + portfolio.identity.name,
};

export default function ExperiencePage() {
  const { experience } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Milestones & History</p>
      <h1>Technical Experience</h1>
      <p>Academic milestones, engineering projects, and open source development history.</p>

      <div style={{ marginTop: '2.5rem' }}>
        {experience.map((exp, idx) => (
          <article key={idx} style={{ marginBottom: '2.5rem' }}>
            <h2>{exp.role}</h2>
            <p>
              <strong>{exp.organization}</strong> ·{' '}
              <small className="font-mono stack-tag">{exp.period} · {exp.location}</small>
            </p>
            <p style={{ marginTop: '0.75rem' }}>{exp.description}</p>
            <h3 style={{ fontSize: '1rem', marginTop: '1rem' }}>Key Contributions</h3>
            <ul>
              {exp.achievements.map((item, aIdx) => (
                <li key={aIdx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

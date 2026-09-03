import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Experience — ' + portfolio.identity.name,
  description: 'Work history, academic background, and technical milestones for ' + portfolio.identity.name,
};

export default function ExperiencePage() {
  const { experience } = portfolio;

  return (
    <div>
      <h1>Technical Experience</h1>
      <p>Academic milestones, engineering projects, and open source development history.</p>

      <div>
        {experience.map((exp, idx) => (
          <article key={idx}>
            <h2>{exp.role}</h2>
            <p><strong>{exp.organization}</strong> · <small>{exp.period} · {exp.location}</small></p>
            <p>{exp.description}</p>
            <h3>Key Contributions</h3>
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

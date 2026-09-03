import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'About — ' + portfolio.identity.name,
  description: 'Background, technical philosophy, and education of ' + portfolio.identity.name,
};

export default function AboutPage() {
  const { identity, skills } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Background & Systems</p>
      <h1>About {identity.name}</h1>
      <p className="font-mono stack-tag"><small>{identity.alias} · {identity.location}</small></p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Background</h2>
        <p>{identity.summary}</p>
        <p>
          Currently pursuing Computer Science & Engineering at KIIT University, concentrating on computer systems, network protocols, algorithmic efficiency, and relational data architecture.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Engineering Philosophy</h2>
        <ul>
          <li><strong>Proof over claims:</strong> Working code, reproducible builds, and measurable latency reductions define technical quality.</li>
          <li><strong>Deterministic outcomes:</strong> Systems should be designed around predictable bounds and explicit error handling rather than fragile assumptions.</li>
          <li><strong>Pragmatic tooling:</strong> Choose the simplest architecture that solves the problem without unnecessary operational overhead.</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Technical Stack</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '0.75rem' }}>
            <strong className="tech-label font-mono">{category}: </strong>
            <span className="font-mono stack-tag">{items.join(' · ')}</span>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Profiles</h2>
        <p>
          <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">GitHub</a> ·{' '}
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="font-mono">LinkedIn</a> ·{' '}
          <Link href="/resume" className="font-mono">Resume</Link>
        </p>
      </section>
    </div>
  );
}

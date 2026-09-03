import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Contact — ' + portfolio.identity.name,
  description: 'Direct contact methods and profile links for ' + portfolio.identity.name,
};

export default function ContactPage() {
  const { identity } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Direct Communication</p>
      <h1>Contact</h1>
      <p>Direct communication channels for engineering roles, project collaboration, or technical discussions.</p>

      <ul style={{ marginTop: '2rem', listStyle: 'none', marginLeft: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong className="tech-label font-mono">Email: </strong>
          <a href={'mailto:' + identity.email} className="font-mono">{identity.email}</a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong className="tech-label font-mono">GitHub: </strong>
          <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">{identity.github}</a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong className="tech-label font-mono">LinkedIn: </strong>
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="font-mono">{identity.linkedin}</a>
        </li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        <small className="font-mono stack-tag">Direct links only; no unverified web forms.</small>
      </p>
    </div>
  );
}

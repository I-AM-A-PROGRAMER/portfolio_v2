import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Contact — ' + portfolio.identity.name,
  description: 'Direct contact methods and profile links for ' + portfolio.identity.name,
};

export default function ContactPage() {
  const { identity } = portfolio;

  return (
    <div>
      <h1>Contact</h1>
      <p>Direct communication channels for engineering roles, project collaboration, or technical discussions.</p>

      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href={'mailto:' + identity.email}>{identity.email}</a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href={identity.github} target="_blank" rel="noreferrer">{identity.github}</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href={identity.linkedin} target="_blank" rel="noreferrer">{identity.linkedin}</a>
        </li>
      </ul>

      <p><small>No contact form without a verified backend; all links open direct communication.</small></p>
    </div>
  );
}

import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Engineering Activity — ' + portfolio.identity.name,
  description: 'Integrated developer activity dashboard, GitHub contribution metrics, and LeetCode problem solving stats for ' + portfolio.identity.name,
};

export default function ActivityPage() {
  const { identity } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Metrics & Integrations</p>
      <h1>Engineering Activity</h1>
      <p>Verifiable activity metrics across open source development and algorithmic practice.</p>

      <section aria-labelledby="github-activity-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="github-activity-heading">GitHub Activity</h2>
        <p>
          Primary Profile: <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">{identity.github}</a>
        </p>
        <div style={{ marginTop: '1rem' }}>
          <h3>Public Repositories & Contributions</h3>
          <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
            [Phase 4 Integration Target: Live GitHub GraphQL contribution graph, repository counts, language distribution, and commit history]
          </p>
          <ul>
            <li>Profile & Repositories: <a href={identity.github} target="_blank" rel="noreferrer" className="font-mono">github.com/I-AM-A-PROGRAMER</a></li>
          </ul>
        </div>
      </section>

      <hr />

      <section aria-labelledby="leetcode-activity-heading">
        <h2 id="leetcode-activity-heading">LeetCode Consistency & Practice</h2>
        <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
          [Phase 5 Integration Target: Live LeetCode problem breakdown (Easy / Medium / Hard), active streak, and submission frequency]
        </p>
        <p>
          <small>Note: LeetCode metrics provide supporting evidence of problem-solving practice and remain subordinate to project source code.</small>
        </p>
      </section>
    </div>
  );
}

import { portfolio } from '@/data/portfolio';
import { getGitHubStats, getGitHubRepositories } from '@/lib/github';
import { getLeetCodeStats } from '@/lib/leetcode';
import GitHubContributionGraph from '@/components/GitHubContributionGraph';
import GitHubRepoList from '@/components/GitHubRepoList';
import LeetCodeStatsCard from '@/components/LeetCodeStatsCard';

export const metadata = {
  title: 'Engineering Activity — ' + portfolio.identity.name,
  description: 'Integrated developer activity dashboard, GitHub contribution metrics, and engineering practice for ' + portfolio.identity.name,
};

export default async function ActivityPage() {
  const { identity } = portfolio;
  const [stats, repos, leetcodeStats] = await Promise.all([
    getGitHubStats('I-AM-A-PROGRAMER'),
    getGitHubRepositories('I-AM-A-PROGRAMER'),
    getLeetCodeStats(identity.alias || 'RiyoSup'),
  ]);

  return (
    <div>
      <div className="section-header">
        <div>
          <span className="tech-label font-mono">VERIFIABLE ACTIVITY</span>
          <h1>Engineering Activity</h1>
          <p>
            Verifiable metrics across open source development, system repositories, and algorithmic practice.
          </p>
        </div>
      </div>

      {/* GitHub Integration Section (DESIGN.md §13) */}
      <section aria-labelledby="github-activity-heading" style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 id="github-activity-heading" style={{ marginBottom: 0 }}>GitHub Activity</h2>
          <span className="font-mono stack-tag">
            Profile: <a href={identity.github} target="_blank" rel="noreferrer">{identity.github}</a>
          </span>
        </div>

        {/* Live Contribution Calendar Heatmap */}
        <GitHubContributionGraph stats={stats} />

        {/* Public Repositories List */}
        <GitHubRepoList repos={repos} />
      </section>

      <hr />

      {/* LeetCode Section (Kept subordinate and visually quieter per DESIGN.md §13 & RULES.md §5) */}
      <section aria-labelledby="leetcode-activity-heading">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 id="leetcode-activity-heading" style={{ marginBottom: 0 }}>LeetCode Practice</h2>
          <span className="font-mono stack-tag">
            Subordinate Proof · Daily Cache
          </span>
        </div>

        <LeetCodeStatsCard stats={leetcodeStats} />
      </section>
    </div>
  );
}

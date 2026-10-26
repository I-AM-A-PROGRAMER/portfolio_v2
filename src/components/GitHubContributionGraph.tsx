import React from 'react';
import { GitHubStats } from '@/lib/github';

interface Props {
  stats: GitHubStats;
}

const LEVEL_COLORS = [
  '#161B22', // Level 0: dark background
  '#0E4429', // Level 1
  '#006D32', // Level 2
  '#26A641', // Level 3
  '#39D353', // Level 4
];

export default function GitHubContributionGraph({ stats }: Props) {
  return (
    <div className="activity-preview-panel" style={{ marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <span className="tech-label font-mono">ANNUAL CONTRIBUTIONS</span>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
            {stats.totalContributions} contributions in the last year
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <span className="tech-label font-mono" style={{ margin: 0 }}>PUBLIC REPOS</span>
            <p className="font-mono" style={{ fontWeight: 600, fontSize: '1.1rem' }}>{stats.publicRepos}</p>
          </div>
          <div>
            <span className="tech-label font-mono" style={{ margin: 0 }}>CURRENT STREAK</span>
            <p className="font-mono" style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--accent)' }}>{stats.streak} days</p>
          </div>
        </div>
      </div>

      {/* Heatmap Grid Wrapper with horizontal scroll safety */}
      <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px' }}>
          {/* 7 rows for days of the week */}
          {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
            <div key={dayIndex} style={{ display: 'flex', gap: '3px' }}>
              {stats.weeks.map((week, wIndex) => {
                const day = week.days[dayIndex];
                if (!day) {
                  return <div key={wIndex} style={{ width: '10px', height: '10px' }} />;
                }
                const color = LEVEL_COLORS[day.level];
                return (
                  <div
                    key={wIndex}
                    title={`${day.date}: ${day.count} contributions`}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '2px',
                      backgroundColor: color,
                      border: day.level === 0 ? '1px solid #21262d' : 'none',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend & Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: 'var(--font-size-label)', color: 'var(--text-muted)' }}>
        <span className="font-mono">
          {stats.isFallback ? '● Cached sync active' : '● Live GraphQL sync verified'}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span className="font-mono">Less</span>
          {LEVEL_COLORS.map((c, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '2px',
                backgroundColor: c,
              }}
            />
          ))}
          <span className="font-mono">More</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { LeetCodeStats } from '@/lib/leetcode';

interface Props {
  stats: LeetCodeStats;
}

export default function LeetCodeStatsCard({ stats }: Props) {
  const {
    username,
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    acceptanceRate,
    ranking,
    isFallback,
  } = stats;

  return (
    <div
      className="activity-preview-panel"
      style={{
        marginTop: '1.25rem',
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-elevated)',
        opacity: 0.92,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.25rem',
        }}
      >
        <div>
          <span className="tech-label font-mono" style={{ color: 'var(--text-muted)' }}>
            LEETCODE PRACTICE // SUBORDINATE METRICS
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {totalSolved}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Problems Solved
            </span>
            {isFallback && (
              <span
                className="font-mono stack-tag"
                style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '0.1rem 0.4rem' }}
                title="Displaying verified last-known-good cached benchmark"
              >
                cached archive
              </span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <span className="tech-label font-mono" style={{ margin: 0, fontSize: '0.75rem' }}>
              ACCEPTANCE
            </span>
            <p className="font-mono" style={{ fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>
              {acceptanceRate.toFixed(1)}%
            </p>
          </div>
          {ranking > 0 && (
            <div>
              <span className="tech-label font-mono" style={{ margin: 0, fontSize: '0.75rem' }}>
                GLOBAL RANK
              </span>
              <p className="font-mono" style={{ fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>
                ~{ranking.toLocaleString()}
              </p>
            </div>
          )}
          <div>
            <span className="tech-label font-mono" style={{ margin: 0, fontSize: '0.75rem' }}>
              PROFILE
            </span>
            <p className="font-mono" style={{ margin: 0, fontSize: '0.9rem' }}>
              <a
                href={`https://leetcode.com/u/${username}/`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}
              >
                {username} ↗
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Breakdown - Subordinate, no glowing gaming bars, typographic tokens */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          padding: '0.9rem 1rem',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '6px',
        }}
      >
        <div>
          <span className="tech-label font-mono" style={{ color: '#00B8A3', margin: 0 }}>
            EASY
          </span>
          <p className="font-mono" style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0.2rem 0 0 0' }}>
            {easySolved}
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Foundational algorithms</span>
        </div>

        <div>
          <span className="tech-label font-mono" style={{ color: '#FFC01E', margin: 0 }}>
            MEDIUM
          </span>
          <p className="font-mono" style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0.2rem 0 0 0' }}>
            {mediumSolved}
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>System & data structures</span>
        </div>

        <div>
          <span className="tech-label font-mono" style={{ color: '#EF4743', margin: 0 }}>
            HARD
          </span>
          <p className="font-mono" style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0.2rem 0 0 0' }}>
            {hardSolved}
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Complex edge cases</span>
        </div>
      </div>

      <p style={{ marginTop: '0.85rem', marginBottom: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        Note: LeetCode metrics reflect algorithmic problem-solving practice and remain strictly subordinate to production project code.
      </p>
    </div>
  );
}

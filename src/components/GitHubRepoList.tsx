import React from 'react';
import { GitHubRepository } from '@/lib/github';

interface Props {
  repos: GitHubRepository[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  HTML: '#E34F26',
  CSS: '#563D7C',
  Code: '#8A8A8F',
};

export default function GitHubRepoList({ repos }: Props) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div className="section-header">
        <h3 style={{ fontSize: '1.25rem' }}>Active Repositories</h3>
        <span className="font-mono stack-tag">github.com/I-AM-A-PROGRAMER</span>
      </div>

      <div className="grid-12">
        {repos.map((repo) => {
          const langColor = LANG_COLORS[repo.language] || '#8A8A8F';

          return (
            <div
              key={repo.name}
              className="col-6"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.05rem' }}>
                    <a href={repo.url} target="_blank" rel="noreferrer" className="font-mono">
                      {repo.name} ↗
                    </a>
                  </h4>
                  <span className="font-mono stack-tag" style={{ fontSize: '0.75rem' }}>
                    {repo.updatedAt}
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  {repo.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontSize: 'var(--font-size-mono)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: langColor,
                    }}
                  />
                  <small style={{ color: 'var(--text-primary)' }}>{repo.language}</small>
                </span>

                {repo.stars > 0 && (
                  <span style={{ color: 'var(--text-muted)' }}>
                    ★ {repo.stars}
                  </span>
                )}
                {repo.forks > 0 && (
                  <span style={{ color: 'var(--text-muted)' }}>
                    ⑂ {repo.forks}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

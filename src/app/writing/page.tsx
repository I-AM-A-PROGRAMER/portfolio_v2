import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Technical Writing — ' + portfolio.identity.name,
  description: 'Engineering writeups, architectural deep-dives, and technical notes by ' + portfolio.identity.name,
};

export default function WritingPage() {
  const { writing } = portfolio;

  return (
    <div>
      <p className="tech-label font-mono">Articles & Notes</p>
      <h1>Technical Notes & Writeups</h1>
      <p>Analysis of systems decisions, algorithms, and performance tradeoffs.</p>

      <div style={{ marginTop: '2.5rem' }}>
        {writing.map((post) => (
          <article key={post.slug} style={{ marginBottom: '3rem' }}>
            <h2>{post.title}</h2>
            <p className="font-mono stack-tag" style={{ margin: '0.25rem 0 1rem' }}>
              <small>{post.date} · {post.readTime}</small>
            </p>
            <p><strong>Summary:</strong> {post.excerpt}</p>
            <p style={{ marginTop: '0.75rem' }}>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

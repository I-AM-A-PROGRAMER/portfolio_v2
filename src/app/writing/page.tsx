import { portfolio } from '@/data/portfolio';

export const metadata = {
  title: 'Technical Writing — ' + portfolio.identity.name,
  description: 'Engineering writeups, architectural deep-dives, and technical notes by ' + portfolio.identity.name,
};

export default function WritingPage() {
  const { writing } = portfolio;

  return (
    <div>
      <h1>Technical Notes & Writeups</h1>
      <p>Analysis of systems decisions, algorithms, and performance tradeoffs.</p>

      <div>
        {writing.map((post) => (
          <article key={post.slug}>
            <h2>{post.title}</h2>
            <p><small>{post.date} · {post.readTime}</small></p>
            <p>{post.excerpt}</p>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

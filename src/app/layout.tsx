import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { portfolio } from '@/data/portfolio';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: `${portfolio.identity.name} (${portfolio.identity.alias}) — ${portfolio.identity.role}`,
  description: portfolio.identity.positioning,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <nav aria-label="Main Navigation">
              <div className="nav-brand">
                <Link href="/" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {portfolio.identity.name}
                </Link>
                <span className="font-mono stack-tag">({portfolio.identity.alias})</span>
              </div>
              <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/activity">Activity</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/writing">Writing</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>

          <main id="main-content">
            {children}
          </main>

          <footer className="site-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ margin: 0 }}>
                {portfolio.identity.name} · <span className="font-mono">{portfolio.identity.role}</span>
              </p>
              <p style={{ margin: 0 }} className="font-mono">
                <a href={portfolio.identity.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
                <a href={portfolio.identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
                <a href={'mailto:' + portfolio.identity.email}>Email</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

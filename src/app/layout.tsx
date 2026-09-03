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
              <div>
                <strong>{portfolio.identity.name}</strong>{' '}
                <span className="font-mono stack-tag">({portfolio.identity.alias})</span>
              </div>
              <ul>
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
            <p>
              {portfolio.identity.name} —{' '}
              <a href={portfolio.identity.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
              <a href={portfolio.identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
              <a href={'mailto:' + portfolio.identity.email}>Email</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

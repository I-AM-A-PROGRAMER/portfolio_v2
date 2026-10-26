# Graph Report - pfp  (2026-10-26)

## Corpus Check
- 19 files · ~5,941 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 117 nodes · 145 edges · 16 communities (8 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dfa51f1c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- portfolio.ts
- page.tsx
- compilerOptions
- package.json
- devDependencies
- include
- layout.tsx
- next.config.mjs
- GitHubContributionGraph.tsx
- GitHubRepoList.tsx
- portfolio
- page.tsx
- page.tsx
- page.tsx
- page.tsx
- page.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `portfolio` - 11 edges
3. `getGitHubStats()` - 6 edges
4. `scripts` - 5 edges
5. `getLeetCodeStats()` - 5 edges
6. `include` - 5 edges
7. `ActivityPage()` - 4 edges
8. `lib` - 4 edges
9. `HomePage()` - 3 edges
10. `GitHubStats` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ActivityPage()` --calls--> `getGitHubRepositories()`  [EXTRACTED]
  src/app/activity/page.tsx → src/lib/github.ts
- `ActivityPage()` --calls--> `getGitHubStats()`  [EXTRACTED]
  src/app/activity/page.tsx → src/lib/github.ts
- `ActivityPage()` --calls--> `getLeetCodeStats()`  [EXTRACTED]
  src/app/activity/page.tsx → src/lib/leetcode.ts
- `HomePage()` --calls--> `getGitHubStats()`  [EXTRACTED]
  src/app/page.tsx → src/lib/github.ts
- `HomePage()` --calls--> `getLeetCodeStats()`  [EXTRACTED]
  src/app/page.tsx → src/lib/leetcode.ts

## Import Cycles
- None detected.

## Communities (16 total, 8 thin omitted)

### Community 1 - "page.tsx"
Cohesion: 0.19
Nodes (13): ActivityPage(), metadata, HomePage(), Props, ContributionDay, ContributionWeek, FALLBACK_REPOSITORIES, generateFallbackCalendar() (+5 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "package.json"
Cohesion: 0.12
Nodes (15): next, dependencies, next, react, react-dom, name, private, scripts (+7 more)

### Community 4 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 5 - "include"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 6 - "layout.tsx"
Cohesion: 0.40
Nodes (3): inter, jetbrainsMono, metadata

### Community 8 - "GitHubContributionGraph.tsx"
Cohesion: 0.50
Nodes (3): LEVEL_COLORS, Props, GitHubStats

### Community 9 - "GitHubRepoList.tsx"
Cohesion: 0.50
Nodes (3): LANG_COLORS, Props, GitHubRepository

## Knowledge Gaps
- **57 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `portfolio` connect `portfolio` to `portfolio.ts`, `page.tsx`, `layout.tsx`, `page.tsx`, `page.tsx`, `page.tsx`, `page.tsx`, `page.tsx`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
# Graph Report - .  (2026-09-03)

## Corpus Check
- Corpus is ~2,676 words - fits in a single context window. You may not need a graph.

## Summary
- 91 nodes · 97 edges · 18 communities (6 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Configuration
- Dev Dependencies & Linting
- Package Scripts & Metadata
- TSConfig References
- Core Dependencies
- Compiler Lib Targets
- Project Case Study Page
- About Page
- Activity Page
- Contact Page
- Experience Page
- Root Layout
- Home Page & Data
- Projects Listing
- Resume Page
- Writing Page
- Next.js Config
- Portfolio Data Types

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `portfolio` - 11 edges
3. `scripts` - 5 edges
4. `include` - 5 edges
5. `lib` - 4 edges
6. `next` - 2 edges
7. `react` - 2 edges
8. `react-dom` - 2 edges
9. `@types/node` - 2 edges
10. `@types/react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (18 total, 12 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 1 - "Dev Dependencies & Linting"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 2 - "Package Scripts & Metadata"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 3 - "TSConfig References"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 4 - "Core Dependencies"
Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

### Community 5 - "Compiler Lib Targets"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

## Knowledge Gaps
- **49 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Configuration` to `TSConfig References`, `Compiler Lib Targets`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Linting` to `Package Scripts & Metadata`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `portfolio` connect `Home Page & Data` to `Project Case Study Page`, `About Page`, `Activity Page`, `Contact Page`, `Experience Page`, `Root Layout`, `Projects Listing`, `Resume Page`, `Writing Page`, `Portfolio Data Types`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
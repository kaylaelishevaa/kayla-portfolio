# kaylaelishevasiwi.com

Personal portfolio for Kayla Elisheva Siwi — Computer Science student at Monash University Malaysia, software engineer at Coldwell Banker Indonesia.

Next.js 16 (App Router, RSC, Turbopack) · TypeScript strict · Tailwind v4 · Velite-compiled MDX · Vercel.

## Run

```bash
pnpm install
pnpm dev          # velite + next dev
pnpm build        # velite + next build
pnpm start        # production server (after build)
```

Other scripts: `pnpm lint`, `pnpm typecheck`, `pnpm format`, `pnpm content:watch`.

Pre-commit hook (husky + lint-staged) runs prettier + eslint --fix on staged files.

## Layout

```
src/
├── app/                    routes (RSC by default)
│   ├── layout.tsx          fonts, skip-link, nav, footer, analytics
│   ├── page.tsx            single-page composition
│   ├── projects/[slug]/    dynamic case-study route
│   ├── og/                 dynamic OG image (next/og)
│   ├── icon.tsx            K-monogram favicon
│   ├── apple-icon.tsx      apple touch icon
│   ├── sitemap.ts          /sitemap.xml
│   ├── robots.ts           /robots.txt
│   ├── not-found.tsx       custom 404
│   └── resume/             /resume → /resume.pdf
├── components/
│   ├── hero.tsx            asymmetric 7:5 hero, file-presence-aware photo card
│   ├── nav.tsx, footer.tsx
│   ├── reveal.tsx          IntersectionObserver fade-up
│   ├── section-header.tsx  shared h2 + hairline label
│   ├── sections/           about, work, path, projects, skills, contact
│   ├── diagrams/           hand-built engineering visuals
│   └── mdx-content.tsx     velite-compiled MDX renderer
├── data/projects.ts        project metadata (shared between cards + routes)
└── lib/                    cn util, site constants, hooks

content/case-studies/       MDX sources — front-matter + scaffolded body
velite.config.ts            schema for caseStudies collection
```

## Design tokens

Defined in `src/app/globals.css` under Tailwind v4's `@theme`. Single light theme (no dark mode); deep teal accent on warm paper. Typography: Source Serif 4 (display), IBM Plex Sans (body), JetBrains Mono (technical).

## Content

Case studies live as MDX in `content/case-studies/`. Editing an MDX file triggers `velite` regeneration (`pnpm content:watch` for live mode). Each study front-matter declares `diagram: architecture | pipeline` to mount the matching hand-built visual.

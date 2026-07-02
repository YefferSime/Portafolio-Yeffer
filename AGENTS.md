# AGENTS.md

Single-page portfolio (Next.js 16, App Router, React 19, TypeScript 5, Tailwind v4).

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint (next/core-web-vitals + typescript)
```

No tests. No CI. No `.env` files.

## Architecture

- Entry: `src/app/page.tsx` → `PortfolioShell` (`src/components/layout/portfolio-shell.tsx`).
- Single scrollable `<section className="center-scroll">` holds `TopNavbar` (sticky) + all 5 sections in a `max-w-5xl` column. Snap-scroll at `lg` breakpoints only.
- **Mobile:** `RightNavbar` rendered fixed at bottom (via `mobile` prop). `TopNavbar`'s nav/socials hidden below `md`.
- Both navbars scroll to sections by querying `.center-scroll`; desktop uses `container.scrollTo()`, mobile uses `target.scrollIntoView()`. Both use `useActiveSection` hook for `IntersectionObserver`-based highlighting.
- **⚠ Keep `items` array in `right-navbar.tsx` and `navLinks` array in `top-navbar.tsx` in sync** when adding/renaming sections.
- Particle background via `@tsparticles/react` + `@tsparticles/slim` (`ParticlesBg` component).

## Sections (`src/components/sections/`)

| id | File |
|----|------|
| `hero` | `hero-section.tsx` |
| `projects` | `projects-section.tsx` |
| `experience` | `experience-section.tsx` |
| `about` | `about-section.tsx` |
| `contact` | `contact-section.tsx` |

Each section must have `id` matching the nav entries above.

## Project Data

`src/data/projects.ts` is the single source of truth. Image paths follow:
- `public/image/apps/{project-id}/` (mobile apps)
- `public/image/webs/{project-id}/` (websites)
- All images are `.webp`.

## Tailwind v4 Quirks

- No `tailwind.config` file. Configured via `@import "tailwindcss"` in `src/app/globals.css`.
- PostCSS plugin: `@tailwindcss/postcss` (see `postcss.config.mjs`).

## Design

- `.liquid-glass` utility class (defined in `globals.css`) is the core visual motif: frosted glass with `backdrop-blur-xl`, gradient overlays via `::before`/`::after`.
- Hover/active pattern on interactive elements:
  ```
  hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]
  active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]
  ```

## Conventions

- `"use client"` required on any file using hooks, event handlers, or browser APIs.
- `@/` path alias maps to `src/`.
- `useTypewriter` hook (`src/hooks/useTypewriter.ts`) drives animated text cycling in `HeroSection`.
- `useInView` hook (`src/hooks/useInView.ts`) returns `ref`/`inView` scoped to `.center-scroll` for entrance animations.
- Static assets (CV PDF at `public/cv/YEFFER_SIME_CV.pdf`, images) served from `public/`.

## Additional Source

See `CLAUDE.md` in the repo root — originally written for Claude Code, overlaps significantly. Keep the two in sync.

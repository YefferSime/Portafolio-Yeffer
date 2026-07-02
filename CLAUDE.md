# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Stack

- **Next.js 16** with App Router, **React 19**, **TypeScript 5**
- **Tailwind CSS v4** (imported via `@import "tailwindcss"` in globals.css — no `tailwind.config` file)
- **react-icons** for icons, **@tsparticles/react + slim** for the particle background

## Layout Architecture

The entire site is a single page rendered by `PortfolioShell` (`src/components/layout/portfolio-shell.tsx`).

- A single scrollable `<section className="center-scroll">` holds `TopNavbar` (`sticky top-0`) followed by all sections in a `max-w-5xl` column. Snap-scroll (`lg:snap-y lg:snap-proximity`) only applies at `lg` breakpoints.
- **Mobile:** `RightNavbar` is additionally rendered fixed to the bottom of the viewport (`mobile` prop) as a bottom tab bar; `TopNavbar`'s own nav links/socials are hidden below `md`.

Both `TopNavbar` and `RightNavbar` scroll to a section by querying `.center-scroll` and either calling `container.scrollTo()` (desktop, `>= 1024px`) or `target.scrollIntoView()` (mobile) — see the shared `handleScroll`/`scrollTo` logic in each file. Both also call the `useActiveSection` hook (`src/hooks/useActiveSection.ts`) with the same list of section ids to highlight the current section via `IntersectionObserver`; keep the `items`/`navLinks` arrays in the two files in sync.

## Sections

Each section lives in `src/components/sections/` and must have an `id` matching the corresponding entry in `RightNavbar`'s `items` array:

| id | File |
|----|------|
| `hero` | `hero-section.tsx` |
| `projects` | `projects-section.tsx` |
| `experience` | `experience-section.tsx` |
| `about` | `about-section.tsx` |
| `contact` | `contact-section.tsx` |

## Project Data

All portfolio project content lives in `src/data/projects.ts` — this is the single source of truth. Each `Project` entry has: `id`, `title`, `description`, `bullets`, `technologies`, `images` (array of `{ src, label }`), and `links`.

Image paths follow the convention:
- Mobile apps: `public/image/apps/{project-id}/`
- Websites: `public/image/webs/{project-id}/`
- Use `.webp` format.

To add a new project, add an entry to the `projects` array in `src/data/projects.ts`. `ProjectsSection` renders them as a carousel via `ProjectCard` and `ProjectImageCarousel`.

## Design System

The `.liquid-glass` utility class (defined in `src/app/globals.css`) is the core visual motif — frosted glass with `backdrop-blur-xl`, subtle borders, and gradient overlays via `::before`/`::after` pseudo-elements. Apply it to cards, buttons, and containers to stay consistent with the design.

Interactive elements with `liquid-glass` follow this hover/active pattern:
```
hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]
active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]
```

## Key Conventions

- `"use client"` is required on any component that uses hooks, event handlers, or browser APIs (`PortfolioShell`, `TopNavbar`, `RightNavbar`, all sections).
- The `useTypewriter` hook (`src/hooks/useTypewriter.ts`) handles the animated text cycling in `HeroSection`.
- The `useInView` hook (`src/hooks/useInView.ts`) returns a `ref`/`inView` pair (scoped to `.center-scroll` via `IntersectionObserver`) for scroll-triggered entrance animations.
- Static assets (CV PDF, images) are served from `public/`.
- The path alias `@/` maps to `src/`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5174
npm run build    # Production build to /dist
npm run lint     # ESLint validation
npm run preview  # Preview production build locally
```

No test suite exists — verify changes by running the dev server and manually checking affected pages.

## Architecture

**Infinity Wave Design** is a React SPA portfolio site for a Scottish architecture/engineering firm. Built with Vite, React Router, and plain CSS. Deployed to Vercel.

### Routing

Four routes defined in `src/App.jsx`:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | `ProjectsPage` | Home: hero slideshow, services, project grid with filtering |
| `/projects/:id` | `ProjectDetailPage` | Single project detail with image gallery |
| `/about` | `AboutPage` | Company info, team, philosophy |
| `/contact` | `ContactPage` | Form via Formspree |

### Data

All content lives in `src/data/projects.js` — 10 project objects with fields: `id`, `title`, `location`, `year`, `category`, `type`, `featured`, `thumbnail`, `gallery[]`, `description`, `content` (HTML string).

**No backend, no database, no environment variables.** The Formspree endpoint (`https://formspree.io/f/xyznbqdj`) is hardcoded in `ContactPage.jsx`.

### CSS Conventions

Global design tokens are CSS custom properties defined in `src/index.css` (`--color-*`, `--spacing-*`, `--font-primary`). Each component has a co-located `.css` file. No CSS-in-JS or utility framework — write plain CSS matching existing patterns.

### SEO

The `useSEO` hook (`src/hooks/useSEO.js`) handles dynamic meta tags (title, description, OG, Twitter cards, canonical URL). Call it at the top of each page component when SEO matters.

Mobile breakpoint is 768px throughout.

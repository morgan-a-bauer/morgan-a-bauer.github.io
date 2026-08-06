# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This repository is in early scaffolding — no Next.js app has been generated yet (no `package.json`, `src/`, etc.). The guidelines below describe the intended architecture for this portfolio site and should be followed as the project is built out.

## Reference Docs

- **Aesthetics & UI Spec:** `./docs/portfolio_design_system.md` — the "Academic x Streetwear (Simplified)" design system: color tokens, typography, grid/layout rules, component styling (header, hero, project cards, research list), and interaction patterns. Consult this before making any styling or layout decision, and follow it exactly rather than improvising new colors, fonts, or effects (e.g. no drop shadows, no ambient graphics/icons, snappy `0.15s` transitions only).

## Tech Stack & Core Commands

- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS
- `npm run dev` — start local development server
- `npm run build` — build production bundle and check type errors
- `npm run lint` — run ESLint
- `npm run format` — format code with Prettier

## Architectural Patterns

- **Directory structure:**
  - `src/app/` — page routes and layouts
  - `src/components/ui/` — atomic structural UI elements (buttons, card wrappers)
  - `src/components/sections/` — major page sections (Hero, Projects, Research)
  - `src/data/` — typed JSON/TS files for project entries, publications, and experience
  - `src/lib/` — utility functions and helpers
- **Data driven:** keep content (project descriptions, tags, links) separate from UI code inside `src/data/`. Do not hardcode content inline inside components.
- **Component rules:** use functional TypeScript components with explicit interface props. Prefer Tailwind utility classes.

## Code Quality Constraints

- All interactive elements must have visible keyboard focus states (`focus-visible:ring-2`).
- Ensure proper semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- All images must use Next.js `<Image />` with explicit dimensions or fill properties.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

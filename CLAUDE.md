# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Reference Docs

- **Aesthetics & UI Spec:** `./docs/portfolio_design_system.md` — the "Academic x Streetwear (Simplified)" design system: color tokens, typography, grid/layout rules, component styling (header, hero, project cards, research list), and interaction patterns. Consult this before making any styling or layout decision, and follow it exactly rather than improvising new colors, fonts, or effects (e.g. no drop shadows, no ambient graphics/icons, snappy `0.15s` transitions only). The tokens from that spec are wired up as Tailwind theme colors in `src/app/globals.css` (`--color-cream`, `--color-surface`, `--color-ink`, `--color-charcoal`, `--color-ivy`, `--color-rust`, `--color-sand`) and font variables (`--font-display` = Oswald, `--font-body` = Inter, `--font-mono` = Fira Code) — use the Tailwind utilities (`bg-cream`, `text-rust`, `font-display`, etc.) rather than raw hex values or font names.

## Tech Stack & Core Commands

- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- `npm run dev` — start local development server
- `npm run build` — build production bundle and check type errors
- `npm run lint` — run ESLint
- `npm run format` — format code with Prettier (Tailwind class sorting via `prettier-plugin-tailwindcss` is automatic)
- No test runner is configured in this repo.

## Architectural Patterns

- **Routes (`src/app/`):** `/` (home, composed of section components), `/cv`, `/beyond-the-lab`, and `/gallery` (a dev-only photo viewer — it calls `notFound()` outside `NODE_ENV === "development"` and reads image files from `public/photography/` at request time via `node:fs`; that directory is gitignored except for `.gitkeep`, so photos are local-only and never deployed).
- **Sections vs. UI:**
  - `src/components/sections/` — one component per page section (`Header`, `Hero`, `About`, `Projects`, `Research`, `CV`, `BeyondTheLab`, `PhotoGallery`, `Footer`). Pages compose these directly; there's no shared page shell/layout component beyond `src/app/layout.tsx`, so each `page.tsx` repeats the `<Header>…<main>…</main><Footer />` structure.
  - `src/components/ui/` — small presentational primitives (`Card`, `Badge`, `CategoryTag`, `IconLink`, `icons.tsx`) consumed by section components. `Card` renders a stretched-link pattern (full-card `<a>` overlay with `z-10`) — follow that pattern for any other clickable card rather than wrapping content in an anchor.
- **Data driven:** all content (project entries, research/publications, CV history, social links, hobbies) lives in typed `src/data/*.ts` files (`projects.ts`, `research.ts`, `cv.ts`, `social.ts`, `life.ts`), each exporting an interface plus a typed const array/object. Section components import and map over this data — do not hardcode copy inside components. When adding a new content type, add a new interface + export in `src/data/`, not inline literals in the component.
- **Styling:** Tailwind utility classes only, using the theme tokens described above; `src/lib/utils.ts` exports a single `cn()` helper (plain `classes.filter(Boolean).join(" ")` — not `clsx`/`tailwind-merge`) for conditional class composition.
- **Path alias:** `@/*` maps to `src/*` (see `tsconfig.json`).
- **Fonts:** loaded once in `src/app/layout.tsx` via `next/font/google` (Oswald, Inter, Fira Code) as CSS variables applied to `<html>`; don't re-import fonts elsewhere.

## Code Quality Constraints

- All interactive elements must have visible keyboard focus states (`focus-visible:ring-2`, typically `focus-visible:ring-rust`).
- Ensure proper semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- All images must use Next.js `<Image />` with explicit dimensions or fill properties.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

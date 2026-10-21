# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Single-page personal portfolio (juliobermudez.dev) built with Astro 6 (static output), Tailwind CSS v4, and `astro-icon`. Requires Node ≥ 22.12.

## Commands

- `npm run dev` — dev server on `localhost:4321` (runs with `--host`, so it's reachable on the LAN)
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npx astro check` — type-check `.astro`/`.ts` files (`@astrojs/check` is installed)

There is no test suite or linter configured.

## Deployment

Pushing to `master` deploys to GitHub Pages via `.github/workflows/deploy.yml` (`withastro/action`). `CNAME` sets the custom domain. Everything in `public/` ships with the site, so keep large source files (e.g. video masters) out of it.

## Architecture

- `src/pages/index.astro` is the only route; it stacks the section components (`home`, `career`, `projects`, `tech`, `contact`) inside `src/layouts/Layout.astro`. Each section's `id` is the anchor target used by `nav.astro`.
- **Content lives in `src/data/*.json`**, not in components; components import it directly (there is no API or env config). Edit the JSON to change copy, projects, career entries, tech stack, or social links. `home.json`'s `intro` is rendered with `set:html`, and `<span class='font-bold'>` inside it gets accent styling from a global rule in `global.css`. Social entries with an empty or `#` url are hidden; `showInContact` controls the contact section.
- **Theming:** colors are CSS variables (`--color-background`, `--color-accent`, `--color-maintext`, `--color-subtext`) defined in `src/styles/global.css` under `@theme` and overridden per `[data-theme='default-dark' | 'default-light']`. Use the Tailwind tokens (`bg-accent`, `text-subtext`, …) rather than raw colors so both themes work. An inline script in `Layout.astro` applies the saved theme from `localStorage` before paint; `SITE_CONFIG.baseTheme` in `src/config.ts` is the theme-name prefix.
- **Animations:** two separate mechanisms.
  - `.reveal-content` (in `global.css`) is a CSS-only fade-in on page load, staggered with inline `animation-delay` — used in the hero.
  - `setupScrollReveal` in `src/utils/reveal.ts` is an IntersectionObserver that adds a `.reveal` class (with optional per-item/per-column stagger) as elements scroll into view. Each section component calls it from its own `<script>` and defines the hidden/`.reveal` states in its own `<style>`.
- Icons use Iconify names via `astro-icon` (`mdi:*`, `logos:*`, `skill-icons:*`, `devicon-plain:*`, `vscode-icons:*`); only these icon sets are installed.

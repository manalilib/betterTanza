# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Stack

React 19 + TypeScript + Vite, Tailwind CSS v4, React Router v7, i18next, react-markdown, Recharts. No test framework configured.

## Commands

```bash
npm run dev            # Start dev server (localhost:5173)
npm run build          # tsc -b && vite build
npm run lint           # ESLint (flat config, only *.ts/tsx)
npm run lint:fix       # Auto-fix ESLint issues
npm run format         # Prettier --write
npm run format:check   # Prettier --check (CI)
npm run dev:yaml       # convert-yaml (services.yaml → JSON) then dev
npm run setup          # Interactive setup for new installations
```

No test runner configured — there are no unit or integration tests.

Pre-commit hook runs `lint-staged` automatically (ESLint + Prettier on staged files).

## Critical Content System Rules

YAML and Markdown files are loaded at **build time via static imports** — dynamic `import()` is used for markdown, but YAML index files must be statically imported and registered:

- **Adding a new service category**: add to `src/data/services.yaml`, create `content/services/{slug}/index.yaml`, AND add a static import + entry to `categoryIndexMap` in [`src/data/yamlLoader.ts`](src/data/yamlLoader.ts). Skipping the last step silently returns empty pages.
- **Adding a new government category**: same pattern — register in `categoryIndexMap` in [`src/data/yamlLoader.ts`](src/data/yamlLoader.ts) (both services and gov categories share the same map).
- Markdown `icon` fields in `services.yaml` / `government.yaml` must be valid **Lucide React** icon names.

## Companion JSON Interpolation

A markdown file can have a sibling `.json` file (same slug). Tokens like `{MAYOR}` in markdown are replaced: JSON value → `VITE_<KEY>` env var → unchanged token. See [`src/lib/markdownLoader.ts`](src/lib/markdownLoader.ts).

## i18n

- Translations live in **`src/i18n/locales/{lang}.json`** (bundled at build time) — NOT `public/locales/`. The `i18next-http-backend` package is installed but unused; `public/locales/en/common.json` is a leftover.
- Locale JSON has a **nested namespace structure**: top-level key is the namespace (e.g. `"common"`, `"navbar"`), used as the i18next namespace argument.
- **`src/hooks/useTranslation.ts` wrapper does NOT support namespaces** — it calls `useI18nTranslation()` with no arguments. Use `useTranslation` from `react-i18next` directly when you need a specific namespace (e.g. `useTranslation('common')`).
- `LanguageType` in `src/types/index.ts` lists 12 Philippine languages; only `en` and `fil` have translation files.

## UI Primitives

Always use components from `src/components/ui/` (`Section`, `Heading`, `Text`, `Breadcrumbs`, `ScrollToTop`, `DisclaimerBar`, `ThemeSelector`) instead of raw HTML. For class merging use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).

## Tailwind

Custom colour palette: `primary` (blue `#0066eb`), `secondary` (orange), `accent` (gold), plus `success`, `warning`, `error`, `gray`. Use these semantic tokens, not raw Tailwind colours.

Animation utilities added: `.anim-fade-in-up`, `.anim-fade-in-left`, `.anim-fade-in-right`, `.anim-scale-in` — use these for scroll-reveal effects. Pair with `useInView` from `src/hooks/useInView.ts`.

## Routing (`src/App.tsx`)

```
/                                                        → Home
/services/:category                                      → Services listing
/services/:category/:documentSlug                        → Document (service)
/services/tourism/explore-tourist-spots                  → TouristSpots
/services/tourism/where-to-stay                          → WhereToStay
/government/:category                                    → Government listing
/government/:category/:documentSlug                      → Document (government)
/government/departments/officials                        → Officials
/government/transparency-documents/full-disclosure       → FullDisclosure
/government/transparency-documents/annual-budget         → AnnualBudget
/government/transparency-documents/saln                  → SALN
/government/transparency-documents/foi-releases          → FOIReleases
/government/transparency-documents/downloads             → Downloads
/government/reports-and-statistics/city-profile          → CityProfile (Recharts)
/government/reports-and-statistics/annual-report         → AnnualReport
/government/reports-and-statistics/infrastructure-projects → InfrastructureProjects
/development-projects                                    → DevelopmentProjects
/:lang/:documentSlug                                     → Document (legacy)
/:documentSlug                                           → Document (legacy)
```

**Route order matters**: specific routes (e.g. `/government/departments/officials`) must be declared **before** the generic `/government/:category/:documentSlug` catch-all in `App.tsx`.

## Navbar

Fixed navbar with `pt-[116px]` content offset. Contains three stacked bars:

1. `layout/InfoBar` — quick-access strip (FOI, permits, etc.)
2. Hotlines ticker bar (marquee on mobile, static on desktop)
3. Glassmorphism main bar (`bg-white/80 backdrop-blur-2xl`)

## Hero

Full-screen hero (`min-h-screen`, `-mt-[116px]` to overlap navbar). Blue gradient: `#001044 → #003087 → #0066eb`. Includes live service search autocomplete powered by `loadCategoryIndex`.

## Page Hero Pattern

All standalone pages (Officials, CityProfile, etc.) use the same hero pattern:

- Gradient: `linear-gradient(135deg, #001044 0%, #003087 50%, #0066eb 100%)`
- Grid texture: `opacity-[0.04]` background-image lines
- Bottom wave: `<svg viewBox="0 0 1440 40">` with `fill="#f9fafb"`
- Breadcrumb/label text: `text-blue-300`
- Body text: `text-blue-100`

## Code Style

Single quotes, 2-space indent, trailing commas (ES5), semicolons, 80-char line width, `arrowParens: "avoid"` (enforced by Prettier). TypeScript strict mode via `tsconfig.app.json`.

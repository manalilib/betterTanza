# betterTanza — Fresh Start Plan

## Overview

**Goal:** Build `betterTanza` from scratch on a clean `develop` branch, achieving
full visual and feature parity with `betterGeneraltrias`, while adapting all content,
colors, and data for the Municipality of Tanza, Cavite.

**Source of truth for design:** `betterGeneraltrias/`
**Target project:** `betterTanza/`
**Working branch:** `develop` (branched from `main`, NOT from `bootstrap`)
**Commit strategy:** One commit per subtask — no bulk commits.

**Color identity for Tanza (blue primary, not green):**

- Primary: `#0066eb` (blue)
- Hero gradient: `#001044 → #003087 → #0052e0`
- Secondary/Accent: gold `#f9a825`

---

## Architecture Quick Reference

For the Technical BA: each subtask below maps to a specific layer of the app.

```
src/
├── pages/          ← One file per URL (each subtask may add 1–6 pages)
├── components/
│   ├── layout/     ← Navbar, Footer (subtask 2, 5)
│   ├── sections/   ← Hero (subtask 3)
│   ├── home/       ← Homepage sections (subtask 4)
│   └── ui/         ← Tiny reusable atoms (subtask 6)
├── data/           ← YAML + navigation config (subtask 1, 11)
├── context/        ← Theme provider (subtask 4)
├── hooks/          ← useInView scroll animations (subtask 1)
└── i18n/           ← EN/FIL translation strings (subtask 11)

content/            ← All written content (markdown + YAML)
```

---

## Sub-Tasks

---

### 0 — Branch Setup

**Status:** `[x] complete` — branch `develop` exists

**Intent**
Create the clean `develop` branch from `main` so all subsequent work has a
verified, unmodified starting point. The `bootstrap` branch is left untouched.

**Expected Outcomes**

- `develop` branch exists, checked out, and pushed to remote.
- Branch is identical to `main` (no customization yet).

**Todo List**

1. `git checkout main && git pull` inside `betterTanza/`.
2. `git checkout -b develop`.
3. `git push -u origin develop`.

**Relevant Context**

- `main` branch is the upstream starter-kit clone — clean and unmodified.
- Do NOT merge from `bootstrap`.

---

### 1 — Foundation: Environment, Dependencies, CSS tokens, useInView hook

**Status:** `[x] done`

**Intent**
Set up the Tanza-specific environment variables, install the two extra packages
(`@vercel/analytics`, `react-websitecarbon-badge`), add the extra CSS animation
keyframes that GeneralTrias has, and add the `useInView` scroll-animation hook.
This is the foundation everything else depends on.

**Expected Outcomes**

- `.env.local` has all Tanza-specific values (name, contacts, social, SEO).
- `package.json` includes `@vercel/analytics` and `react-websitecarbon-badge`.
- `src/index.css` has: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn` keyframes
  - utility classes + `prefers-reduced-motion` guard. Existing blue primary tokens
    (`--color-primary-500: #0066eb` etc.) must NOT be changed.
- `src/hooks/useInView.ts` exists (copied verbatim from `betterGeneraltrias`).
- `src/App.tsx` wraps with `<Analytics />` from `@vercel/analytics/react`.

**Todo List**

1. Copy `.env.local` from the Tanza configuration (name, region, province, contact,
   social media, SEO, website URL).
2. `npm install @vercel/analytics react-websitecarbon-badge` inside `betterTanza/`.
3. Append to the `@theme` block in `src/index.css`:
   - Custom properties: `--animate-fade-in-up`, `--animate-fade-in-left`,
     `--animate-fade-in-right`, `--animate-scale-in`.
   - Keyframes: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`.
4. Append utility classes after the `@theme` block:
   - `.anim-fade-in-up`, `.anim-fade-in-left`, `.anim-fade-in-right`, `.anim-scale-in`.
   - `@media (prefers-reduced-motion: reduce)` guard.
   - `svg { display: block }` rule.
5. Create `src/hooks/useInView.ts` — copy verbatim from `betterGeneraltrias`.
6. In `src/App.tsx`, add `import { Analytics } from '@vercel/analytics/react'` and
   render `<Analytics />` after `</HelmetProvider>`.
7. Commit: `feat: foundation — env, deps, CSS animations, useInView hook`

**Relevant Context**

- Source for `useInView.ts`: `betterGeneraltrias/src/hooks/useInView.ts`
- Source for CSS additions: `betterGeneraltrias/src/index.css` (the `@theme` block)
- Existing Tanza blue tokens in `src/index.css` must be preserved.

---

### 2 — Navbar: Fixed glassmorphism + emergency hotlines + active-route + language toggle

**Status:** `[x] done`

**Intent**
Replace the plain sticky navbar with GeneralTrias's fixed glassmorphism navbar
pattern. This is the most visible structural change — it fixes the navbar at the
top, adds the emergency hotlines ticker, and adds the EN/FIL language pill switcher.

**Expected Outcomes**

- Navbar is `position: fixed` (not sticky).
- Emergency hotlines bar visible: marquee animation on mobile, static on desktop.
- Main bar has `bg-white/80 backdrop-blur-2xl` glassmorphism style with Tanza seal.
- Active nav items are highlighted using `useLocation`.
- Language switcher uses two pill buttons (EN | FIL).
- Page content is offset by `pt-[116px]` so it doesn't hide behind the fixed navbar.

**Todo List**

1. Add `translationKey?: string` to the `NavigationItem` interface in
   `src/types/index.ts` — TypeScript will error without this.
2. Update `src/data/navigation.ts` to add `translationKey` fields to all nav items.
3. Rewrite `src/components/layout/Navbar.tsx` based on GeneralTrias version:
   - Logo asset: `/tanza-seal.webp` (replaces GeneralTrias logo).
   - Hotline numbers — use these exact verified values:
     - MDRRMO: `0977-345-5035`
     - Police (PNP): `(046) 437-6568` / `0998-598-5613`
     - Fire (BFP): `(046) 505-6084` / `0908-336-5886` / `0995-191-9332`
     - Health Center: `(046) 484-1485`
     - DSWD: `(046) 437-8601`
     - Coast Guard (PCG): `0916-793-2511`
   - All "General Trias" / "City" text → "Tanza" / "Municipality".
4. Update `src/App.tsx`: wrap `<Routes>...</Routes>` in
   `<div className="flex-1 flex flex-col pt-[116px]">`.
5. Commit: `feat: navbar — fixed glass, hotlines ticker, active route, lang toggle`

**Relevant Context**

- Source: `betterGeneraltrias/src/components/layout/Navbar.tsx`
- Source for types: `betterGeneraltrias/src/types/index.ts`
- Source for navigation: `betterGeneraltrias/src/data/navigation.ts`
- Tanza seal asset path: `public/tanza-seal.webp`

---

### 3 — Hero: Full-screen animated hero with service search

**Status:** `[x] done`

**Intent**
Replace the simple hero with GeneralTrias's full-screen animated hero. This is the
first thing visitors see — it includes the service search card, stat chips, and the
development projects teaser.

**Expected Outcomes**

- Hero fills the full viewport height (`min-h-screen`).
- Gradient uses Tanza blue (`#001044 → #003087 → #0052e0`), not green.
- City badge shows "Tanza, Cavite".
- Stat chips: 41 Barangays, 339K+ Residents (2024), 78.33 km², 1760 Founded.
- Search card is functional (queries live YAML content).
- Popular service category shortcuts visible.
- Development projects teaser strip at bottom.
- Animated entrance on mount (RAF-based `mounted` state).

**Todo List**

1. Rewrite `src/components/sections/Hero.tsx` based on GeneralTrias version:
   - Gradient: `#001044 → #003087 → #0052e0`.
   - Radial blob colors: `rgba(0, 82, 224, 0.18)` tones.
   - City badge text: "Tanza, Cavite".
   - Stat chips: 41 barangays, 339K+ residents, 78.33 km², 1760 founded.
   - CTA button links: update for Tanza routes.
   - Development projects teaser: use Tanza placeholder project names.
2. Commit: `feat: hero — full-screen animated, Tanza blue gradient, search card`

**Relevant Context**

- Source: `betterGeneraltrias/src/components/sections/Hero.tsx`
- `POPULAR_CATEGORIES` slugs are the same (health, education, business, etc.).
- `loadCategoryIndex` and `serviceCategories` import from `../../data/yamlLoader`.
- Hero overlaps navbar: `className` includes `-mt-[116px]`.

---

### 4 — Home: Seven-section layout with ThemeContext

**Status:** `[x] done`

**Intent**
Upgrade the Home page from two sections (Hero + ServicesSection) to GeneralTrias's
rich seven-section layout. Also add the ThemeContext (dark/light mode) which is
shared across the entire app.

**Expected Outcomes**

- `src/pages/Home.tsx` renders: Hero, InfoBar, ServicesSection,
  StatsSection, GovernmentQuickLinks, GovernmentActivitySection,
  HistorySection, LeadershipSection, ContactSection.
- All section gradients use Tanza blue, not green.
- Leadership cards show verified Tanza Mayor and Vice Mayor names.
- History timeline has Tanza-appropriate milestones (1760 founding, etc.).
- Contact section shows Tanza City Hall info.
- ThemeContext provider wraps the app, enabling dark/light toggle.

**Todo List**

1. Copy `src/context/ThemeContext.tsx` from GeneralTrias (verbatim — fully generic).
2. Wrap `<Router>` in `<ThemeProvider>` in `src/App.tsx`.
3. Replace `src/components/home/ServicesSection.tsx` with GeneralTrias version
   (adds color-coded top accents and `useInView` scroll animations).
4. Replace `src/components/home/GovernmentActivitySection.tsx` with GeneralTrias
   version (adds colored cards and `useInView` animations).
5. Copy `src/components/home/StatsSection.tsx`:
   - Gradient: blue dark `from-blue-950 to-blue-900`.
   - Weather API coords: `14.6833, 120.8833` (Tanza).
   - Stats: population 339K+, 41 barangays, 78.33 km².
6. Copy `src/components/home/GovernmentQuickLinks.tsx` — update hrefs to Tanza routes.
7. Copy `src/components/home/HistorySection.tsx` — update events for Tanza history
   (1760 founding, town charter, etc.).
8. Copy `src/components/home/LeadershipSection.tsx`:
   - Header gradient: Tanza blue.
   - Mayor: `Archangelo "SM" B. Matro` (formal: `Archangelo B. Matro`, nickname: "SM").
   - Vice Mayor: `Raymundo "Munding" A. Del Rosario` (formal: `Raymundo A. Del Rosario`, nickname: "Munding").
   - Store formal names in `executive.json`; display nicknames as a subtitle in the UI.
9. Copy `src/components/home/ContactSection.tsx`:
   - Gradient: Tanza blue.
   - Address, phone, email: Tanza City Hall placeholder info.
10. Update `src/pages/Home.tsx` to import and render all seven sections.
11. Commit: `feat: home — seven-section layout, ThemeContext, Tanza content`

**Relevant Context**

- All source components in `betterGeneraltrias/src/components/home/`.
- `useInView` hook must exist (Subtask 1 prerequisite).
- i18n keys for new sections need adding in Subtask 11.

---

### 5 — Layout: InfoBars + Footer upgrade

**Status:** `[x] complete`

**Intent**
Upgrade the Footer to GeneralTrias's four-column layout with visit counter and
carbon badge. Add the two InfoBar components (a quick-access strip in the Navbar,
and a live forex/weather/datetime bar on the Home page).

**Expected Outcomes**

- `src/components/layout/InfoBar.tsx`: quick-access strip rendered inside `<nav>`
  above the hotlines bar (FOI, Business Permits, Full Disclosure, Contact, Phone).
- `src/components/home/InfoBar.tsx`: live forex/weather/datetime rendered on Home
  page between `<Hero />` and `<ServicesSection />`.
- Footer shows four-column layout: brand + mission, Quick Links, Resources, CTA.
- Footer includes `WebsiteCarbonBadge` and visit counter.
- All footer content references Tanza (not General Trias).

**Todo List**

1. Create `src/components/layout/InfoBar.tsx`: copy from GeneralTrias, adapt links
   and phone number for Tanza. Mount it as first child in `<nav>` in `Navbar.tsx`.
2. Create `src/components/home/InfoBar.tsx`: copy from GeneralTrias, change weather
   coords to `14.6833, 120.8833`, change localStorage cache keys to `tz_` prefix.
   Add to `Home.tsx` between `<Hero />` and `<ServicesSection />`.
3. Rewrite `src/components/layout/Footer.tsx` based on GeneralTrias version:
   - Update brand, social links, GitHub link, quick links, resources, attribution.
   - `WebsiteCarbonBadge` url: `https://www.bettertanza.org` (placeholder).
4. Commit: `feat: layout — InfoBars, four-column footer, visit counter, carbon badge`

**Relevant Context**

- Source: `betterGeneraltrias/src/components/layout/InfoBar.tsx`
- Source: `betterGeneraltrias/src/components/home/InfoBar.tsx`
- Source: `betterGeneraltrias/src/components/layout/Footer.tsx`
- NOTE: Both InfoBar components exist in GeneralTrias but are NOT currently wired.
  This subtask wires them for the first time.

---

### 6 — UI: DisclaimerBar component

**Status:** `[x] complete`

**Intent**
Add the `DisclaimerBar` UI component — a small reusable "Last updated" banner used
on all transparency and data pages. Very small change but required by subtasks 7–8.

**Expected Outcomes**

- `src/components/ui/DisclaimerBar.tsx` exists and is exportable.

**Todo List**

1. Create `src/components/ui/DisclaimerBar.tsx` — copy verbatim from GeneralTrias
   (fully generic, no LGU-specific content).
2. Commit: `feat: ui — add DisclaimerBar component`

**Relevant Context**

- Source: `betterGeneraltrias/src/components/ui/DisclaimerBar.tsx`

---

### 7 — Pages: Transparency & Government (Officials, FullDisclosure, AnnualBudget, SALN, FOIReleases, Downloads)

**Status:** `[x] complete` — commit `c8ad261`

**Intent**
Port all six transparency and government pages from GeneralTrias, swapping green
hero gradients to Tanza blue and replacing all "General Trias" references with
Tanza equivalents. These pages are the core transparency offering of any LGU site.

**Expected Outcomes**

- `Officials.tsx`: renders local officials directory with Tanza placeholder names
  and positions.
- `FullDisclosure.tsx`: renders DILG FDP document links.
- `AnnualBudget.tsx`: renders budget sources, allocation, and budget cycle.
- `SALN.tsx`: renders SALN filing information.
- `FOIReleases.tsx`: renders FOI request guide.
- `Downloads.tsx`: renders planning documents (filenames updated for Tanza).
- All six use Tanza blue hero gradient (`#001044 → #003087 → #0052e0`).
- All six are registered in `src/App.tsx`.

**Todo List**

1. Create all six page files by copying GeneralTrias versions and adapting:
   - Replace green hero gradients with Tanza blue.
   - Replace "General Trias" / "City" with "Tanza" / "Municipality".
   - Replace phone/email/address with Tanza City Hall placeholders.
   - Replace official names with Tanza placeholders (real names filled in later).
2. Register all six routes in `src/App.tsx`:
   ```
   /government/departments/officials
   /government/transparency-documents/full-disclosure
   /government/transparency-documents/annual-budget
   /government/transparency-documents/saln
   /government/transparency-documents/foi-releases
   /government/transparency-documents/downloads
   ```
3. Commit: `feat: pages — transparency (Officials, FullDisclosure, Budget, SALN, FOI, Downloads)`

**Relevant Context**

- All source pages in `betterGeneraltrias/src/pages/`.
- Bottom wave SVG `fill` is always `"#f9fafb"` (matches light gray page background).
- `DisclaimerBar` (Subtask 6) is a prerequisite.

---

### 8 — Pages: Reports & Statistics (CityProfile + Recharts, AnnualReport, InfrastructureProjects)

**Status:** `[x] complete` — commit `0ce2ad8`

**Intent**
Port three statistics and reports pages. `CityProfile` is the most complex — it
uses `recharts` for bar, line, and pie charts, and includes the 41-barangay list,
awards, weather widget, and city stats. All pages use Tanza blue.

**Expected Outcomes**

- `recharts` is installed.
- `CityProfile.tsx` renders Recharts charts using Tanza population data and 41
  barangays. Chart colors use Tanza blue/secondary palette.
- `AnnualReport.tsx` renders annual report info page.
- `InfrastructureProjects.tsx` renders funding sources, procurement, and projects.
- All three pages are registered in `src/App.tsx`.

**Todo List**

1. `npm install recharts` inside `betterTanza/`.
2. Create `src/pages/CityProfile.tsx`:
   - Copy GeneralTrias version; replace green chart colors with Tanza blue.
   - Population data (verified PSA figures): 2010: 219,092 / 2015: 262,481 / 2020: 278,139 / 2023\*: ~305,000 (est.).
   - Canonical 41-barangay list: Amaya, Bagtas, Balsahan, Bancal, Biga, Bobon, Bucana,
     Buhay na Tubig, Burol, Calibuyo, Capipisa, Daang Amaya I, Daang Amaya II, Daang Amaya III,
     Daan Tambo, Dalahican, Dampalit, Gandus, Julugan, Lambingan, Luyos, Mabiga, Makabayan,
     Mambog, Mulawin, Pag-asa, Pahinga Norte, Pahinga Sur, Pilapil, Poblacion I, Poblacion II,
     Poblacion III, Sahud Ulan, Sanja Mayor, Santol, Tanauan, Tres Cruses, Tugatog, Ulango,
     Wawa, Bagong Pook.
   - Fix KEY_FACTS "Incorporation" stat: change value `1955` (leftover error from bootstrap) → `1760`,
     label → "Year Founded", sub → "Originally Santa Cruz de Malabon".
   - Awards: Tanza recognition entries (placeholder — real data to be added later).
   - Weather coords: `14.6833, 120.8833`.
   - Verified KEY_FACTS: 278,139 population (2020 PSA), 41 barangays, 78.33 km², 1760 founded.
3. Create `src/pages/AnnualReport.tsx` — copy from GeneralTrias, adapt for Tanza.
4. Create `src/pages/InfrastructureProjects.tsx` — copy, adapt Tanza contacts.
5. Register all three routes in `src/App.tsx`:
   ```
   /government/reports-and-statistics/city-profile
   /government/reports-and-statistics/annual-report
   /government/reports-and-statistics/infrastructure-projects
   ```
6. Commit: `feat: pages — reports (CityProfile with charts, AnnualReport, InfraProjects)`

**Relevant Context**

- Source: `betterGeneraltrias/src/pages/CityProfile.tsx`
- Canonical 41-barangay list (source: existing bootstrap branch `CityProfile.tsx`):
  Amaya, Bagtas, Balsahan, Bancal, Biga, Bobon, Bucana, Buhay na Tubig, Burol,
  Calibuyo, Capipisa, Daang Amaya I, Daang Amaya II, Daang Amaya III, Daan Tambo,
  Dalahican, Dampalit, Gandus, Julugan, Lambingan, Luyos, Mabiga, Makabayan, Mambog,
  Mulawin, Pag-asa, Pahinga Norte, Pahinga Sur, Pilapil, Poblacion I, Poblacion II,
  Poblacion III, Sahud Ulan, Sanja Mayor, Santol, Tanauan, Tres Cruses, Tugatog,
  Ulango, Wawa, Bagong Pook.
- KEY_FACTS `Incorporation` value `1955` in bootstrap is an error — correct to `1760`.

---

### 9 — Pages: Tourism (TouristSpots, WhereToStay)

**Status:** `[x] complete` — commit `4495de0`

**Intent**
Port both tourism pages with Tanza-specific placeholder spot and accommodation data.
Ensure the `tourism` slug is registered in the YAML loader (required by the routing
system — cannot be runtime-only).

**Expected Outcomes**

- `TouristSpots.tsx` renders with Tanza placeholder tourist attractions
  (Tanza Heritage Church, Tanza public spaces, etc.).
- `WhereToStay.tsx` renders with Tanza placeholder accommodations.
- `tourism` slug exists in `src/data/services.yaml`.
- `content/services/tourism/index.yaml` exists with at least one placeholder page.
- `tourismIndex` is registered in `categoryIndexMap` in `src/data/yamlLoader.ts`.
- Both routes registered in `src/App.tsx`.

**Todo List**

1. Verify `tourism` slug exists in `src/data/services.yaml`; add if missing.
2. Create `content/services/tourism/index.yaml` with one placeholder page.
3. Register `tourismIndex` in `categoryIndexMap` in `src/data/yamlLoader.ts`.
4. Create `src/pages/TouristSpots.tsx`: copy GeneralTrias, replace spots with
   Tanza placeholders; blue hero gradient.
5. Create `src/pages/WhereToStay.tsx`: copy GeneralTrias, replace accommodations
   with Tanza placeholders; blue hero gradient.
6. Register routes in `src/App.tsx`:
   ```
   /services/tourism/explore-tourist-spots
   /services/tourism/where-to-stay
   ```
7. Commit: `feat: pages — tourism (TouristSpots, WhereToStay)`

**Relevant Context**

- Source: `betterGeneraltrias/src/pages/TouristSpots.tsx`
- Source: `betterGeneraltrias/src/pages/WhereToStay.tsx`

---

### 10 — Page: DevelopmentProjects

**Status:** `[x] complete — commit dc12dd1`

**Intent**
Port the Development Projects page — a top-level showcase page (`/development-projects`)
that lists major incoming infrastructure and development projects for the municipality.

**Expected Outcomes**

- `DevelopmentProjects.tsx` renders with Tanza placeholder projects
  (CALAX Tanza interchange, new public market, etc.).
- Hero gradient uses Tanza blue.
- Route `/development-projects` is registered.

**Todo List**

1. Create `src/pages/DevelopmentProjects.tsx`: copy GeneralTrias version.
   - Replace `DEVELOPMENT_PROJECTS` array with Tanza placeholder entries.
   - Replace green hero gradient with Tanza blue.
2. Register route in `src/App.tsx`: `/development-projects`.
3. Commit: `feat: pages — DevelopmentProjects with Tanza placeholder projects`

**Relevant Context**

- Source: `betterGeneraltrias/src/pages/DevelopmentProjects.tsx`

---

### 11 — Navigation + i18n: nav.ts update + all translation keys

**Status:** `[x] complete — wired during Subtask 4`

**Intent**
Wire the navigation data to all the new pages (so they appear in menus), and add
all missing i18n translation keys to `en.json` and `fil.json`. Without this step,
links to new pages won't appear in the Navbar or Footer, and the browser console
will show missing translation warnings.

**Expected Outcomes**

- `src/data/navigation.ts` has `translationKey` on all nav items and includes
  sub-navigation for Government (Officials, Full Disclosure, City Profile, etc.).
- `src/i18n/locales/en.json` has all keys for: `stats.*`, `history.*`,
  `leadership.*`, `contact.*`, `weatherMap.*`, `hero.*`, `footer.*`, `nav.*`,
  and `services.categories.{slug}.*`.
- `src/i18n/locales/fil.json` has approximate Filipino translations for all keys.
- No missing translation warnings in browser console.

**Todo List**

1. Update `src/data/navigation.ts`:
   - Add `children` to the Government nav item (Officials, Full Disclosure, FOI, etc.).
   - Add footer links for all new pages.
2. Add missing keys to `src/i18n/locales/en.json` (see Relevant Context).
3. Add corresponding Filipino translations to `src/i18n/locales/fil.json`.
4. Commit: `feat: navigation and i18n — nav links + all translation keys`

**Relevant Context**

- Source: `betterGeneraltrias/src/data/navigation.ts`
- Source: `betterGeneraltrias/src/i18n/locales/en.json`
- Source: `betterGeneraltrias/src/i18n/locales/fil.json`
- Key groups to add: `stats`, `history`, `leadership`, `contact`, `weatherMap`,
  `hero`, `footer`, `nav`, `services.categories`.

---

### 12 — Validation: Build + Lint

**Status:** `[x] complete` — build passes, lint passes (zero warnings)

**Intent**
Final verification step. Run the TypeScript compiler and linter to ensure there are
zero errors before declaring the project ready.

**Expected Outcomes**

- `npm run build` passes with zero TypeScript errors.
- `npm run lint` passes with zero new errors.

**Todo List**

1. `npm run build` — fix any TypeScript or import errors.
2. `npm run lint` — fix any lint errors.
3. Commit: `chore: build validation`

---

## Implementation Order

```
0 → Branch setup (develop from main)
1 → Foundation (env, deps, CSS, hook)
2 → Navbar (fixed glass)
3 → Hero (full-screen)
4 → Home (seven sections + ThemeContext)
5 → Layout (InfoBars + Footer)
6 → DisclaimerBar component
7 → Transparency pages (Officials, FullDisclosure, Budget, SALN, FOI, Downloads)
8 → Reports pages (CityProfile + Recharts, AnnualReport, InfraProjects)
9 → Tourism pages
10 → Development Projects page
11 → Navigation + i18n
12 → Build/lint validation
```

Subtasks 7–10 can be done in any order relative to each other (independent pages).
Subtask 1 must come before all others. Subtask 6 must come before 7 and 8.

---

## Key Design Decisions

| Decision                                         | Rationale                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------- |
| Blue primary hero: `#001044 → #003087 → #0052e0` | Mirrors Tanza's existing `--color-primary` tokens (900→700→500)     |
| Radial blob colors: `rgba(0, 82, 224, 0.18)`     | Matches blue primary, parallel to GeneralTrias green blobs          |
| All "forest green" hero backgrounds → Tanza blue | Single consistent decision — no per-page variation                  |
| Leadership placeholder names                     | Real names updated by content editors later                         |
| Tourism slug in services.yaml + yamlLoader       | Required by routing system (static imports, cannot be runtime-only) |
| Tanza weather coords: `14.6833, 120.8833`        | Approximate center of Tanza, Cavite                                 |
| `develop` branch strategy                        | Clean history for each subtask, becomes `main` over time            |
| One commit per subtask                           | Reviewer can understand each change in isolation                    |

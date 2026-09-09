# betterTanza Upgrade Plan

## Goal

Bring `betterTanza` to full feature-parity with `betterGeneraltrias` in both **visual design** and **content scope**, customised for Tanza's blue-and-green identity (blue primary `#0066eb`, green secondary) rather than GeneralTrias's all-green palette.

The technical stack does not change — both projects already share React 19, Tailwind v4, Vite, Kapwa, and the same content/YAML system. All work is porting design patterns and pages, not architectural changes.

---

## Sub-Tasks

---

### 1 — Foundation: CSS / animation / colour tokens + new dependencies

**Status:** `[x] done`

**Intent**
Add the four extra animation keyframes and utility classes that GeneralTrias has but Tanza lacks, add `@vercel/analytics` and `react-websitecarbon-badge` packages, and copy the `useInView` hook.

**Expected Outcomes**

- `src/index.css` adds: keyframes `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn` (inside the `@theme` block), the `.anim-fade-in-*` / `.anim-scale-in` utility classes, the `prefers-reduced-motion` guard block, and `svg { display: block }`. **The existing blue primary tokens (`--color-primary-500: #0066eb` etc.) must NOT be changed.** (`.task-list-item` and `.sticky-table` already exist in Tanza's `index.css` — do not duplicate.)
- `tailwind.config.js` already matches GeneralTrias; no changes needed.
- `src/hooks/useInView.ts` exists (copy verbatim from GeneralTrias).
- `@vercel/analytics` and `react-websitecarbon-badge` are installed in `package.json`.
- `src/App.tsx` wraps with `<Analytics />` from `@vercel/analytics/react`.

**Todo List**

1. Run `npm install @vercel/analytics react-websitecarbon-badge` inside `betterTanza/`.
2. **Append** to the `@theme` block in `src/index.css` (after `slideIn` keyframe, before the closing `}`):
   - `--animate-fade-in-up`, `--animate-fade-in-left`, `--animate-fade-in-right`, `--animate-scale-in` custom properties.
   - Keyframes: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`.
3. **Append** after the closing `}` of `@theme inline`:
   - `.anim-fade-in-up`, `.anim-fade-in-left`, `.anim-fade-in-right`, `.anim-scale-in` utility classes.
   - `@media (prefers-reduced-motion: reduce)` guard block.
   - `svg { display: block }` rule.
4. Create `src/hooks/useInView.ts` (copy from GeneralTrias verbatim).
5. Add `<Analytics />` import and usage to `src/App.tsx`.

**Relevant Context**

- Tanza `src/index.css` currently only has `fadeIn` and `slideIn` keyframes — `.task-list-item`, `.sticky-table`, and all colour tokens are already present and must be preserved.
- `src/App.tsx` pattern: add `import { Analytics } from '@vercel/analytics/react'` and place `<Analytics />` after `</HelmetProvider>` closing tag.

---

### 2 — Navbar: fixed glassmorphism + emergency hotlines + active-route + language toggle

**Status:** `[x] done`

**Intent**
Replace Tanza's simple sticky navbar with GeneralTrias's fixed glass navbar pattern:

- Emergency hotlines bar (marquee on mobile, static on desktop) — adapt hotline numbers and labels for Tanza.
- Glassmorphism main bar (`bg-white/80 backdrop-blur-2xl`) with Tanza's logo/seal.
- Active-route highlighting (`useLocation`/`useNavigate`).
- `/#contact` smooth-scroll handler.
- EN/FIL pill language switcher (replaces `<select>`).
- Adjust content-wrapper in `App.tsx` to add `pt-[116px]` to offset fixed navbar height.

**Expected Outcomes**

- Navbar is fixed, not sticky.
- Emergency hotlines bar is visible (two rows of tickers on mobile, static on desktop).
- Main bar has glassmorphism style with Tanza seal/logo.
- Active nav items are highlighted.
- Language switcher uses two buttons (EN | FIL).
- Page content no longer hides behind the fixed navbar.

**Todo List**

1. Add `translationKey?: string` to the `NavigationItem` interface in `src/types/index.ts` — **required before Navbar can compile**, since the ported navbar reads `item.translationKey` on every nav item.
2. Rewrite `src/components/layout/Navbar.tsx` based on GeneralTrias version — replace all General Trias–specific strings with Tanza equivalents:
   - Logo: `/tanza-seal.webp` (existing asset, replaces `betterGeneraltrias-logo.png`).
   - Hotline numbers: use Tanza placeholder numbers (to be updated with real data later).
3. Update `src/App.tsx`: wrap `<Routes>...</Routes>` in `<div className="flex-1 flex flex-col pt-[116px]">` to offset the fixed navbar height (matching GeneralTrias pattern).
4. Add `useNavigate` and `useLocation` imports to `Navbar.tsx`.
5. Update `src/data/navigation.ts` to add `translationKey` fields to existing nav items (so the new Navbar renders them correctly from the start). This is also referenced in Sub-task 11, but must happen here first.

**Relevant Context**

- GeneralTrias `Navbar.tsx` full file is captured above — use as template.
- Tanza navbar currently at `src/components/layout/Navbar.tsx`.
- Tanza `App.tsx` currently has no offset wrapper; `Routes` are direct children of the flex div.
- Tanza `NavigationItem` in `src/types/index.ts` is missing `translationKey?: string` — **TypeScript will error without this change**.

---

### 3 — Hero: full-screen animated hero with service search

**Status:** `[x] done`

**Intent**
Replace Tanza's simple green-gradient hero with the GeneralTrias full-screen hero pattern:

- Full-screen gradient using Tanza's blue (`#001044 → #003087 → #0066eb` direction instead of green).
- Radial blob decorations and grid texture overlay.
- City badge (MapPin + "Tanza, Cavite").
- Animated entrance (RAF-based `mounted` state).
- Stat chips (Tanza stats: 41 barangays, 339K+ residents, 78.33 km², 1760 founded).
- Right-side search card with service autocomplete (reuse GeneralTrias logic, same YAML loader).
- Popular service category quick links.
- Development projects teaser strip at bottom (placeholder for Tanza projects).
- Bottom wave SVG.
- Hero overlaps navbar (`-mt-[116px]`).

**Expected Outcomes**

- Tanza hero fills the full viewport height.
- Hero gradient uses Tanza blue, not green.
- Search card is functional (queries existing YAML content).
- Stat chips show Tanza-specific data.
- Hero entrance animates on mount.

**Todo List**

1. Rewrite `src/components/sections/Hero.tsx` based on GeneralTrias version.
   - Change gradient from green (`#082214 → #16643c`) to Tanza blue (`#001044 → #003087 → #0052e0`).
   - Change radial blob colours to blue tones.
   - Update city badge text: "Tanza, Cavite".
   - Update stat chips: `{ value: '41', label: 'Barangays' }`, `{ value: '339K+', label: 'Residents (2024)' }`, `{ value: '78.33 km²', label: 'Land Area' }`, `{ value: '1760', label: 'Year Founded' }`.
   - Update development project teasers to Tanza placeholder names (can use generic LGU project names for now).
   - CTA buttons: update links/text for Tanza.

**Relevant Context**

- GeneralTrias `src/components/sections/Hero.tsx` full file captured above.
- `POPULAR_CATEGORIES` list can stay the same (same service slugs exist in Tanza).
- `loadCategoryIndex` and `serviceCategories` come from `../../data/yamlLoader` — same import path.
- Bottom wave `fill="white"` works on white page background.

---

### 4 — Home page: new sections (Stats, GovernmentQuickLinks, History, Leadership, Contact)

**Status:** `[x] done`

**Intent**
Replace Tanza's two-section Home page (`Hero + ServicesSection + GovernmentActivitySection`) with GeneralTrias's richer seven-section layout, adapted for Tanza:

- `StatsSection` — dark blue gradient (not green), weather widget, Tanza stats.
- `GovernmentQuickLinks` — transparency/government shortcut cards (updated hrefs for Tanza).
- `HistorySection` — vertical timeline, adapted for Tanza's history (placeholder events).
- `LeadershipSection` — Mayor/Vice Mayor cards with blue gradient header (not green).
- `ContactSection` — dark blue gradient (not green), Tanza contact info.

Also:

- Update `ServicesSection` to use the GeneralTrias version (coloured top-accent cards, per-slug colour map, `useInView` scroll animations).
- Update `GovernmentActivitySection` to use the GeneralTrias version (coloured per-category cards, `useInView`).

**Expected Outcomes**

- `src/pages/Home.tsx` imports all seven sections.
- All section gradients use Tanza blue, not green.
- Leadership cards show Tanza Mayor/Vice Mayor placeholder names.
- History timeline shows Tanza-appropriate milestone events.
- Contact section shows Tanza City Hall contact info.

**Todo List**

1. Copy `StatsSection.tsx` from GeneralTrias into `src/components/home/StatsSection.tsx` — change gradient to blue, update stats (population, barangays, land area), change weather API coordinates to Tanza (`14.6833, 120.8833`).
2. Copy `GovernmentQuickLinks.tsx` from GeneralTrias — update `href` values to match Tanza's existing + future government routes; titles can remain (Full Disclosure, City Officials, etc.).
3. Copy `HistorySection.tsx` — update i18n keys and placeholder history events for Tanza (1760 founding, key milestones — real data can be filled in later).
4. Copy `LeadershipSection.tsx` — change header gradient to Tanza blue; update Mayor/Vice Mayor names to Tanza placeholders.
5. Copy `ContactSection.tsx` — change gradient to blue, update address/phone/email to Tanza City Hall info.
6. Replace `src/components/home/ServicesSection.tsx` with GeneralTrias version (adds colour-coded top accents and `useInView` animations).
7. Replace `src/components/home/GovernmentActivitySection.tsx` with GeneralTrias version (adds coloured cards and `useInView` animations).
8. Update `src/pages/Home.tsx` to import and render all seven sections.
9. Add `src/context/ThemeContext.tsx` (copy from GeneralTrias) and wrap `App.tsx` in `ThemeProvider`.

**Relevant Context**

- All source components captured above (GeneralTrias full content).
- Open-Meteo weather API: change lat/lon to Tanza coordinates (`14.6833, 120.8833`).
- `useInView` hook must be created first (Sub-task 1).
- i18n keys for new sections (`stats.*`, `history.*`, `leadership.*`, `contact.*`, `weatherMap.*`) need to be added to `src/i18n/locales/en.json` and `fil.json`.

---

### 5 — Layout: InfoBar (quick-access strip + live utility bar) + Footer upgrade

**Status:** `[x] done`

**Intent**
Upgrade the Footer to match GeneralTrias's richer four-column layout. Also create the two InfoBar components (they exist in GeneralTrias but are not yet wired in — we will wire them for Tanza).

**InfoBars:**

- `src/components/layout/InfoBar.tsx` — quick-access strip (FOI, Business Permits, Full Disclosure, Contact, Phone). Render as the **first child inside the `<nav>` element** of `Navbar.tsx`, above the hotlines bar. (Note: this component exists in GeneralTrias but is **not currently mounted** there — we are wiring it for the first time.)
- `src/components/home/InfoBar.tsx` — forex (USD→PHP), Tanza weather, datetime. Render in `src/pages/Home.tsx` **between `<Hero />` and `<ServicesSection />`**. (Also exists in GeneralTrias but is **not currently mounted** there — `WeatherMapSection` and `StatsSection` serve the weather role instead.)

**Footer upgrade:**

- Match GeneralTrias footer structure: brand column, Quick Links, Resources, Cost/CTAs + carbon badge.
- Add `WebsiteCarbonBadge` from `react-websitecarbon-badge`.
- Add visit counter (`useVisitCounter` hook calling `/api/visits`).
- Update all links, social links, GitHub, and attribution text for Tanza.

**Expected Outcomes**

- `src/components/layout/InfoBar.tsx` renders a quick-access strip above the hotlines bar in the Navbar.
- `src/components/home/InfoBar.tsx` renders live forex/weather/datetime on the Home page below the Hero.
- Footer shows four-column layout with carbon badge and visit counter.
- All footer content refers to Tanza (not General Trias).

**Todo List**

1. Create `src/components/layout/InfoBar.tsx` (copy from GeneralTrias, adapt links/phone for Tanza). Add it as the **first rendered element inside the `<nav>` tag** in `src/components/layout/Navbar.tsx`.
2. Create `src/components/home/InfoBar.tsx` (copy from GeneralTrias, change weather coordinates to Tanza `14.6833, 120.8833` and change localStorage cache keys from `bt_` → `tz_`). Add it to `src/pages/Home.tsx` between `<Hero />` and `<ServicesSection />`.
3. Rewrite `src/components/layout/Footer.tsx` based on GeneralTrias version — update brand, social links, GitHub link, quick links, resources, attribution for Tanza.
4. Update `src/i18n/locales/en.json` and `fil.json` with footer i18n keys: `footer.mission`, `footer.quickLinks`, `footer.resources`, `footer.costLabel`, `footer.volunteer`, `footer.contribute`, `footer.attribution`, `footer.builtBy`.

**Relevant Context**

- GeneralTrias `Footer.tsx` and both `InfoBar.tsx` files captured above.
- **Key discovery**: both `InfoBar` components exist in GeneralTrias but are orphaned (imported nowhere). They are being wired up for the first time here.
- `WebsiteCarbonBadge` url: placeholder `https://www.bettertanza.org` (update when domain is known).
- `useVisitCounter` calls `/api/visits` — returns `null` gracefully if the endpoint doesn't exist.
- `pt-[116px]` content offset is handled in `App.tsx` (Sub-task 2) — layout/InfoBar adds to the navbar height, so this offset may need adjustment if layout/InfoBar is added inside the nav.

---

### 6 — New UI component: DisclaimerBar

**Status:** `[x] done`

**Intent**
Add the `DisclaimerBar` component used on most transparency/data pages.

**Expected Outcomes**

- `src/components/ui/DisclaimerBar.tsx` exists and exports the default component.

**Todo List**

1. Create `src/components/ui/DisclaimerBar.tsx` (copy verbatim from GeneralTrias — it is fully generic).

**Relevant Context**

- GeneralTrias `src/components/ui/DisclaimerBar.tsx` captured above.

---

### 7 — New pages: Transparency & Government (Officials, FullDisclosure, AnnualBudget, SALN, FOIReleases, Downloads)

**Status:** `[ ] pending`

**Intent**
Port all six transparency/government pages from GeneralTrias, adapting content for Tanza (names, contact info, addresses, phone numbers). All pages use the same green-hero-with-wave pattern — swap gradient colours to Tanza blue.

Pages:

- `src/pages/Officials.tsx` — local officials directory (update names, positions for Tanza).
- `src/pages/FullDisclosure.tsx` — DILG FDP documents listing.
- `src/pages/AnnualBudget.tsx` — budget sources, allocation, cycle.
- `src/pages/SALN.tsx` — SALN filing info.
- `src/pages/FOIReleases.tsx` — FOI request guide.
- `src/pages/Downloads.tsx` — planning documents (update filenames/links to Tanza docs).

**Expected Outcomes**

- All six pages render without errors.
- All hero gradients use Tanza blue (`#001044 → #003087 → #0052e0`).
- Tanza-specific contact info, phone numbers, and office names are used throughout.
- Pages are registered in `src/App.tsx` routing.

**Todo List**

1. Create all six page files by copying GeneralTrias versions and:
   - Replace green hero gradients with Tanza blue equivalents.
   - Replace "General Trias" with "Tanza" / "Municipality of Tanza" throughout.
   - Replace contact info with Tanza City Hall placeholders.
   - Replace official names with Tanza Mayor/Vice Mayor placeholder names (real names to be filled later).
2. Add all six routes to `src/App.tsx`.
3. Update `src/data/navigation.ts` to add relevant links to the footer/gov nav.

**Relevant Context**

- All six GeneralTrias page files captured above.
- Tanza hero gradient: `background: 'linear-gradient(135deg, #001044 0%, #003087 50%, #0052e0 100%)'`.
- Bottom wave SVG `fill` is always `"#f9fafb"` (matches the light gray page background).
- Routes to add follow the same pattern as GeneralTrias `App.tsx`.

---

### 8 — New pages: Reports & Statistics (CityProfile with Recharts, AnnualReport, InfrastructureProjects)

**Status:** `[ ] pending`

**Intent**
Port three statistics/reports pages. `CityProfile` uses Recharts — install the package and adapt data for Tanza. All pages use the same hero pattern (blue for Tanza).

Pages:

- `src/pages/CityProfile.tsx` — population charts (Bar, Line, Pie via Recharts), barangay list, awards, city map.
- `src/pages/AnnualReport.tsx` — annual report listing page.
- `src/pages/InfrastructureProjects.tsx` — funding sources, procurement process, notable projects.

**Expected Outcomes**

- `recharts` is installed.
- `CityProfile.tsx` renders Recharts charts with Tanza population data and 41 barangays.
- All pages use Tanza blue hero gradient.
- All three pages are registered in routing.

**Todo List**

1. Run `npm install recharts` inside `betterTanza/`.
2. Create `src/pages/CityProfile.tsx`:
   - Copy GeneralTrias version; replace green chart colours with Tanza blue/secondary.
   - Update population data with Tanza figures (2010: ~219K, 2015: ~262K, 2020: ~278K — placeholder; exact PSA data to be added later).
   - Replace `BARANGAYS` list with Tanza's 41 barangays (placeholder list is fine for now).
   - Replace `AWARDS` with Tanza recognition entries (placeholder).
   - Update weather coordinates to Tanza (`14.6833, 120.8833`).
   - Replace `KEY_FACTS` values with Tanza data (278K population, 41 barangays, 78.33 km², 1760 founded).
3. Create `src/pages/AnnualReport.tsx` (copy from GeneralTrias, adapt for Tanza — general informational page).
4. Create `src/pages/InfrastructureProjects.tsx` (copy, adapt Tanza projects/contacts).
5. Add all three routes to `src/App.tsx`.

**Relevant Context**

- GeneralTrias `CityProfile.tsx` full content captured above.
- Tanza's 41 barangays (listed in Hero component) — use the same list.
- Install recharts: `npm install recharts`.

---

### 9 — New pages: Tourism (TouristSpots, WhereToStay)

**Status:** `[x] done`

**Intent**
Port tourism pages adapted for Tanza. The content (spot names, descriptions, contacts) will be Tanza-specific placeholder data for now — real tourism data to be filled in later. Ensure the `tourism` service category exists in `src/data/services.yaml` and is registered in `yamlLoader.ts`.

Pages:

- `src/pages/TouristSpots.tsx`
- `src/pages/WhereToStay.tsx`

**Expected Outcomes**

- Both tourism pages render with Tanza placeholder spot/accommodation data.
- Hero gradient uses Tanza blue.
- Tourism category is present in services.yaml and yamlLoader.ts.
- Routes are registered in `src/App.tsx`.

**Todo List**

1. Check if `tourism` slug exists in `src/data/services.yaml`; add it if not.
2. Create `content/services/tourism/index.yaml` with at least one placeholder page.
3. Register `tourismIndex` in `categoryIndexMap` in `src/data/yamlLoader.ts`.
4. Create `src/pages/TouristSpots.tsx`: copy GeneralTrias version, replace spots with Tanza-appropriate placeholder data (e.g. Tanza Heritage Church, Tanza Public Park, etc.).
5. Create `src/pages/WhereToStay.tsx`: copy GeneralTrias version, replace accommodation list with Tanza placeholders.
6. Add routes to `src/App.tsx`:
   ```tsx
   <Route path="/services/tourism/explore-tourist-spots" element={<TouristSpots />} />
   <Route path="/services/tourism/where-to-stay" element={<WhereToStay />} />
   ```

**Relevant Context**

- GeneralTrias `TouristSpots.tsx` and `WhereToStay.tsx` full content captured above.
- Registration pattern (step 3) must follow the same pattern as existing entries in `yamlLoader.ts`.

---

### 10 — New page: DevelopmentProjects

**Status:** `[x] done`

**Intent**
Port the Development Projects page with Tanza-specific placeholder projects. This is a top-level route (`/development-projects`).

**Expected Outcomes**

- `src/pages/DevelopmentProjects.tsx` renders with Tanza placeholder projects.
- Route `/development-projects` is registered in `src/App.tsx`.
- Hero gradient uses Tanza blue.

**Todo List**

1. Create `src/pages/DevelopmentProjects.tsx`: copy GeneralTrias version.
   - Replace `DEVELOPMENT_PROJECTS` array with Tanza placeholder entries (e.g. CALAX Tanza interchange, new public market, etc.).
   - Replace green hero gradient with Tanza blue.
2. Add route to `src/App.tsx`: `<Route path="/development-projects" element={<DevelopmentProjects />} />`.

**Relevant Context**

- GeneralTrias `DevelopmentProjects.tsx` full content captured above.

---

### 11 — Navigation: update `navigation.ts` + add i18n keys

**Status:** `[x] done`

**Intent**
Update `src/data/navigation.ts` to:

- Add `translationKey` fields to nav items (GeneralTrias navbar uses `item.translationKey` for i18n, Tanza's does not).
- Add Government sub-navigation items linking to new pages (Officials, Full Disclosure, etc.).
- Add footer nav links for new pages.

Also add all missing i18n translation keys to `en.json` and `fil.json` for new sections and pages used in Sub-tasks 4, 5, 7, 8, 9.

**Expected Outcomes**

- Nav items surface the new government/transparency pages.
- No missing translation key warnings in the browser console.
- Filipino translations are approximate placeholders (can be improved later).

**Todo List**

1. Update `src/data/navigation.ts`:
   - Add `children` to the Government nav item pointing to new pages (Officials, Full Disclosure, etc.).
   - Add footer links for new pages.
2. Add i18n keys to `src/i18n/locales/en.json`:
   - `stats.*` (population, barangays, area, classification, viewProfile).
   - `history.*` (title, events.\*, charteredYear, charteredDesc, populationLabel, populationDesc).
   - `leadership.*` (title, cityMayor, cityViceMayor, electedMayor, electedViceMayor, viewAll, viewProfile).
   - `contact.*` (title, phone, phoneHours, email, emailResponse, address, addressLine1, addressLine2, viewAll).
   - `weatherMap.*` (title, location, clear, partlyCloudy, foggy, rainy, showers, thunderstorm, defaultCondition, wind, climate, elevation, loading, mapTitle).
   - `hero.*` (browseServices, contactUs, findService, searchPlaceholder, popular).
   - `footer.*` (mission, quickLinks, resources, costLabel, volunteer, contribute, attribution, builtBy).
   - `nav.*` (services, government, transparency, fullDisclosure, foiReleases, development).
   - `services.categories.{slug}.name` / `.description` for any new slugs.
3. Add corresponding keys to `fil.json` (Filipino translations — approximate is fine for now).

**Relevant Context**

- GeneralTrias `src/data/navigation.ts` has `translationKey` on each nav item — Tanza's does not yet; only add if needed for new Navbar (Sub-task 2 already ports the navbar which uses it).
- All translation keys are derived from how they're used in the ported components above.

---

### 12 — Final: AGENTS.md update + validation

**Status:** `[x] done`

**Intent**
Update all AGENTS.md files to reflect the new pages, dependencies, and patterns added by this upgrade.

**Expected Outcomes**

- `AGENTS.md` reflects new routes, new dependencies (`recharts`, `@vercel/analytics`, `react-websitecarbon-badge`), and the `useInView` hook.
- `.bob/rules-agent/AGENTS.md`, `.bob/rules-ask/AGENTS.md`, `.bob/rules-plan/AGENTS.md` updated.
- `npm run build` passes with no TypeScript errors.
- `npm run lint` passes with no new errors.

**Todo List**

1. Run `npm run build` and fix any TypeScript or import errors.
2. Run `npm run lint` and fix any lint errors.
3. Update `AGENTS.md`, `.bob/rules-agent/AGENTS.md`, `.bob/rules-ask/AGENTS.md`, `.bob/rules-plan/AGENTS.md` to reflect new state.

---

## Implementation Order

```
1 → Foundation (deps, CSS, useInView hook)
2 → Navbar (fixed glass)
3 → Hero (full-screen)
4 → Home sections (Stats, QuickLinks, History, Leadership, Contact)
5 → Layout (InfoBars, Footer upgrade)
6 → DisclaimerBar component
7 → Transparency pages (Officials, FullDisclosure, AnnualBudget, SALN, FOI, Downloads)
8 → Reports pages (CityProfile + Recharts, AnnualReport, InfrastructureProjects)
9 → Tourism pages (TouristSpots, WhereToStay)
10 → Development Projects page
11 → Navigation + i18n keys
12 → Build/lint validation + AGENTS.md
```

Sub-tasks 7–10 can be done in any order relative to each other (all are new, independent pages). Sub-tasks 1, 6, and 11 are prerequisites for everything else.

---

## Key Decisions

| Decision                                                                  | Rationale                                                             |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Blue-primary hero gradient: `#001044 → #003087 → #0052e0`                 | Mirrors Tanza's existing `--color-primary` tokens (900→700→500)       |
| Radial blob colours in hero/StatsSection: `rgba(0, 82, 224, 0.18)` tones  | Matches blue primary, visually parallel to GeneralTrias's green blobs |
| All GeneralTrias "forest green" hero backgrounds replaced with Tanza blue | Single consistent decision — no per-page variation                    |
| Leadership placeholder names                                              | Real names to be updated by content editors; structure is in place    |
| Tourism slug added to services.yaml + yamlLoader                          | Required by routing system (static imports); cannot be runtime-only   |
| Tanza weather coords: 14.6833, 120.8833                                   | Approximate center of Tanza, Cavite                                   |

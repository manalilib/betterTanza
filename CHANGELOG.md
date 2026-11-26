# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-26

First public release of betterTanza.org for the Municipality of Tanza, Cavite. Full notes: [RELEASE-NOTES-v1.0.0.md](RELEASE-NOTES-v1.0.0.md).

### Added

- Tanza-branded home page: hero collage, accessible search combobox, project cards, stat strip, and weather and map at verified coordinates
- Mayor and Vice Mayor page, Officials page with councilor roster, and Tourism, Tourist Spots and Where to Stay pages
- Transparency pages: Full Disclosure, Annual Budget, SALN, FOI Releases, Planning Docs & Downloads
- Transparency menu link to the Budget Transparency Portal; `NavigationItem.external` renders menu items as new-tab links
- Municipal Profile (sourced history), Annual Report, Infrastructure Projects and Development Projects pages
- Published service pages: local scholarships, financial assistance, Tanza Public Service Portal
- Quick-access info bar, footer visit counter (`api/visits.ts`) and carbon badge
- Official TANZA wordmark and seal, brand palette (navy `#004c97`, green `#00b140`) and shared hero gradient
- Tanza SEO: page titles, favicon set, Open Graph image, canonical URLs, `robots.txt`, `sitemap.xml`

### Changed

- Municipal data updated from verified sources (2024 census, coordinates, 2025–2028 term, barangays, officials)
- Navbar hotlines match the numbers published on tanza.gov.ph
- i18n reduced to English and Filipino, loaded from bundled locale files
- README and guides rewritten for Tanza
- Improved text contrast on white backgrounds

### Removed

- Unverifiable content: economic-sector pie chart, unsourced history entries, speculative development projects, hotel listings, placeholder councilors, DSWD and Coast Guard hotlines
- Lapu-Lapu City references and other-LGU examples; non-Tanza drafts moved to `content/_drafts/`
- Links to PDFs that are not uploaded and menu entries for pages that do not exist
- Generic starter-kit docs, setup script, unused language registry, switcher and backend

### Known limitations

- 14 draft service pages are unpublished and 20 menu entries have no page yet. See [TANZA-CONTENT-TODO.md](TANZA-CONTENT-TODO.md).
- Municipal Hall phone and email, the councilor roster and the BFP/Health Office hotline are unconfirmed.

## [0.2.0] - 2026-03-07

### Added

- `/government` and `/government/:category` routes with a new `Government` page
- Government section content system under `content/government/` (departments: executive, legislative)
- `src/pages/Government.tsx` — category listing page for government departments
- `src/data/government.yaml` — top-level government category definitions
- Expanded `Document` page to support government content alongside services
- Navigation updated: main nav Government item now links to `/government/departments`
- OG image template redesigned for improved open graph previews
- Companion JSON files for markdown pages — optional `{slug}.json` files supply `{PLACEHOLDER}` token values (official names, dates, etc.) interpolated at load time, with `VITE_<KEY>` env vars as fallback

### Changed

- `yamlLoader.ts` refactored to handle both service and government category indexes
- `markdownLoader.ts` refactored to resolve markdown files across content types; now also loads companion JSON and runs `interpolate()` for token substitution
- `Navbar` updated to support government section routing
- `Breadcrumbs` updated to reflect government section paths
- `Section` component adjusted for layout consistency
- `GovernmentActivitySection` on Home page now points to live government routes
- `Services` page layout and routing logic improved
- Locale strings updated in `public/locales/en/common.json` and `src/i18n/locales/en.json`

### Documentation

- `README.md` — project structure and content setup steps updated for government section
- `CLAUDE.md` — routing, content system, and companion JSON file behavior documented
- `CONTENT-MANAGEMENT.md` — added government department pages section, JSON data files explained, dynamic placeholder workflow included
- `CONTENT-GUIDE.md` — added department/office page template, content type, and "Dynamic Content with Placeholders" section

## [0.1.0] - 2026-03-06

### Added

- `@bettergov/kapwa` component library integrated as the primary UI primitive layer
- New font and theme setup via `src/fonts.css`
- `react-helmet-async` for SEO and document head management

### Changed

- Migrated styling pipeline to **Tailwind CSS v4** (Vite plugin, PostCSS config updated)
- Replaced local `Card` component (`src/components/ui/Card.tsx`) with Kapwa card primitives
- Replaced legacy `ListItem` component with Kapwa cards and banners across Services, Home, and Document pages
- Updated `src/index.css` to align with Tailwind v4 conventions
- Upgraded `App.tsx` and `main.tsx` for the new app shell and SEO setup

### Removed

- `src/components/ui/Card.tsx` — superseded by Kapwa primitives
- `src/components/ui/ListItem.tsx` — superseded by Kapwa cards and banners

[1.0.0]: https://github.com/manalilib/betterTanza/releases/tag/v1.0.0
[0.2.0]: https://github.com/iyanski/betterlocalgov/releases/tag/v0.2.0
[0.1.0]: https://github.com/iyanski/betterlocalgov/releases/tag/v0.1.0

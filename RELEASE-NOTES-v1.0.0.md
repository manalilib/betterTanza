# betterTanza.org v1.0.0

**Release date:** 26 November 2026

First public release of betterTanza.org, a community-built, citizen-first portal for the **Municipality of Tanza, Cavite**. It was adapted from the open-source [betterlocalgov](https://github.com/iyanski/betterlocalgov) starter and rebuilt around Tanza's own facts, officials and branding.

> betterTanza.org is **not** an official website of the Municipality of Tanza. The official site is [tanza.gov.ph](https://www.tanza.gov.ph).

## Highlights

- A Tanza-branded home page with a full-screen hero, a searchable project finder, a stat strip, weather and map for Tanza, and quick-access links.
- Government and transparency pages: Mayor and Vice Mayor, local officials, Full Disclosure, Annual Budget, SALN, FOI releases and planning documents.
- A link from the Transparency menu to the Tanza Budget Transparency Portal.
- Town information: municipal profile with sourced history, annual report, infrastructure and development projects, tourism, and places to stay.
- English and Filipino, switchable from the navbar.

## What's new

### Pages and navigation

- **Home:** hero with the Tanza collage background, accessible search combobox, project cards built from development data, and weather and map using Tanza's verified coordinates (14.3944°N, 120.8531°E).
- **Government:** dedicated Mayor and Vice Mayor page with responsibilities, invite steps and contact cards, plus an Officials page with the councilor roster.
- **Transparency:** Full Disclosure, Annual Budget, SALN, FOI Releases, and Planning Docs & Downloads.
- **Budget Transparency Portal:** a new Transparency menu item that opens the portal in a new tab. It points to `tanza-cavite-transparency-portal.vercel.app`.
- **Town information:** Municipal Profile (charts and a dated history), Annual Report, Infrastructure Projects, Development Projects, Tourism, Tourist Spots and Where to Stay.
- **Navigation:** fixed glass navbar with an emergency-hotlines ticker, active-route highlighting, language toggle, and a quick-access info bar. Menu items can now be external links.
- **Services:** category pages for agriculture, business, disaster preparedness, education, environment, waste, health, housing, infrastructure and social welfare. See _Known limitations_ for what's published.

### Content

- Municipal data updated from verified sources: 2024 census, coordinates, the 2025–2028 term, barangay list, mayor, vice mayor and council details.
- Published service pages: local scholarships, financial assistance, and the Tanza Public Service Portal.
- Emergency hotline numbers match those published on tanza.gov.ph.

### Brand and design

- Official TANZA wordmark in the navbar and home hero; Tanza seal in the footer.
- Palette sampled from the wordmark (navy `#004c97`, green `#00b140`), with a shared blue-to-green gradient on page heroes.
- Improved text contrast on white backgrounds, visible CTA focus rings, and reduced-motion support for scroll animations.
- "Powered by Sidedish Project" credit in the footer.

### SEO and platform

- Tanza page titles, favicon set, Open Graph image, canonical URL per route, `robots.txt` and `sitemap.xml` (34 URLs).
- Footer visit counter, backed by a Vercel function at `api/visits.ts`, and a carbon badge.
- Bilingual UI (English and Filipino) loaded from bundled locale files.

## Fixes and removals

Several items from the starter template were removed or corrected because they could not be verified for Tanza:

- Removed the economic-sector pie chart (no source for its percentages).
- Replaced unsourced history entries with dated facts from Wikipedia and Wikidata (1760, 1897, 1903, 1914, 2018, 2022). Corrected the SM City Tanza opening date to 14 October 2022.
- Kept only the two development projects that could be sourced (Cavite Gateway Terminal, SM City Tanza).
- Removed hotel and resort listings and placeholder councilors that had no source.
- Corrected the population figure to 278K+ and the weather coordinates, which were previously set to Caloocan.
- Removed DSWD and Coast Guard hotlines that no Tanza source lists.
- Hid service pages that don't exist yet and moved non-Tanza drafts out of the build, so menus no longer lead to "Document Not Found".
- Stopped linking to PDFs that aren't uploaded.
- Removed all Lapu-Lapu City references and other-LGU examples from content and docs.
- i18n now loads the bundled Tanza locales. The unused language registry, switcher and backend were removed.

## Known limitations

These are tracked in [`TANZA-CONTENT-TODO.md`](TANZA-CONTENT-TODO.md).

- **Service content is incomplete.** Only 3 service pages and the executive page are published. 14 draft service pages are unpublished until Tanza facts are supplied. 20 pages are listed in the category menus but have no file yet.
- **Municipal Hall contact details are unconfirmed.** `(046) 432-0000` and `info@tanza.gov.ph` are used across the site but don't appear on tanza.gov.ph.
- **BFP and Municipal Health Office share one hotline number** on tanza.gov.ph. This looks like an error on the official site. Confirm before relying on it.
- **Councilor roster is not verified against an official LGU or COMELEC source.** It matches Wikipedia. One photo is still missing.
- **Land area is 78.33 km²** (Wikidata, PhilAtlas, Wikipedia infobox). Wikipedia's article text says 95.59 km².
- **The Budget Transparency Portal link depends on the Vercel project being renamed and the `.vercel.app` domain being added.** Until then the link won't load.
- The site has no automated tests. `npm run build` and `npm run lint` are the checks.

## Upgrade and deployment notes

- Requires Node.js 18+. Run `npm install`, copy `env.example` to `.env.local`, and set `VITE_WEBSITE_URL` and the other `VITE_*` values.
- Deploy on Vercel. See [`DEPLOYMENT-GUIDE.md`](DEPLOYMENT-GUIDE.md).
- `package.json` still reads `0.2.0`. Bump it and tag `v1.0.0` when you publish this release.

## Credits

- Built by the Tanza community and the Sidedish Project.
- Based on the open-source [betterlocalgov](https://github.com/iyanski/betterlocalgov) starter by iyanski and contributors.
- UI components by [@bettergov/kapwa](https://github.com/bettergov/kapwa).
- Built with React, Vite, Tailwind CSS, i18next and Lucide icons.
- Released under CC0. See [`LICENSE`](LICENSE).

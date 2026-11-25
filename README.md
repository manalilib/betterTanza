# betterTanza.org

A community-built, citizen-first portal for the **Municipality of Tanza, Cavite**. It organizes municipal services, government information and transparency documents around what residents need to do (apply, report, pay, find), in plain language, on any device.

> betterTanza.org is **not** an official website of the Municipality of Tanza. The official site is [tanza.gov.ph](https://www.tanza.gov.ph).

## Features

- **Services**: step-by-step guides grouped by topic (health, business, education, environment, and more)
- **Government**: executive and legislative pages, officials, and transparency documents (Full Disclosure, Annual Budget, SALN, FOI releases)
- **Town information**: city profile and statistics, tourist spots, places to stay, development projects
- **Bilingual**: English and Filipino
- **Mobile-first and accessible**: responsive layout, keyboard-friendly, reduced-motion aware
- **Content as files**: services and government pages are Markdown and YAML under `content/`

## Getting started

Requirements: Node.js 18+ and npm.

```bash
git clone git@github.com:manalilib/betterTanza.git
cd betterTanza
npm install
cp env.example .env.local   # then edit the values
npm run dev                 # http://localhost:5173
```

## Scripts

- `npm run dev`: start the development server
- `npm run build`: type-check and build for production (this is the project's typecheck)
- `npm run preview`: preview the production build
- `npm run lint` / `npm run lint:fix`: ESLint
- `npm run format` / `npm run format:check`: Prettier

## Project structure

```
content/
├── government/         # Government pages (Markdown, YAML, companion JSON)
├── services/           # Service pages grouped by category
└── _drafts/            # Pages not yet published (need Tanza-specific facts)

src/
├── components/         # home/, layout/ (Navbar, Footer, InfoBar), sections/, ui/
├── data/               # YAML and TS data (categories, navigation, projects)
├── i18n/               # Translations (en, fil)
├── lib/                # Markdown and YAML loaders
├── pages/              # Route components
└── types/              # TypeScript types
api/
└── visits.ts           # Vercel function backing the footer visit counter
```

## Contributing content

1. Find the page under `content/services/` or `content/government/`.
2. Edit the `.md` file. See [CONTENT-MANAGEMENT.md](CONTENT-MANAGEMENT.md) for a no-Git walkthrough and [CONTENT-GUIDE.md](CONTENT-GUIDE.md) for writing guidelines.
3. Cite where each fact came from. Prefer [tanza.gov.ph](https://www.tanza.gov.ph) and the municipal offices themselves.

Content that still needs Tanza facts is tracked in [TANZA-CONTENT-TODO.md](TANZA-CONTENT-TODO.md).

Deployment notes are in [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md).

## License

Released under the Creative Commons Zero (CC0) license. See [LICENSE](LICENSE).

## Acknowledgments

- Based on the open-source [betterlocalgov](https://github.com/iyanski/betterlocalgov) starter by iyanski and contributors
- UI components by [@bettergov/kapwa](https://github.com/bettergov/kapwa)
- Built with React, Vite, Tailwind CSS, i18next and Lucide icons

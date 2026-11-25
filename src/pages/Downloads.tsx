import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  Download,
  FileText,
  Map,
  ExternalLink,
  FolderOpen,
  AlertTriangle,
} from 'lucide-react';
import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import { HERO_GRADIENT } from '../lib/brand';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  {
    label: 'Transparency Documents',
    href: '/government/transparency-documents',
  },
  {
    label: 'Planning Docs & Downloads',
    href: '/government/transparency-documents/downloads',
  },
];

// Files that actually exist in /public/files/. Add a filename here after
// uploading the PDF; documents not listed show "Awaiting upload" instead of a
// link that would 404.
const AVAILABLE_FILES = new Set<string>([]);

const CLUP_DOCS = [
  {
    name: 'CLUP Vol. 3 — Geographic & Political Profile',
    file: 'CLUP-Geographic-Political-Profile.pdf',
  },
  {
    name: 'CLUP Vol. 3 — Population Changes',
    file: 'CLUP-Population-Changes.pdf',
  },
  {
    name: 'CLUP Vol. 3 — Population Projections & Estimates',
    file: 'CLUP-Population-Projections.pdf',
  },
  {
    name: 'CLUP Vol. 3 — Population Composition',
    file: 'CLUP-Population-Composition.pdf',
  },
  {
    name: 'CLUP Vol. 3 — Population Exposure & Hazard Risk',
    file: 'CLUP-Hazard-Risk.pdf',
  },
  { name: 'CLUP Vol. 3 — Education', file: 'CLUP-Education.pdf' },
  { name: 'CLUP Vol. 3 — Health', file: 'CLUP-Health.pdf' },
  { name: 'CLUP Vol. 3 — Housing', file: 'CLUP-Housing.pdf' },
  {
    name: 'CLUP Vol. 3 — Protective Services',
    file: 'CLUP-Protective-Services.pdf',
  },
  {
    name: 'CLUP Vol. 3 — Social Welfare Services',
    file: 'CLUP-Social-Welfare.pdf',
  },
];

const CDP_DOCS = [
  { name: 'CDP Chapter 1 — Introduction & Profile', file: 'CDP-Chapter-1.pdf' },
  { name: 'CDP Chapter 2 — Development Challenges', file: 'CDP-Chapter-2.pdf' },
  {
    name: 'CDP Chapter 3 — Social Development Plan',
    file: 'CDP-Chapter-3-Social.pdf',
  },
  {
    name: 'CDP Chapter 4 — Economic Development Plan',
    file: 'CDP-Chapter-4-Economic.pdf',
  },
  {
    name: 'CDP Chapter 5 — Infrastructure Plan & Annexes',
    file: 'CDP-Chapter-5-Infra.pdf',
  },
];

const ELA_DOCS = [
  { name: 'ELA 2022–2025 Part 1', file: 'ELA-2022-2025-Part1.pdf' },
  { name: 'ELA 2022–2025 Part 2', file: 'ELA-2022-2025-Part2.pdf' },
  { name: 'ELA 2022–2025 Part 3', file: 'ELA-2022-2025-Part3.pdf' },
];

const MAP_DOCS = [
  { name: 'Existing General Land Use Map', file: 'Tanza-Land-Use-Map.pdf' },
  { name: 'Zoning Map — Tanza', file: 'Tanza-Zoning-Map.pdf' },
];

const TOTAL_DOCS =
  CLUP_DOCS.length + CDP_DOCS.length + ELA_DOCS.length + MAP_DOCS.length;

function DocSection({
  title,
  subtitle,
  accent,
  emoji,
  icon: Icon,
  docs,
}: {
  title: string;
  subtitle: string;
  accent: string;
  emoji: string;
  icon: React.ComponentType<{ className?: string }>;
  docs: { name: string; file: string }[];
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 mb-6">
      <div
        className={`bg-gradient-to-r ${accent} px-6 py-5 flex items-start justify-between`}
      >
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
            <Icon className="h-3 w-3" />
            Planning Document
          </span>
          <h3 className="text-white font-black text-base leading-tight">
            {title}
          </h3>
          <p className="text-white/70 text-xs mt-1">{subtitle}</p>
        </div>
        <span className="text-3xl ml-4 shrink-0 select-none">{emoji}</span>
      </div>
      <div className="divide-y divide-gray-50">
        {docs.map(doc => (
          <div
            key={doc.file}
            className="flex items-center justify-between px-5 py-3.5 gap-4"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText className="h-4 w-4 text-gray-300 shrink-0" />
              <span className="text-sm text-gray-700 truncate">{doc.name}</span>
            </div>
            {AVAILABLE_FILES.has(doc.file) ? (
              <a
                href={`/files/${doc.file}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors shrink-0"
              >
                <Download className="h-3 w-3" />
                PDF
              </a>
            ) : (
              <span className="inline-flex items-center text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg shrink-0">
                Awaiting upload
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Downloads() {
  return (
    <>
      <SEO
        title="Planning Documents & Downloads — Municipality of Tanza"
        description="Download the CLUP, Comprehensive Development Plan, ELA 2022–2025, and land use maps for the Municipality of Tanza, Cavite."
      />

      <div
        className="relative text-white overflow-hidden"
        style={{
          background: HERO_GRADIENT,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-primary-300 text-xs font-bold uppercase tracking-widest">
            <FolderOpen className="h-3.5 w-3.5" />
            Transparency · Planning Documents
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Planning Documents & Downloads
          </h1>
          <p className="text-primary-100 text-base max-w-lg leading-relaxed mb-8">
            Official CLUP, CDP, ELA, and land use maps guiding Tanza's growth
            and development.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              [String(TOTAL_DOCS), 'Documents'],
              ['3', 'Plan Categories'],
              ['2022–2030', 'Plan Period'],
            ].map(([val, lbl]) => (
              <div
                key={lbl}
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5"
              >
                <span className="text-sm font-black text-white">{val}</span>
                <span className="text-xs text-primary-300">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex gap-4">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              These planning documents have not been uploaded to this portal
              yet. Request the latest versions from the Municipal Planning and
              Development Office, through the{' '}
              <a
                href="https://www.tanza.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline underline-offset-2"
              >
                official Tanza website
              </a>{' '}
              or an{' '}
              <a
                href="https://www.foi.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline underline-offset-2"
              >
                FOI request
              </a>
              .
            </p>
          </div>

          <DocSection
            title="Comprehensive Land Use Plan (CLUP)"
            subtitle="Primary land use policy document guiding how land is allocated across all zones in Tanza"
            accent="from-primary-700 to-primary-500"
            emoji="🗺️"
            icon={Map}
            docs={CLUP_DOCS}
          />

          <DocSection
            title="Comprehensive Development Plan (CDP)"
            subtitle="Municipality's development goals, strategies, and investment program across all sectors"
            accent="from-primary-600 to-brand-700"
            emoji="📘"
            icon={FileText}
            docs={CDP_DOCS}
          />

          <DocSection
            title="Executive-Legislative Agenda (ELA) 2022–2025"
            subtitle="Joint program of work of the Mayor and Municipal Council for the previous (2022–2025) term"
            accent="from-brand-600 to-brand-700"
            emoji="📜"
            icon={FileText}
            docs={ELA_DOCS}
          />

          <DocSection
            title="Land Use Maps"
            subtitle="Official zoning and general land use maps for the Municipality of Tanza"
            accent="from-amber-500 to-orange-600"
            emoji="🗾"
            icon={Map}
            docs={MAP_DOCS}
          />

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Source
              </p>
              <p className="text-sm text-gray-600">
                Official Municipality of Tanza Government Planning Documents.
                For latest versions visit the official website or file an FOI
                request.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://www.tanza.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Official Site
              </a>
              <a
                href="https://www.foi.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                FOI Portal
              </a>
            </div>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}

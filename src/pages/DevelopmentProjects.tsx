import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import {
  Building2,
  MapPin,
  ExternalLink,
  Calendar,
  TrendingUp,
  GraduationCap,
  Layers,
  Construction,
  Zap,
} from 'lucide-react';

type ProjectStatus =
  | 'announced'
  | 'under-construction'
  | 'ongoing'
  | 'operational';
type ProjectCategory =
  | 'commercial'
  | 'infrastructure'
  | 'township'
  | 'education';

interface Project {
  id: number;
  name: string;
  developer: string;
  location: string;
  status: ProjectStatus;
  statusLabel: string;
  category: ProjectCategory;
  emoji: string;
  accent: string;
  description: string;
  highlights: string[];
  source?: string;
  sourceLabel?: string;
  estimatedCompletion?: string;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  announced: 'bg-amber-50 text-amber-700 border-amber-200',
  'under-construction': 'bg-orange-50 text-orange-700 border-orange-200',
  ongoing: 'bg-blue-50 text-blue-700 border-blue-200',
  operational: 'bg-green-50 text-green-700 border-green-200',
};

const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  commercial: { label: 'Commercial', Icon: Building2 },
  infrastructure: { label: 'Infrastructure', Icon: Construction },
  township: { label: 'Township', Icon: Layers },
  education: { label: 'Education', Icon: GraduationCap },
};

const DEVELOPMENT_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'CALAX–Tanza Interchange',
    developer: 'MPCALA Holdings, Inc. / Metro Pacific Tollways (MPTC)',
    location: 'Tanza, Cavite — along the CALAX alignment',
    status: 'under-construction',
    statusLabel: 'Under Construction',
    category: 'infrastructure',
    emoji: '🛣️',
    accent: 'from-orange-500 to-amber-600',
    description:
      'The Cavite-Laguna Expressway (CALAX) passes through Tanza with a dedicated interchange, giving residents direct expressway access and dramatically cutting travel time to Metro Manila.',
    highlights: [
      'Dedicated Tanza interchange for direct expressway access',
      'Connects to CAVITEX and SLEX',
      'Reduces Metro Manila–Tanza travel time significantly',
      'Part of the CALAX ~45 km CALABARZON expressway network',
    ],
    source: 'https://mptc.com.ph',
    sourceLabel: 'MPTC Official',
    estimatedCompletion: '2025–2026',
  },
  {
    id: 2,
    name: 'Tanza Public Market Modernization',
    developer: 'Municipality of Tanza',
    location: 'Poblacion, Tanza, Cavite',
    status: 'announced',
    statusLabel: 'Announced',
    category: 'commercial',
    emoji: '🏬',
    accent: 'from-blue-600 to-indigo-700',
    description:
      'A planned modernization of the Tanza public market to improve sanitation, vendor space, and market facilities for the benefit of local vendors and residents.',
    highlights: [
      'Modern market facilities with improved sanitation',
      'Expanded vendor stalls and storage',
      'Improved drainage and flood control',
      'Central market hub for Tanza residents',
    ],
    estimatedCompletion: 'TBA',
  },
  {
    id: 3,
    name: 'Tanza TESDA Skills Training Center',
    developer: 'Municipality of Tanza / TESDA',
    location: 'Tanza, Cavite',
    status: 'announced',
    statusLabel: 'Announced',
    category: 'education',
    emoji: '🎓',
    accent: 'from-violet-600 to-purple-700',
    description:
      'A planned TESDA-accredited skills training center to provide technical-vocational education to Tanza residents, improving local employment opportunities.',
    highlights: [
      'TESDA-accredited technical-vocational programs',
      'Free or subsidized training for Tanza residents',
      'Focus on in-demand trade and technology skills',
      'Supports local employment and entrepreneurship',
    ],
    estimatedCompletion: 'TBA',
  },
  {
    id: 4,
    name: 'Coastal Flood Control & Bay Walk',
    developer: 'Municipality of Tanza / DPWH',
    location: 'Coastal Barangays, Tanza, Cavite',
    status: 'ongoing',
    statusLabel: 'Active Development',
    category: 'infrastructure',
    emoji: '🌊',
    accent: 'from-teal-600 to-cyan-700',
    description:
      "Ongoing flood control and coastal protection works along Tanza's Manila Bay coastline, combined with a planned bay walk promenade for residents and visitors.",
    highlights: [
      'Coastal flood control and sea wall improvements',
      'Planned bay walk promenade along Manila Bay',
      'Protection for coastal barangays',
      'Tourism and recreation potential',
    ],
    estimatedCompletion: 'Multi-phase (ongoing)',
  },
];

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Development Projects', href: '/development-projects' },
];

export default function DevelopmentProjects() {
  return (
    <>
      <SEO
        title="Development Projects — Tanza, Cavite"
        description="Major development projects shaping Tanza, Cavite — CALAX interchange, public market modernization, TESDA skills center, and coastal flood control."
        keywords="Tanza development projects, CALAX Tanza interchange, Tanza public market, TESDA Tanza, coastal flood control"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #001044 0%, #003087 50%, #0066eb 100%)',
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
          <div className="flex items-center gap-2 mb-4 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="h-3.5 w-3.5" />
            Tanza, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Development Projects
          </h1>
          <p className="text-blue-100 text-base max-w-lg leading-relaxed mb-8">
            Major investments and infrastructure projects that are shaping the
            future of Tanza — from expressway access and market modernization to
            skills training and coastal protection.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = DEVELOPMENT_PROJECTS.filter(
                p => p.category === key
              ).length;
              if (count === 0) return null;
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <meta.Icon className="h-3 w-3" />
                  {meta.label}
                  <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom wave */}
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

      {/* Main content */}
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Count badge + disclaimer */}
          <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
            <h2 className="text-lg font-black text-gray-900">
              {DEVELOPMENT_PROJECTS.length} Major Development Projects
            </h2>
            <span className="text-xs text-gray-400 font-medium text-right leading-relaxed max-w-xs">
              Information sourced from developer announcements, DPWH, and public
              records. Status may change — visit official channels for latest
              updates.
            </span>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEVELOPMENT_PROJECTS.map((project, idx) => {
              const meta = CATEGORY_META[project.category];
              const CatIcon = meta.Icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Colored top bar */}
                  <div
                    className={`bg-gradient-to-r ${project.accent} p-5 flex items-start justify-between`}
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        <CatIcon className="h-3 w-3" />
                        {meta.label}
                      </span>
                      <h3 className="text-white font-black text-lg leading-tight">
                        {project.name}
                      </h3>
                    </div>
                    <span className="text-4xl ml-4 shrink-0 select-none group-hover:scale-110 transition-transform duration-200">
                      {project.emoji}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    {/* Status + completion */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold border px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}
                      >
                        <Zap className="h-2.5 w-2.5" />
                        {project.statusLabel}
                      </span>
                      {project.estimatedCompletion && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                          <Calendar className="h-2.5 w-2.5" />
                          {project.estimatedCompletion}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map(h => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-gray-500"
                        >
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Location */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-2 text-xs text-gray-400 hover:text-primary-700 transition-colors group/map mb-1"
                    >
                      <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 group-hover/map:text-primary-600 transition-colors" />
                      <span className="group-hover/map:underline">
                        {project.location}
                      </span>
                    </a>

                    {/* Developer */}
                    <div className="flex items-start gap-2 text-xs text-gray-400">
                      <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      <span>{project.developer}</span>
                    </div>

                    {/* Source link */}
                    {project.source && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {project.sourceLabel ?? 'Official Source'}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Bottom index */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                      Project #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer footer */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-black text-amber-900 text-sm mb-1">
                  Note on Project Information
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Project statuses, timelines, and details are compiled from
                  developer announcements, DPWH public records, and published
                  reports. This page is for informational purposes only. For
                  official and current information, please visit each project's
                  official channels or the Municipality of Tanza.
                </p>
              </div>
            </div>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}

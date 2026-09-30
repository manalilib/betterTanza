export type ProjectStatus =
  | 'announced'
  | 'under-construction'
  | 'ongoing'
  | 'operational';
export type ProjectCategory =
  | 'commercial'
  | 'infrastructure'
  | 'township'
  | 'education';

export interface Project {
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

export const DEVELOPMENT_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'CALAX — Tanza Interchange',
    developer: 'MPCALA Holdings, Inc. / Metro Pacific Tollways (MPTC)',
    location: 'Tanza, Cavite — along CALAX corridor',
    status: 'under-construction',
    statusLabel: 'Under Construction',
    category: 'infrastructure',
    emoji: '🛣️',
    accent: 'from-orange-500 to-amber-600',
    description:
      "The Cavite-Laguna Expressway (CALAX) passes through Cavite, and a planned interchange serving Tanza will dramatically cut travel time to Metro Manila via CAVITEX and southward to SLEX in Laguna. This infrastructure upgrade is a major catalyst for Tanza's economic growth.",
    highlights: [
      'Direct expressway access for Tanza residents',
      'Connects to CAVITEX (Manila) and SLEX (Laguna/Batangas)',
      'Expected to reduce Metro Manila–Tanza travel to under 40 minutes',
      'Stimulates commercial and industrial investment along the corridor',
    ],
    source: 'https://mptc.com.ph',
    sourceLabel: 'MPTC Official',
    estimatedCompletion: '2025–2026 (full CALAX)',
  },
  {
    id: 2,
    name: 'Tanza Coastal Road Development',
    developer: 'DPWH Region IV-A / Municipal Government of Tanza',
    location: 'Coastal barangays — Dalahican, Bucana, Balsahan',
    status: 'ongoing',
    statusLabel: 'Active Development',
    category: 'infrastructure',
    emoji: '🛤️',
    accent: 'from-blue-700 to-blue-500',
    description:
      "Ongoing improvements to the coastal road network linking Tanza's Manila Bay barangays. These projects improve access for fishing communities, facilitate coastal trade, and open up the shoreline for eco-tourism and commerce.",
    highlights: [
      'Road widening and concreting in coastal barangays',
      'Improved access for fishermen and coastal communities',
      'Supports eco-tourism development along Manila Bay',
      'Funded through IRA 20% Development Fund + DPWH',
    ],
    estimatedCompletion: 'Multi-phase (ongoing)',
  },
  {
    id: 3,
    name: 'SM-Anchored Commercial Corridor',
    developer: 'Multiple private developers',
    location: "Governor's Drive / Molino–Paliparan–Tanza corridor, Cavite",
    status: 'announced',
    statusLabel: 'Announced',
    category: 'commercial',
    emoji: '🏬',
    accent: 'from-indigo-600 to-violet-700',
    description:
      "The Governor's Drive commercial corridor connecting Bacoor, Dasmariñas, General Trias, and Tanza is attracting commercial investment from major developers. Tanza's position along this corridor makes it a prime target for retail and mixed-use developments in the near term.",
    highlights: [
      "Prime location along the high-traffic Governor's Drive corridor",
      'Growing residential base of 300K+ population driving retail demand',
      'Multiple commercial lots along the national road being developed',
      'Proximity to CALAX interchange increases commercial viability',
    ],
    estimatedCompletion: 'TBA',
  },
  {
    id: 4,
    name: 'Tanza Industrial Estate Expansion',
    developer: 'Various industrial estate operators',
    location: 'Biga, Bancal, and adjacent barangays, Tanza, Cavite',
    status: 'ongoing',
    statusLabel: 'Active Development',
    category: 'township',
    emoji: '🏭',
    accent: 'from-slate-600 to-gray-700',
    description:
      "Tanza hosts industrial estates and light manufacturing zones that are expanding to accommodate growing demand from CALABARZON's industrial boom. These developments generate employment for thousands of Tanza residents and contribute to the local economy.",
    highlights: [
      'Existing industrial zones expanding their footprint',
      'Light manufacturing, logistics, and warehousing tenants',
      'Direct employment generation for local residents',
      "Aligned with CALABARZON's status as the Philippines' top industrial region",
    ],
    estimatedCompletion: 'Ongoing',
  },
  {
    id: 5,
    name: 'Public School Infrastructure Program',
    developer: 'DepEd Region IV-A / Municipal Government of Tanza',
    location: 'Various barangays, Municipality of Tanza',
    status: 'ongoing',
    statusLabel: 'Active Development',
    category: 'education',
    emoji: '🏫',
    accent: 'from-blue-800 to-blue-600',
    description:
      'The municipality continues to invest in public school infrastructure through SEF (Special Education Fund) allocations and DepEd partnerships — constructing new classrooms, repairing existing facilities, and equipping schools to serve the growing student population.',
    highlights: [
      'Funded by SEF (1% of real property tax)',
      'New classroom construction in fast-growing barangays',
      'Rehabilitation of aging school facilities',
      "Supports DepEd's goal of zero classroom backlog",
    ],
    estimatedCompletion: 'Multi-phase (ongoing)',
  },
];

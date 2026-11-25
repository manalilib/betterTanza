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
  developer?: string;
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
    name: 'Cavite Gateway Terminal',
    location: 'Tanza, Cavite',
    status: 'operational',
    statusLabel: 'Operational',
    category: 'infrastructure',
    emoji: '🚢',
    accent: 'from-orange-500 to-amber-600',
    description:
      'The Cavite Gateway Terminal is located in Tanza and is the first roll-on, roll-off (RoRo) barge terminal in the Philippines. The Philippine News Agency reported its opening in November 2018.',
    highlights: [
      'First roll-on, roll-off barge terminal in the Philippines',
      'Opening reported by the Philippine News Agency in November 2018',
    ],
    source: 'https://www.pna.gov.ph/articles/1054308',
    sourceLabel: 'Philippine News Agency',
    estimatedCompletion: 'Opened 2018',
  },
  {
    id: 2,
    name: 'SM City Tanza',
    developer: 'SM Prime Holdings',
    location: 'Antero Soriano Highway corner Dr. Solis St., Daang Amaya 2',
    status: 'operational',
    statusLabel: 'Operational',
    category: 'commercial',
    emoji: '🏬',
    accent: 'from-primary-600 to-brand-700',
    description:
      'SM City Tanza is the first SM Supermall in Tanza. It sits on an 8.67-hectare site with a gross floor area of about 60,029 m², and opened on October 14, 2022.',
    highlights: [
      'First SM Supermall in Tanza',
      '8.67-hectare site, about 60,029 m² gross floor area',
      'Opened with 89% of the available space leased',
    ],
    source: 'https://en.wikipedia.org/wiki/SM_City_Tanza',
    sourceLabel: 'Wikipedia — SM City Tanza',
    estimatedCompletion: 'Opened October 14, 2022',
  },
];

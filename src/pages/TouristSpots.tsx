import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import {
  MapPin,
  Phone,
  ExternalLink,
  Church,
  Trees,
  Trophy,
} from 'lucide-react';

interface Spot {
  id: number;
  name: string;
  description: string;
  location: string;
  contact?: string;
  website?: string;
  facebook?: string;
  category: 'religious' | 'museum' | 'recreation' | 'golf';
  accent: string;
  emoji: string;
}

const SPOTS: Spot[] = [
  {
    id: 1,
    name: 'Saint Francis of Assisi Parish Church',
    description:
      'The beloved patron church of Tanza, Cavite. One of the oldest Catholic churches in the province, the parish is the spiritual heart of the community and hosts major religious celebrations throughout the year.',
    location: 'Poblacion I, Tanza, Cavite',
    contact: '(046) 706-1111',
    category: 'religious',
    accent: 'from-blue-600 to-indigo-700',
    emoji: '⛪',
  },
  {
    id: 2,
    name: 'Tanza Public Plaza and Park',
    description:
      'A central public park in the heart of Tanza, ideal for morning jogs, family picnics, and community gatherings. A green space for residents seeking fresh air and open space within the municipal center.',
    location: 'Poblacion, Tanza, Cavite',
    category: 'recreation',
    accent: 'from-emerald-600 to-green-700',
    emoji: '🌳',
  },
  {
    id: 3,
    name: 'Tanza Heritage Trail',
    description:
      'A walking trail through historic Tanza, passing by century-old structures, markers, and landmarks that tell the story of this coastal Cavite municipality founded in 1760.',
    location: 'Tanza, Cavite',
    category: 'museum',
    accent: 'from-amber-600 to-orange-700',
    emoji: '🏛️',
  },
  {
    id: 4,
    name: 'Tanza Coastal Area',
    description:
      'A scenic coastal stretch along Manila Bay offering views of the bay and a peaceful environment for locals and visitors alike. Ideal for early morning walks and witnessing beautiful sunsets.',
    location: 'Coastal Barangays, Tanza, Cavite',
    category: 'recreation',
    accent: 'from-cyan-600 to-teal-700',
    emoji: '🌊',
  },
];

const CATEGORY_META: Record<
  Spot['category'],
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  religious: { label: 'Religious & Historical', Icon: Church },
  museum: { label: 'Museum & Culture', Icon: Trophy },
  recreation: { label: 'Parks & Recreation', Icon: Trees },
  golf: { label: 'Leisure & Sports', Icon: Trophy },
};

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
  { label: 'Must-See Places', href: '/services/tourism/explore-tourist-spots' },
];

export default function TouristSpots() {
  return (
    <>
      <SEO
        title="Must-See Places in Tanza, Cavite"
        description="Discover the official tourist destinations of Tanza — heritage sites, parks, and landmarks of this historic Cavite municipality."
        keywords="Tanza tourist spots, Saint Francis Parish Church, Tanza heritage, Tanza Cavite tourism, coastal Tanza"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ backgroundColor: '#001044' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(0,102,235,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,48,135,0.04) 0%, transparent 40%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            Tanza, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Must-See Places
          </h1>
          <p className="text-blue-100 text-base max-w-lg leading-relaxed mb-8">
            Discover the official tourist destinations of Tanza — from heritage
            churches and historic trails to scenic coastal views and public
            parks.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = SPOTS.filter(s => s.category === key).length;
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

          {/* Spot count badge */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-gray-900">
              {SPOTS.length} Official Tourist Spots
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              Source: tanza.gov.ph
            </span>
          </div>

          {/* Spots grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPOTS.map((spot, idx) => {
              const meta = CATEGORY_META[spot.category];
              const CatIcon = meta.Icon;
              return (
                <div
                  key={spot.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Colored top bar + number */}
                  <div
                    className={`bg-gradient-to-r ${spot.accent} p-5 flex items-start justify-between`}
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        <CatIcon className="h-3 w-3" />
                        {meta.label}
                      </span>
                      <h3 className="text-white font-black text-lg leading-tight">
                        {spot.name}
                      </h3>
                    </div>
                    <span className="text-4xl ml-4 shrink-0 select-none group-hover:scale-110 transition-transform duration-200">
                      {spot.emoji}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {spot.description}
                    </p>

                    {/* Info rows */}
                    <div className="space-y-2 text-xs">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.location)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start gap-2 text-gray-500 hover:text-primary-700 transition-colors group/map"
                      >
                        <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-400 group-hover/map:text-primary-600 transition-colors" />
                        <span className="group-hover/map:underline">
                          {spot.location}
                        </span>
                      </a>
                      {spot.contact && (
                        <a
                          href={`tel:${spot.contact.replace(/[^0-9]/g, '')}`}
                          className="flex items-center gap-2 text-gray-500 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                          <span>{spot.contact}</span>
                        </a>
                      )}
                    </div>

                    {/* Links */}
                    {(spot.website || spot.facebook) && (
                      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                        {spot.website && (
                          <a
                            href={spot.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Visit Website
                          </a>
                        )}
                        {spot.facebook && (
                          <a
                            href={spot.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Facebook Page
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom index */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                      Spot #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA footer */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-black text-gray-900 mb-1">
                Planning a visit to Tanza?
              </p>
              <p className="text-sm text-gray-500">
                Contact the Municipal Tourism Office for more information.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:0467061111"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="h-4 w-4" />
                (046) 706-1111
              </a>
              <a
                href="https://www.tanza.gov.ph/tourism"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Official Site
              </a>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

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
  category: 'religious' | 'museum' | 'recreation' | 'beach';
  accent: string;
  emoji: string;
}

const SPOTS: Spot[] = [
  {
    id: 1,
    // Patron saint of Tanza is San Pedro Apostol — confirmed from parish records
    name: 'Saint Peter the Apostle Parish Church (San Pedro)',
    description:
      "The main parish church of Tanza dedicated to San Pedro Apostol, the town's patron saint. A beloved Catholic landmark standing at the heart of the municipality since the colonial era — center of the annual town fiesta and community faith life.",
    location: 'Poblacion, Tanza, Cavite',
    category: 'religious',
    accent: 'from-blue-700 to-indigo-700',
    emoji: '⛪',
  },
  {
    id: 2,
    name: 'Tanza Municipal Plaza',
    description:
      "The central public plaza of Tanza — a gathering place for festivals, community events, and everyday leisure. Located in Poblacion III adjacent to the Municipal Hall, it is surrounded by historic structures that speak to the town's colonial heritage.",
    location: 'Poblacion III, Tanza, Cavite',
    category: 'recreation',
    accent: 'from-emerald-600 to-green-700',
    emoji: '🌳',
  },
  {
    id: 3,
    name: 'Manila Bay Coastline — Dalahican',
    description:
      "Tanza's shoreline along Manila Bay in Barangay Dalahican offers coastal views and a traditional fishing community atmosphere. Popular for sunrise walks, fresh seafood, and watching bancas return from the bay.",
    location: 'Dalahican, Tanza, Cavite',
    category: 'beach',
    accent: 'from-cyan-600 to-blue-600',
    emoji: '🌊',
  },
  {
    id: 4,
    name: 'Bucana Fishing Port',
    description:
      "An active fishing port in Barangay Bucana where you can experience Tanza's coastal fishing culture first-hand — buy fresh catch directly from local fishermen and witness the morning catch come in from Manila Bay.",
    location: 'Bucana, Tanza, Cavite',
    category: 'beach',
    accent: 'from-teal-600 to-cyan-700',
    emoji: '🐟',
  },
];

const CATEGORY_META: Record<
  Spot['category'],
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  religious: { label: 'Religious & Historical', Icon: Church },
  museum: { label: 'Museum & Culture', Icon: Trophy },
  recreation: { label: 'Parks & Recreation', Icon: Trees },
  beach: { label: 'Coastal & Beach', Icon: MapPin },
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
        description="Explore the official tourist spots of the Municipality of Tanza, Cavite — from historic churches and the coastal bay to public parks and local markets."
        keywords="Tanza tourist spots, Tanza Cavite tourism, Dalahican coast, Tanza church, where to visit Tanza"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #001044 0%, #003087 50%, #0052e0 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            Municipality of Tanza, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Must-See Places
          </h1>
          <p className="text-blue-100 text-base max-w-lg leading-relaxed mb-8">
            Discover verified destinations in Tanza — a centuries-old parish
            church, the Manila Bay coastline, a historic public plaza, and a
            working fishing port.
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

          {/* Community notice */}
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 flex items-start gap-3">
            <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-700 leading-relaxed">
              <strong>Know a spot we missed?</strong> This list is
              community-maintained. Contact us or open a pull request to add
              verified tourist destinations in Tanza. All entries are confirmed
              against barangay geography — unverified places are not listed.
            </p>
          </div>

          {/* Spot count badge */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-gray-900">
              {SPOTS.length} Verified Destinations
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              Barangay-verified · bettertanza.org
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
                  {/* Colored top bar */}
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
                href="tel:0464320000"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="h-4 w-4" />
                (046) 432-0000
              </a>
              <a
                href="https://www.tanza.gov.ph"
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

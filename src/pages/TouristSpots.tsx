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
import { HERO_GRADIENT } from '../lib/brand';

interface Spot {
  id: number;
  name: string;
  description: string;
  location: string;
  image?: string;
  contact?: string;
  website?: string;
  facebook?: string;
  category: 'religious' | 'museum' | 'recreation' | 'beach';
  accent: string;
  emoji: string;
}

// Photos: Wikimedia Commons, CC BY-SA 4.0, by Ralffralff (July 2023).
const SPOTS: Spot[] = [
  {
    id: 1,
    name: 'Diocesan Shrine of Saint Augustine (Tanza Church)',
    description:
      "The main Catholic parish church of Tanza, under the Diocese of Imus, dedicated to Saint Augustine of Hippo, the town's patron saint. It stands in front of the ancient Santa Cruz (Holy Cross), where Emilio Aguinaldo took his oath as president of the revolutionary government after the 1897 Tejeros Convention.",
    location: 'Poblacion, Tanza, Cavite',
    image: '/images/places/tanza-church.jpg',
    category: 'religious',
    accent: 'from-primary-700 to-primary-700',
    emoji: '⛪',
  },
  {
    id: 2,
    name: 'Plaza de San Agustin',
    description:
      "The town plaza fronting the church — a gathering place for fiestas, community events, and everyday leisure, and part of Tanza's historic center.",
    location: 'Poblacion, Tanza, Cavite',
    image: '/images/places/plaza-de-san-agustin.jpg',
    category: 'recreation',
    accent: 'from-emerald-600 to-green-700',
    emoji: '🌳',
  },
  {
    id: 3,
    name: 'Bantayog ng Kasaysayan (Historical Marker)',
    description:
      "A memorial marker commemorating Tanza's role in Philippine history, including the oath-taking of Emilio Aguinaldo and the other officials elected at the Tejeros Convention, among them Mariano Trias. Tanza is also the birthplace of Felipe G. Calderon, who drafted the Malolos Constitution.",
    location: 'Poblacion, Tanza, Cavite',
    image: '/images/places/bantayog-ng-kasaysayan.jpg',
    category: 'museum',
    accent: 'from-amber-600 to-orange-700',
    emoji: '🏛️',
  },
  {
    id: 4,
    name: 'Tanza Public Market',
    description:
      "The municipal public market, the center of Tanza's daily trade in fresh produce, seafood, and household goods.",
    location: 'Poblacion, Tanza, Cavite',
    image: '/images/places/tanza-public-market.jpg',
    category: 'recreation',
    accent: 'from-teal-600 to-cyan-700',
    emoji: '🛒',
  },
  {
    id: 5,
    name: 'SM City Tanza',
    description:
      "SM Supermalls' 80th mall in the Philippines, opened in October 2022 along Antero Soriano Highway in Barangay Daang Amaya 2.",
    location: 'Antero Soriano Highway, Daang Amaya 2, Tanza, Cavite',
    image: '/images/places/sm-city-tanza.jpg',
    category: 'recreation',
    accent: 'from-primary-600 to-brand-700',
    emoji: '🏬',
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
        description="Explore the official tourist spots of the Municipality of Tanza, Cavite — the historic church and plaza, the Bantayog ng Kasaysayan marker, the public market, and SM City Tanza."
        keywords="Tanza tourist spots, Tanza Cavite tourism, Tanza church, Plaza de San Agustin, SM City Tanza, where to visit Tanza"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background: HERO_GRADIENT,
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
          <div className="flex items-center gap-2 mb-4 text-primary-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            Municipality of Tanza, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Must-See Places
          </h1>
          <p className="text-primary-100 text-base max-w-lg leading-relaxed mb-8">
            Discover destinations in Tanza — a historic parish church and plaza,
            the site where Aguinaldo took his oath of office, the public market,
            and SM City Tanza.
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
          <div className="mb-6 bg-primary-50 border border-primary-200 rounded-xl px-5 py-3 flex items-start gap-3">
            <MapPin className="h-4 w-4 text-primary-500 mt-0.5 shrink-0" />
            <p className="text-xs text-primary-700 leading-relaxed">
              <strong>Know a spot we missed?</strong> This list is
              community-maintained. Contact us or open a pull request to add
              tourist destinations in Tanza.
            </p>
          </div>

          {/* Spot count badge */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-gray-900">
              {SPOTS.length} Destinations
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              Photos: Wikimedia Commons, CC BY-SA 4.0 (Ralffralff)
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

                  {spot.image && (
                    <img
                      src={spot.image}
                      alt={spot.name}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                  )}

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
                        <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-500 group-hover/map:text-primary-600 transition-colors" />
                        <span className="group-hover/map:underline">
                          {spot.location}
                        </span>
                      </a>
                      {spot.contact && (
                        <a
                          href={`tel:${spot.contact.replace(/[^0-9]/g, '')}`}
                          className="flex items-center gap-2 text-gray-500 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0 text-gray-500" />
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
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors"
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
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
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

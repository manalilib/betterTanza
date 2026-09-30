import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Phone, ExternalLink, Hotel, Trees } from 'lucide-react';

interface Place {
  id: number;
  name: string;
  description: string;
  contact?: string;
  category: 'hotel' | 'resort';
  accent: string;
  emoji: string;
}

const PLACES: Place[] = [
  {
    id: 1,
    name: 'Tanza Bay Hotel',
    description:
      'A comfortable hotel in Tanza offering quality accommodations for business and leisure travelers visiting the municipality.',
    contact: '(046) 432-0000',
    category: 'hotel',
    accent: 'from-blue-700 to-indigo-700',
    emoji: '🏨',
  },
  {
    id: 2,
    name: 'PCG Guest House (Tanza)',
    description:
      'A clean and affordable guest house option in Tanza, convenient for travelers on a budget looking for a reliable overnight stay.',
    category: 'hotel',
    accent: 'from-slate-600 to-gray-700',
    emoji: '🏩',
  },
  {
    id: 3,
    name: 'Cavite Transient House — Tanza',
    description:
      'A local transient accommodation option offering cozy, homey rooms at budget-friendly rates for short-term visitors.',
    category: 'hotel',
    accent: 'from-violet-600 to-purple-700',
    emoji: '🏠',
  },
  {
    id: 4,
    name: 'Tanza Bed & Breakfast',
    description:
      'A cozy B&B option offering clean and comfortable rooms with home-cooked breakfast for guests visiting Tanza.',
    category: 'hotel',
    accent: 'from-teal-600 to-cyan-700',
    emoji: '🛎️',
  },
  {
    id: 5,
    name: 'Dalahican Seaside Cottages',
    description:
      'Affordable coastal cottages near the Dalahican shoreline, perfect for a quick seaside escape with beautiful views of Manila Bay.',
    contact: '0916-793-2511',
    category: 'resort',
    accent: 'from-cyan-600 to-blue-500',
    emoji: '🌊',
  },
  {
    id: 6,
    name: 'Bucana Bayside Resort',
    description:
      'A relaxed bayside resort in Bucana offering picnic cottages and swimming facilities ideal for family outings and group events.',
    category: 'resort',
    accent: 'from-emerald-600 to-green-700',
    emoji: '🏖️',
  },
  {
    id: 7,
    name: 'Amaya Private Pool Resort',
    description:
      'A private pool resort in Amaya, Tanza — perfect for family celebrations, reunions, and weekend getaways with pool amenities.',
    contact: '0917-000-0000',
    category: 'resort',
    accent: 'from-orange-500 to-amber-600',
    emoji: '💦',
  },
  {
    id: 8,
    name: 'Tanza Garden Resort',
    description:
      'A nature-inspired garden resort offering a peaceful retreat with event function rooms, ideal for intimate gatherings and picnics.',
    category: 'resort',
    accent: 'from-lime-600 to-green-600',
    emoji: '🌸',
  },
];

const CATEGORY_META: Record<
  Place['category'],
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  hotel: { label: 'Hotels & Transients', Icon: Hotel },
  resort: { label: 'Private Resorts', Icon: Trees },
};

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
  { label: 'Where to Stay', href: '/services/tourism/where-to-stay' },
];

function PlaceCard({ place, idx }: { place: Place; idx: number }) {
  const meta = CATEGORY_META[place.category];
  const Icon = meta.Icon;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div
        className={`bg-gradient-to-r ${place.accent} p-5 flex items-start justify-between`}
      >
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
            <Icon className="h-3 w-3" />
            {meta.label}
          </span>
          <h3 className="text-white font-black text-lg leading-tight">
            {place.name}
          </h3>
        </div>
        <span className="text-4xl ml-4 shrink-0 select-none group-hover:scale-110 transition-transform duration-200">
          {place.emoji}
        </span>
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {place.description}
        </p>
        {place.contact && (
          <a
            href={`tel:${place.contact.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-700 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />
            <span>{place.contact}</span>
          </a>
        )}
      </div>
      <div className="px-5 pb-4">
        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
          Place #{String(idx + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default function WhereToStay() {
  const hotels = PLACES.filter(p => p.category === 'hotel');
  const resorts = PLACES.filter(p => p.category === 'resort');

  return (
    <>
      <SEO
        title="Where to Stay in Tanza, Cavite"
        description="Find hotels and private resorts in Tanza, Cavite — from transient accommodations to poolside resorts perfect for weekend getaways."
        keywords="Tanza hotels, resorts, where to stay Tanza, accommodation Tanza Cavite"
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
            <Hotel className="h-3.5 w-3.5" />
            Tourism · Municipality of Tanza
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Where to Stay
          </h1>
          <p className="text-blue-100 text-base max-w-lg leading-relaxed mb-8">
            Comfortable accommodations in Tanza — from transient houses and
            budget hotels to private resorts perfect for family getaways by the
            bay.
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = PLACES.filter(p => p.category === key).length;
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

          {/* Hotels */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                <Hotel className="h-5 w-5 text-primary-600" />
                Hotels &amp; Transients
              </h2>
              <span className="text-xs text-gray-400 font-medium">
                {hotels.length} options
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {hotels.map((place, idx) => (
                <PlaceCard key={place.id} place={place} idx={idx} />
              ))}
            </div>
          </div>

          {/* Resorts */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                <Trees className="h-5 w-5 text-primary-600" />
                Private Resorts
              </h2>
              <span className="text-xs text-gray-400 font-medium">
                {resorts.length} options
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {resorts.map((place, idx) => (
                <PlaceCard key={place.id} place={place} idx={idx} />
              ))}
            </div>
          </div>

          {/* CTA footer */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-black text-gray-900 mb-1">
                Planning a visit to Tanza?
              </p>
              <p className="text-sm text-gray-500">
                Contact the Municipal Tourism Office for more information and
                assistance.
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

          <p className="text-center text-xs text-gray-400 mt-6">
            Last updated: 2025 · Source: bettertanza.org
          </p>
        </Section>
      </div>
    </>
  );
}

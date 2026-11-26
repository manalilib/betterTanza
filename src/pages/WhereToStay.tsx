import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Phone, ExternalLink, Hotel, Trees, AlertTriangle } from 'lucide-react';
import { HERO_GRADIENT } from '../lib/brand';

// ---------------------------------------------------------------------------
// IMPORTANT — DATA INTEGRITY NOTICE
// All previously listed hotel/resort entries were removed because they could
// not be independently verified as real, operating establishments in Tanza.
// Listing unverified businesses on a transparency-focused civic portal would
// be misleading to residents and visitors.
//
// TO RESTORE LISTINGS: Add confirmed entries below using the Place interface.
// Sources: Tanza LGU Facebook, Google Maps (tanza municipality), DILG directory.
// ---------------------------------------------------------------------------

interface Place {
  id: number;
  name: string;
  description: string;
  contact?: string;
  website?: string;
  category: 'hotel' | 'resort';
  accent: string;
}

// No verified listings yet — set to empty pending official sourcing.
const PLACES: Place[] = [];

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
  { label: 'Where to Stay', href: '/services/tourism/where-to-stay' },
];

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
            <Hotel className="h-3.5 w-3.5" />
            Tourism · Municipality of Tanza
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Where to Stay
          </h1>
          <p className="text-primary-100 text-base max-w-lg leading-relaxed">
            Comfortable accommodations in Tanza — from transient houses and
            budget hotels to private resorts perfect for family getaways by the
            bay.
          </p>
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

          {/* Pending verification notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-amber-900 mb-1">
                Accommodation listings pending verification
              </p>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                This portal is committed to publishing only verified, accurate
                information. All previously listed hotels and resorts were
                removed because their existence as operating establishments in
                Tanza could not be independently confirmed. Listings will be
                restored once officially sourced.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/ph.MunicipalityofTanza"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 underline underline-offset-2 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Check LGU Facebook for updates
                </a>
                <a
                  href="https://www.tanza.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 underline underline-offset-2 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Official LGU Website
                </a>
              </div>
            </div>
          </div>

          {/* Sections — only rendered when listings exist */}
          {hotels.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-6">
                <Hotel className="h-5 w-5 text-primary-600" />
                Hotels &amp; Transients
              </h2>
              {/* PlaceCard grid goes here once data is populated */}
            </div>
          )}

          {resorts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-6">
                <Trees className="h-5 w-5 text-primary-600" />
                Private Resorts
              </h2>
              {/* PlaceCard grid goes here once data is populated */}
            </div>
          )}

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

          <p className="text-center text-xs text-gray-500 mt-6">
            Last updated: 2025 · Source: bettertanza.org
          </p>
        </Section>
      </div>
    </>
  );
}

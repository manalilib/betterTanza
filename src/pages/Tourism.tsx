import { Link } from 'react-router-dom';
import { MapPin, BedDouble, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
];

const PAGES = [
  {
    to: '/services/tourism/explore-tourist-spots',
    title: 'Must-See Places',
    description:
      'Historic churches, plazas, and landmarks to visit in Tanza, Cavite.',
    icon: MapPin,
  },
  {
    to: '/services/tourism/where-to-stay',
    title: 'Where to Stay',
    description: 'Hotels, resorts, and lodging options in and around Tanza.',
    icon: BedDouble,
  },
];

export default function Tourism() {
  return (
    <>
      <SEO
        title="Tourism"
        description="Plan a visit to Tanza, Cavite: must-see places and where to stay."
        keywords="Tanza tourism, Tanza Cavite tourist spots, where to stay in Tanza"
      />
      <Section className="p-3 mb-12">
        <Breadcrumbs className="mb-8" items={BREADCRUMBS} />
        <Heading>Tourism</Heading>
        <Text className="text-gray-600 mb-8">
          Discover places to visit and stay in the Municipality of Tanza.
        </Text>
        <div className="grid gap-4 sm:grid-cols-2">
          {PAGES.map(p => {
            const Icon = p.icon;
            return (
              <Link
                key={p.to}
                to={p.to}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-gray-900">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600">
                    {p.description}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary-700">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}

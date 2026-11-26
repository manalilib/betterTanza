import { Link } from 'react-router-dom';
import {
  Crown,
  Star,
  Building2,
  CalendarCheck,
  ExternalLink,
  Globe,
  Facebook,
  Users,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import { HERO_GRADIENT } from '../lib/brand';
import data from '../../content/government/departments/executive.json';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Departments & Officials', href: '/government/departments' },
  { label: 'Executive', href: '/government/departments/executive' },
];

const TERM = `${data.YEAR_ELECTED}–${Number(data.YEAR_ELECTED) + 3}`;

// Photos live in /public/images/officials/. A missing file falls back to
// initials, so the page never shows a broken image.
const LEADERS = [
  {
    role: 'Municipal Mayor',
    name: data.MAYOR,
    initials: 'AM',
    photo: '/images/officials/mayor-matro.jpg',
    icon: Crown,
    gradient: 'from-primary-800 to-primary-500',
    summary:
      'Chief executive of the Municipality of Tanza. Leads the implementation of local programs, policies and development initiatives approved by the Sangguniang Bayan.',
    duties: [
      'Implements programs, ordinances and development plans',
      'Oversees municipal offices and the delivery of public services',
      'Leads emergency and disaster response',
      'Represents the municipality in regional and national engagements',
    ],
  },
  {
    role: 'Municipal Vice Mayor',
    name: data.VICE_MAYOR,
    initials: 'RD',
    photo: '/images/officials/vm-del-rosario.jpg',
    icon: Star,
    gradient: 'from-brand-800 to-brand-500',
    summary:
      'Presiding officer of the Sangguniang Bayan, the legislative body of the municipality. Steps in as Acting Mayor when the Mayor is unable to serve.',
    duties: [
      'Presides over Sangguniang Bayan sessions',
      'Ensures ordinances and resolutions support local development goals',
      'Assumes the duties of Acting Mayor when needed',
      'Represents the municipality when designated by the Mayor',
    ],
  },
];

const INVITE_STEPS = [
  'Prepare a formal invitation letter addressed to the Office of the Mayor.',
  'Include the organization name, event title, date and time, and venue.',
  'Add the name and contact details of a person we can coordinate with.',
  'Submit it to the Mayor’s Office at the Municipal Hall.',
];

const CONTACT_LINKS = [
  {
    label: 'Official website',
    value: 'www.tanza.gov.ph',
    href: 'https://www.tanza.gov.ph',
    icon: Globe,
  },
  {
    label: 'Facebook',
    value: 'Municipality of Tanza',
    href: 'https://www.facebook.com/ph.MunicipalityofTanza',
    icon: Facebook,
  },
  {
    label: 'Online requests',
    value: 'Tanza Public Service System',
    href: 'https://tanzapublicservice.site',
    icon: ExternalLink,
  },
];

function Avatar({
  photo,
  initials,
  name,
  gradient,
}: {
  photo: string;
  initials: string;
  name: string;
  gradient: string;
}) {
  return (
    <div
      className={`relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-lg ring-4 ring-white flex items-center justify-center`}
    >
      <span className="text-3xl font-black text-white" aria-hidden="true">
        {initials}
      </span>
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
        onError={e => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

export default function Executive() {
  return (
    <>
      <SEO
        title="Executive — Mayor and Vice Mayor of Tanza"
        description={`Meet the Mayor and Vice Mayor of the Municipality of Tanza, Cavite (${TERM} term), their roles, and how to reach the Office of the Mayor.`}
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ background: HERO_GRADIENT }}
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
          <div className="flex items-center gap-2 mb-4 text-primary-200 text-xs font-bold uppercase tracking-widest">
            <Building2 className="h-3.5 w-3.5" />
            Government · Executive Department
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Your Mayor and Vice Mayor
          </h1>
          <p className="text-primary-100 text-base max-w-lg leading-relaxed mb-8">
            The elected leaders of the Municipality of {data.GOVERNMENT_NAME},
            Cavite, serving the {TERM} term.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact-office"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary-800 shadow-lg shadow-black/20 transition hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact the Mayor’s Office <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/government/departments/officials"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Users className="h-4 w-4" /> All local officials
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" aria-hidden="true">
            <path
              d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-50">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Leaders */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-12">
            {LEADERS.map(l => {
              const Icon = l.icon;
              return (
                <article
                  key={l.role}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className={`h-2 bg-gradient-to-r ${l.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-5 mb-5">
                      <Avatar
                        photo={l.photo}
                        initials={l.initials}
                        name={l.name}
                        gradient={l.gradient}
                      />
                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-700">
                          <Icon className="h-3 w-3" />
                          {l.role}
                        </span>
                        <h2 className="mt-2 text-xl font-black leading-snug text-gray-900">
                          Hon. {l.name}
                        </h2>
                        <p className="mt-1 text-xs font-semibold text-gray-500">
                          {TERM} term · elected {data.YEAR_ELECTED}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {l.summary}
                    </p>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Key responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {l.duties.map(d => (
                        <li
                          key={d}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* How elections work */}
          <div className="mb-12 rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <h2 className="mb-1 text-base font-black text-primary-900">
              How these offices are filled
            </h2>
            <p className="text-sm leading-relaxed text-primary-800">
              The Mayor and Vice Mayor are elected by Tanza residents during the
              Philippine National and Local Elections, held every three years.
              The Vice Mayor presides over the Sangguniang Bayan; the council
              roster is on the{' '}
              <Link
                to="/government/departments/officials"
                className="font-bold underline underline-offset-2"
              >
                Local Officials page
              </Link>
              .
            </p>
          </div>

          {/* Invite */}
          <section className="mb-12">
            <h2 className="mb-1 flex items-center gap-2 text-lg font-black text-gray-900">
              <CalendarCheck className="h-5 w-5 text-brand-600" />
              Invite the Mayor to your event
            </h2>
            <div className="mb-6 h-1 w-10 rounded-full bg-brand-500" />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {INVITE_STEPS.map((step, i) => (
                <li
                  key={step}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Contact */}
          <section id="contact-office" className="scroll-mt-32">
            <h2 className="mb-1 flex items-center gap-2 text-lg font-black text-gray-900">
              <Building2 className="h-5 w-5 text-primary-600" />
              Contact the Mayor’s Office
            </h2>
            <div className="mb-6 h-1 w-10 rounded-full bg-primary-600" />
            <p className="mb-5 text-sm text-gray-600">
              Office of the Mayor, Municipal Hall of {data.GOVERNMENT_NAME},
              Cavite.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {CONTACT_LINKS.map(c => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-bold text-gray-900">
                        {c.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Direct telephone and email contacts for the Mayor’s Office have
              not been confirmed against an official source. Please use the
              channels above.
            </p>
          </section>

          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}

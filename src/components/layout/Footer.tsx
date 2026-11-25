import { Facebook, Github, Heart, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function useVisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visits')
      .then(r => r.json())
      .then(d => {
        if (d?.count !== undefined && d.count !== null) setCount(d.count);
      })
      .catch(() => {});
  }, []);

  return count;
}

export default function Footer() {
  const { t } = useTranslation('common');
  const visitCount = useVisitCounter();

  const QUICK_LINKS = [
    { labelKey: 'nav.services', href: '/services' },
    { labelKey: 'nav.government', href: '/government' },
    {
      labelKey: 'nav.fullDisclosure',
      href: '/government/transparency-documents/full-disclosure',
    },
    {
      labelKey: 'nav.foiReleases',
      href: '/government/transparency-documents/foi-releases',
    },
    { labelKey: 'nav.development', href: '/development-projects' },
    { labelKey: 'contact.title', href: '/#contact' },
  ];

  const RESOURCES = [
    { label: 'Open Data Philippines', href: 'https://data.gov.ph' },
    { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
    {
      label: 'Official Tanza Website',
      href: 'https://www.tanza.gov.ph',
    },
    {
      label: 'Tanza Public Service System',
      href: 'https://tanzapublicservice.site',
    },
    { label: 'DILG FDP Portal', href: 'https://fdpp.blgs.gov.ph' },
    { label: 'PhilGEPS', href: 'https://www.philgeps.gov.ph' },
    { label: 'Official Gov.ph', href: 'https://www.gov.ph' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img
                src="/tanza-seal.png"
                alt="Tanza Municipal Seal"
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="text-white font-black text-lg">
                betterTanza<span className="text-primary-400">.org</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.mission')}
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/ph.MunicipalityofTanza"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/manalilib/betterTanza"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2.5">
              {RESOURCES.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost + CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-900/40 text-blue-400 border border-blue-800 rounded-full px-3 py-1.5 text-xs font-bold mb-5">
              {t('footer.costLabel')}{' '}
              <span className="text-yellow-300">₱0</span>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/manalilib/betterTanza"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-600 px-4 py-2.5 rounded-lg transition-colors"
              >
                <Heart className="h-4 w-4" />
                {t('footer.volunteer')}
              </a>
              <a
                href="https://github.com/manalilib/betterTanza"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-lg transition-colors"
              >
                <Github className="h-4 w-4" />
                {t('footer.contribute')}
              </a>
            </div>
            <div className="mt-4">
              <WebsiteCarbonBadge dark url="https://www.bettertanza.org" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-2 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} betterTanza.org
            <span className="mx-2 opacity-40">|</span>
            MIT | CC BY 4.0
            <span className="mx-2 opacity-40">|</span>
            {t('footer.attribution')}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-800 border border-gray-700 rounded-full px-3 py-1.5">
            <Eye className="h-3 w-3 text-primary-400" />
            <span className="text-gray-300 font-bold">
              {visitCount !== null ? visitCount.toLocaleString() : '—'}
            </span>
            <span className="text-gray-500">visits</span>
          </span>
          <span className="text-gray-600 text-[11px]">
            {t('footer.builtBy')}
          </span>
        </div>
      </div>
    </footer>
  );
}

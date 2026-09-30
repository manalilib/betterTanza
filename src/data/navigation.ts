import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/', translationKey: 'nav.home' },
  {
    label: 'Services',
    href: '/services',
    translationKey: 'nav.services',
    children: (servicesData.categories as Category[]).map(category => ({
      label: category.category,
      href: `/services/${category.slug}`,
      translationKey: `services.categories.${category.slug}.name`,
    })),
  },
  {
    label: 'Government',
    href: '/government/departments',
    translationKey: 'nav.government',
    children: [
      {
        label: 'Departments & Officials',
        href: '/government/departments',
        translationKey: 'nav.departments',
      },
      {
        label: 'Local Officials',
        href: '/government/departments/officials',
        translationKey: 'nav.localOfficials',
      },
    ],
  },
  {
    label: 'Transparency',
    href: '/government/transparency-documents',
    translationKey: 'nav.transparency',
    children: [
      {
        label: 'Full Disclosure',
        href: '/government/transparency-documents/full-disclosure',
        translationKey: 'nav.fullDisclosure',
      },
      {
        label: 'Annual Budget',
        href: '/government/transparency-documents/annual-budget',
        translationKey: 'nav.annualBudget',
      },
      {
        label: 'SALN',
        href: '/government/transparency-documents/saln',
        translationKey: 'nav.saln',
      },
      {
        label: 'FOI Releases',
        href: '/government/transparency-documents/foi-releases',
        translationKey: 'nav.foiReleases',
      },
      {
        label: 'Planning Docs & Downloads',
        href: '/government/transparency-documents/downloads',
        translationKey: 'nav.downloads',
      },
    ],
  },
  {
    label: 'Statistics',
    href: '/government/reports-and-statistics',
    translationKey: 'nav.statistics',
    children: [
      {
        label: 'Municipal Profile',
        href: '/government/reports-and-statistics/city-profile',
        translationKey: 'nav.cityProfile',
      },
      {
        label: 'Annual Report',
        href: '/government/reports-and-statistics/annual-report',
        translationKey: 'nav.annualReport',
      },
      {
        label: 'Infrastructure Projects',
        href: '/government/reports-and-statistics/infrastructure-projects',
        translationKey: 'nav.infrastructureProjects',
      },
    ],
  },
  {
    label: 'Development',
    href: '/development-projects',
    translationKey: 'nav.development',
  },
  { label: 'Contact', href: '/#contact', translationKey: 'nav.contact' },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'About',
      links: [
        { label: 'About the Portal', href: '/about' },
        // { label: 'Privacy Policy', href: '/privacy' },
        // { label: 'Terms of Use', href: '/terms' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Contact Us', href: '/about' },
        { label: 'Community Discord', href: '/discord' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 6)
          .map(category => ({
            label: category.category,
            href: `/services/${category.slug}`,
          })),
        { label: 'Hotlines', href: '/philippines/hotlines' },
        { label: 'Holidays', href: '/philippines/holidays' },
      ],
    },
    {
      title: 'Government',
      links: [
        { label: 'Open Data', href: 'https://data.gov.ph' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
        {
          label: 'Contact Center',
          href: 'https://contactcenterngbayan.gov.ph',
        },
        {
          label: 'Official Gazette',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
  ],
  socialLinks: [
    { label: 'Facebook', href: 'https://facebook.com/govph' },
    { label: 'Twitter', href: 'https://twitter.com/govph' },
    { label: 'Instagram', href: 'https://instagram.com/govph' },
    { label: 'YouTube', href: 'https://youtube.com/govph' },
  ],
};

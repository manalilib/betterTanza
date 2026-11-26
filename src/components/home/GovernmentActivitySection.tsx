import * as LucideIcons from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import { governmentCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

const CATEGORY_COLORS: {
  card: string;
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
}[] = [
  {
    card: 'bg-primary-50 border-primary-200 hover:bg-primary-100',
    icon: 'text-primary-600',
    iconBg: 'bg-primary-100',
    title: 'text-primary-800',
    desc: 'text-primary-700/80',
  },
  {
    card: 'bg-primary-50 border-primary-200 hover:bg-primary-100',
    icon: 'text-primary-600',
    iconBg: 'bg-primary-100',
    title: 'text-primary-800',
    desc: 'text-primary-700/80',
  },
  {
    card: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'text-amber-800',
    desc: 'text-amber-700/80',
  },
  {
    card: 'bg-green-50 border-green-200 hover:bg-green-100',
    icon: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'text-green-800',
    desc: 'text-green-700/80',
  },
  {
    card: 'bg-brand-50 border-brand-200 hover:bg-brand-100',
    icon: 'text-brand-600',
    iconBg: 'bg-brand-100',
    title: 'text-brand-800',
    desc: 'text-brand-700/80',
  },
  {
    card: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    icon: 'text-rose-600',
    iconBg: 'bg-rose-100',
    title: 'text-rose-800',
    desc: 'text-rose-700/80',
  },
  {
    card: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    icon: 'text-teal-600',
    iconBg: 'bg-teal-100',
    title: 'text-teal-800',
    desc: 'text-teal-700/80',
  },
];

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

export default function GovernmentActivitySection({
  title,
  description,
}: GovernmentActivitySectionProps = {}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const displayedCategories = governmentCategories.categories as Category[];

  return (
    <section id="government" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
          Your Local Government
        </p>
        <h2 className="text-2xl font-black text-gray-900">
          {title || t('governmentActivity.title')}
        </h2>
        <div className="mt-2 mb-4 h-1 w-12 bg-primary-600 rounded-full" />
        <p className="text-gray-600 text-sm mb-8">
          {description || t('governmentActivity.description')}
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${displayedCategories.length % 3 === 0 ? 'lg:grid-cols-3' : 'md:grid-cols-3 lg:grid-cols-4'}`}
        >
          {displayedCategories.map((category, idx) => {
            const colors = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
            return (
              <Link
                key={category.slug}
                to={`/government/${category.slug}`}
                className={`group block rounded-2xl border ${colors.card} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60}ms, box-shadow 0.2s, translate 0.2s`,
                }}
              >
                <div
                  className={`${colors.iconBg} ${colors.icon} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  {getIcon(category.icon)}
                </div>
                <h3 className={`text-sm font-bold mb-2 ${colors.title}`}>
                  {t(
                    `governmentActivity.categories.${category.slug}.name`,
                    category.category
                  )}
                </h3>
                <p className={`text-xs leading-relaxed ${colors.desc}`}>
                  {t(
                    `governmentActivity.categories.${category.slug}.description`,
                    category.description
                  )}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

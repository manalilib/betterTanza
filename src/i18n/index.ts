import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import fil from './locales/fil.json';

const resources = {
  en: {
    common: en,
  },
  fil: {
    common: fil,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'fil'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Keep <html lang> in sync for screen readers and search engines
const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith('fil') ? 'fil' : 'en';
};
syncHtmlLang(i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;

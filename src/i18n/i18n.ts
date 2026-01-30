import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en';
import arTranslations from './locales/ar';

// Safe localStorage access
const getStoredLanguage = () => {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem('language') : null;
  } catch {
    return null;
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    lng: getStoredLanguage() || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

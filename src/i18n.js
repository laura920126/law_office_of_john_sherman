import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translations
import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enBlog from './locales/en/blog.json'
import esCommon from './locales/es/common.json'
import esHome from './locales/es/home.json'
import esBlog from './locales/es/blog.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        blog: enBlog
      },
      es: {
        common: esCommon,
        home: esHome,
        blog: esBlog
      }
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'blog'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

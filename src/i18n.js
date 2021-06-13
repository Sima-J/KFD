import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEn from './locales/en.json'
import translationAr from './locales/ar.json'
import translationKrd from './locales/kr.json'

const language = ['en', 'kr', 'ar']

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
  kr: {
    translation: translationKrd,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'en',
    whitelist: language,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

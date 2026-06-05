import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from '../../../../public/locales/ru/translation.json';
import tg from '../../../../public/locales/tg/translation.json';
import en from '../../../../public/locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      tg: { translation: tg },
      en: { translation: en },
    },
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'tg', 'en'],
    interpolation: { escapeValue: false },
  });

export default i18n;

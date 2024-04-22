import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './mock/locales/kr.json'; 
import translationKR from './mock/locales/ru.json'; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      krg: {
        translation: translationKR,
      },
      rus: {
        translation: translationRU,
      },
    },
    lng: 'krg',
    fallbackLng: 'krg', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationRU from './mock/locales/ru.json'
import translationKR from './mock/locales/kr.json'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ky: {
                translation: translationKR,
            },
            ru: {
                translation: translationRU,
            },
        },
        react: {
            useSuspense: true,
        },
        debug: false,
        fallbackLng: 'ru',
        detection: {
            order: ['queryString', 'cookie', 'localStorage'],
            cahche: ['cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n

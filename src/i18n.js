import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationRU from './mock/locales/ru.json'
import translationKR from './mock/locales/kr.json'

i18n.use(initReactI18next).init({
    resources: {
        ky: {
            translation: translationKR,
        },
        ru: {
            translation: translationRU,
        },
    },
    lng: 'ky',
    fallbackLng: 'ky',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n

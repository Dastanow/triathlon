import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationRU from './mock/locales/ru.json'
import translationKR from './mock/locales/kr.json'

i18n.use(initReactI18next).init({
    resources: {
        kyr: {
            translation: translationKR,
        },
        rus: {
            translation: translationRU,
        },
    },
    lng: 'rus',
    fallbackLng: 'rus',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n

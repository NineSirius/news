import en from './lang/en.json'
import ru from './lang/ru.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
}

i18n.use(initReactI18next).init({
    resources,
    lang: JSON.parse(localStorage.getItem('language')),
    defaultLang: 'ru',
})

export default i18n

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations.json'

const resources = {
    fr: {
        translation: _.mapValues(translations, (o) => { return _.mapValues(o, (arr) => { return arr[0] }) })
    },
    en: {
        translation: _.mapValues(translations, (o) => { return _.mapValues(o, (arr) => { return arr[1] }) })
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        }
    })

export default i18next
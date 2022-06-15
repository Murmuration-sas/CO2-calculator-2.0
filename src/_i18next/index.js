import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations.json'

function parse(toParse, lang) {
    return _.mapValues(toParse, (e) => {
        if (Object.prototype.toString.call(e) === "[object Object]") return parse(e, lang)
        else return e[lang == 'fr' ? 0 : 1]
    })
}

const resources = {
    fr: {
        translation: parse(translations, 'fr')
    },
    en: {
        translation: parse(translations, 'en')
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        interpolation: {
            escapeValue: false,
        }
    })

export default i18next
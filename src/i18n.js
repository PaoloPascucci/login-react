import i18n from "i18next";
import { initReactI18next } from "react-i18next";


//translation
import translationEN from "./jsonTranslate/en/translationEn.json"
import translationIt from "./jsonTranslate/it/translationIt.json";


const resources = {
    en: {
        translation: translationEN
    },
    it: {
        translation: translationIt
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        keySeparator: false,

        Interpolation: {
            escapeValue: false
        }
    });

export default i18n
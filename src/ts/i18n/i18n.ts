import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Languages
import esjson from './languages/es.json';
import enjson from './languages/en.json';

const resources = {
    en: enjson,
    es: esjson,
};

void i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

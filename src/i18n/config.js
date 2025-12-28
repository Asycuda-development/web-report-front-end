import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'

i18n.use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        returnObjects: true,
        ns: ['translations'],
        defaultNS: 'translations'
    });

i18n.languages = ['en', 'fa', 'ps'];

export default i18n;
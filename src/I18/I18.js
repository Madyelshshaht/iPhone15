import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: 'en',
        detection: {
            order: [
                "localStorage",
                "htmlTag",
                "cookie",
                "sessionStorage",
                "navigator",
                "path",
                "subdomain",
            ],
            caches: ["localStorage"],
        },
        debug: true,
        interpolation: {
            escapeValue: false, // React تقوم بالهروب تلقائيًا
        },
        backend: {
            loadPath: 'Langs/{{lng}}.json',
        },
    });

export default i18n;

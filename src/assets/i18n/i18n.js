import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translations: {
                    'i18n': 'This is I18n'
                }
            }, 
            vn: {
                translations: {
                    'i18n': 'Đây là I18n'
                }
            }
        },
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // use content ad keys

        interpolation: {
            escapeValue: false, //not needed for react
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    })

    export default i18n;
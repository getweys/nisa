// "use client";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";

// const resources = {
//   en: {
//     translation: {
//       "app.name": "Nisa Drive",
//       "profile.title": "Profile",
//       "language.select": "Select Language",
//       "language.save": "Save",
//       "language.english": "English",
//       "language.urdu": "Urdu",
//     },
//   },
//   ur: {
//     translation: {
//       "app.name": "نیسا ڈرائیو",
//       "profile.title": "پروفائل",
//       "language.select": "زبان منتخب کریں",
//       "language.save": "محفوظ کریں",
//       "language.english": "انگریزی",
//       "language.urdu": "اردو",
//     },
//   },
// };

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: process.env.NODE_ENV === "development",
//     fallbackLng: "en",
//     supportedLngs: ["en", "ur"],
//     returnObjects: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     detection: {
//       order: ["localStorage", "navigator"],
//       caches: ["localStorage"],
//     },
//     resources: process.env.NODE_ENV === "production" ? resources : undefined,
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json",
//     },
//   });

// export default i18n;

"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    supportedLngs: ["en", "ur"],
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;

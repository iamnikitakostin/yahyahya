import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import global_en from "./translations/en/global.json";
import global_jp from "./translations/jp/global.json";
import global_cn from "./translations/cn/global.json";

import news_en from "./translations/en/news.json";
import news_jp from "./translations/jp/news.json";
import news_cn from "./translations/cn/news.json";

import dishes_en from "./translations/en/dishes.json";
import dishes_jp from "./translations/jp/dishes.json";
import dishes_cn from "./translations/cn/dishes.json";

import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';


i18next
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
      htmlTag: document.documentElement,
      checkWhitelist: true
    },
    interpolation: {escapeValue: false}, //change to true later
    fallbackLng: 'en',
    supportedLng: ['en', 'ja', 'zh'],
    resources: {
        en: {
          global: global_en,
          news: news_en,
          dishes: dishes_en
        },
        ja: {
          global: global_jp,
          news: news_jp,
          dishes: dishes_jp
        },
        zh: {
          global: global_cn,
          news: news_cn,
          dishes: dishes_cn
        }
    }
  })
  .then(() => {
    console.log("Detected language:", i18next.language);
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);

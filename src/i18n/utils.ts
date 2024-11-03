import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRoutes(lang: keyof typeof ui) {
  return function routes() {
    // console.log("🚀 ~ routes ~ Object.keys(ui[lang]):", Object.keys(ui[lang]))
    return Object.keys(ui[lang]);
  }
}
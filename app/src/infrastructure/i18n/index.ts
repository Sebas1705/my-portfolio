import type { Language, Translations } from '@domain/entities/Language';
import { es } from './es';
import { en } from './en';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { pt } from './pt';
import { nl } from './nl';
import { pl } from './pl';
import { ru } from './ru';
import { ja } from './ja';

export const translations: Record<Language, Translations> = {
  es,
  en,
  fr,
  de,
  it,
  pt,
  nl,
  pl,
  ru,
  ja
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.es;
}

export function translate(lang: Language, key: string): string {
  const t = getTranslations(lang);
  const keys = key.split('.');
  let value: any = t;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  return typeof value === 'string' ? value : key;
}

export const defaultLanguage: Language = 'es';
export const supportedLanguages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ru: 'Русский',
  ja: '日本語'
};

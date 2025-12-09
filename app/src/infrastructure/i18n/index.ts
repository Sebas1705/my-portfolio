import type { Language, Translations } from '@domain/entities/Language';
import { es } from './es';
import { en } from './en';

const translations: Record<Language, Translations> = {
  es,
  en
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
export const supportedLanguages: Language[] = ['es', 'en'];

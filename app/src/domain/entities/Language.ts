export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja';

// Translation object with language codes as keys and translated strings as values
export type Translations = {
  [key: string]: string | Translations;
};

export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja';

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [key: string]: Translation;
}

export type Language = 'es' | 'en';

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [key: string]: Translation;
}

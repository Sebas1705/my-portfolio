export type Translations = { [key: string]: string | Translations };

export function getStringFromTranslations(value: any, lang: string): string {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') {
    const direct = (value as Record<string, any>)[lang];
    if (typeof direct === 'string') return direct as string;
    const first = Object.values(value).find(v => typeof v === 'string');
    return (first as string) || '';
  }
  return '';
}

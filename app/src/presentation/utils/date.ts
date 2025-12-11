import type { Language } from '@domain/entities/Language';

export function formatDateRange(start: Date, end: Date | undefined, lang: Language, currentLabel: string): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  const startStr = new Date(start).toLocaleDateString(locale, { year: 'numeric', month: 'short' });
  const endStr = end ? new Date(end).toLocaleDateString(locale, { year: 'numeric', month: 'short' }) : currentLabel;
  return `${startStr} - ${endStr}`;
}

export function formatMonthYear(date: Date, lang: Language): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  return new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
}

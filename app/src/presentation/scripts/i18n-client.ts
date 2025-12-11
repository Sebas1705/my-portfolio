import { translations } from '@infrastructure/i18n';
import type { Language } from '@domain/entities/Language';

/**
 * Client-side translation function
 */
export function translateClient(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * Get string from Translations object
 */
export function getStringFromTranslations(value: any, lang: Language): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null) {
    return value[lang] || Object.values(value)[0] || '';
  }
  return '';
}

/**
 * Update all elements with data-i18n-key attribute (for UI strings)
 */
export function updateI18nKeys(lang: Language) {
  const elements = document.querySelectorAll('[data-i18n-key]');
  
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (key) {
      const translation = translateClient(lang, key);
      
      // Handle multi-paragraph content (for about.description)
      if (key === 'about.description' && translation.includes('\n\n')) {
        const paragraphs = translation.split('\n\n');
        element.innerHTML = paragraphs.map(p => `<p class="description-paragraph">${p}</p>`).join('');
      } else {
        element.textContent = translation;
      }
    }
  });
}

/**
 * Update all elements with data-translation-field attribute (for Translations objects)
 */
export function updateTranslationFields(lang: Language) {
  const elements = document.querySelectorAll('[data-translation-field]');
  
  elements.forEach((element) => {
    const fieldData = element.getAttribute('data-translation-field');
    if (fieldData) {
      try {
        const translations = JSON.parse(fieldData);
        const translated = getStringFromTranslations(translations, lang);
        element.textContent = translated;
      } catch (e) {
        console.warn('Invalid data-translation-field format:', fieldData);
      }
    }
  });
}

/**
 * Update all translations on the page
 */
export function updateAllTranslations(lang: Language) {
  updateI18nKeys(lang);
  updateTranslationFields(lang);
  
  // Dispatch event to notify that translations have been updated
  window.dispatchEvent(new CustomEvent('translationsUpdated', { detail: { language: lang } }));
}

/**
 * Initialize i18n client-side functionality
 */
export function initI18n() {
  // Listen for language change events
  window.addEventListener('languagechange', (event: Event) => {
    const customEvent = event as CustomEvent<{ language: Language }>;
    const newLang = customEvent.detail.language;
    updateAllTranslations(newLang);
  });
  
  // Update translations on initial load based on localStorage
  const savedLang = localStorage.getItem('language') as Language | null;
  if (savedLang && savedLang !== 'es') {
    updateAllTranslations(savedLang);
  }
}

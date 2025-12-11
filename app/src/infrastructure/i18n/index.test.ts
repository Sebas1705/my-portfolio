import { describe, it, expect } from 'vitest';
import { getTranslations, translate, defaultLanguage, supportedLanguages } from './index';

describe('i18n', () => {
  describe('getTranslations', () => {
    it('should return Spanish translations', () => {
      const translations = getTranslations('es');
      expect(translations).toBeDefined();
      expect(translations.nav).toBeDefined();
      expect(translations.hero).toBeDefined();
    });

    it('should return English translations', () => {
      const translations = getTranslations('en');
      expect(translations).toBeDefined();
      expect(translations.nav).toBeDefined();
      expect(translations.hero).toBeDefined();
    });

    it('should fallback to Spanish for unsupported language', () => {
      const translations = getTranslations('xyz' as any);
      const spanishTranslations = getTranslations('es');
      expect(translations).toEqual(spanishTranslations);
    });
  });

  describe('translate', () => {
    it('should translate simple keys in Spanish', () => {
      expect(translate('es', 'nav.home')).toBe('Inicio');
      expect(translate('es', 'nav.about')).toBe('Sobre Mí');
    });

    it('should translate simple keys in English', () => {
      expect(translate('en', 'nav.home')).toBe('Home');
      expect(translate('en', 'nav.about')).toBe('About Me');
    });

    it('should return key for non-existent translation', () => {
      const key = 'non.existent.key';
      expect(translate('es', key)).toBe(key);
    });

    it('should handle nested keys', () => {
      expect(translate('es', 'hero.greeting')).toBe('Hola, soy');
      expect(translate('en', 'hero.greeting')).toBe('Hello, I\'m');
    });
  });

  describe('constants', () => {
    it('should have correct default language', () => {
      expect(defaultLanguage).toBe('es');
    });

    it('should have correct supported languages', () => {
      expect(supportedLanguages).toEqual(['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja']);
      expect(supportedLanguages).toContain('es');
      expect(supportedLanguages).toContain('en');
      expect(supportedLanguages).toContain('fr');
      expect(supportedLanguages).toContain('de');
      expect(supportedLanguages).toContain('it');
      expect(supportedLanguages).toContain('pt');
      expect(supportedLanguages).toContain('nl');
      expect(supportedLanguages).toContain('pl');
      expect(supportedLanguages).toContain('ru');
      expect(supportedLanguages).toContain('ja');
    });
  });

  describe('translation completeness', () => {
    it('should have all sections in both languages', () => {
      const esTranslations = getTranslations('es');
      const enTranslations = getTranslations('en');

      const sections = ['nav', 'hero', 'about', 'work', 'education', 'projects', 'contact', 'common'];

      sections.forEach(section => {
        expect(esTranslations[section]).toBeDefined();
        expect(enTranslations[section]).toBeDefined();
      });
    });
  });
});

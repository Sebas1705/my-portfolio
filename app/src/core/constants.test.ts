import { describe, it, expect } from 'vitest';
import { PROJECT_TYPE_LABELS, COMPANY_LINKS } from './constants';

describe('constants', () => {
    describe('PROJECT_TYPE_LABELS', () => {
        it('should have translations for all project types in Spanish', () => {
            expect(PROJECT_TYPE_LABELS.es.work).toBe('Proyecto Laboral');
            expect(PROJECT_TYPE_LABELS.es.academic).toBe('Proyecto Académico');
            expect(PROJECT_TYPE_LABELS.es.personal).toBe('Proyecto Personal');
        });

        it('should have translations for all project types in English', () => {
            expect(PROJECT_TYPE_LABELS.en.work).toBe('Work Project');
            expect(PROJECT_TYPE_LABELS.en.academic).toBe('Academic Project');
            expect(PROJECT_TYPE_LABELS.en.personal).toBe('Personal Project');
        });

        it('should have translations for all project types in all supported languages', () => {
            const languages = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'] as const;
            const projectTypes = ['work', 'academic', 'personal'] as const;

            languages.forEach(lang => {
                projectTypes.forEach(type => {
                    expect(PROJECT_TYPE_LABELS[lang][type]).toBeDefined();
                    expect(PROJECT_TYPE_LABELS[lang][type]).not.toBe('');
                });
            });
        });

        it('should have exactly three project types per language', () => {
            const languages = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'] as const;

            languages.forEach(lang => {
                const types = Object.keys(PROJECT_TYPE_LABELS[lang]);
                expect(types).toHaveLength(3);
            });
        });

        it('should have all 10 supported languages', () => {
            const languages = Object.keys(PROJECT_TYPE_LABELS);
            expect(languages).toHaveLength(10);
            expect(languages).toContain('es');
            expect(languages).toContain('en');
            expect(languages).toContain('fr');
            expect(languages).toContain('de');
            expect(languages).toContain('it');
            expect(languages).toContain('pt');
            expect(languages).toContain('nl');
            expect(languages).toContain('pl');
            expect(languages).toContain('ru');
            expect(languages).toContain('ja');
        });
    });

    describe('COMPANY_LINKS', () => {
        it('should have correct links for all companies', () => {
            expect(COMPANY_LINKS.Solusoft).toBe('https://www.solusoft.es/');
            expect(COMPANY_LINKS.AGEDI).toBe('https://www.agedi.es/');
            expect(COMPANY_LINKS.Sisley).toBe('https://www.sisley.com/');
            expect(COMPANY_LINKS.Iberext).toBe('https://www.iberext.es/');
        });

        it('should have exactly 4 companies', () => {
            const companies = Object.keys(COMPANY_LINKS);
            expect(companies).toHaveLength(4);
        });

        it('should have valid URLs for all companies', () => {
            Object.values(COMPANY_LINKS).forEach(url => {
                expect(url).toMatch(/^https?:\/\//);
                expect(url).not.toBe('');
            });
        });

        it('should contain expected company names', () => {
            expect(COMPANY_LINKS).toHaveProperty('Solusoft');
            expect(COMPANY_LINKS).toHaveProperty('AGEDI');
            expect(COMPANY_LINKS).toHaveProperty('Sisley');
            expect(COMPANY_LINKS).toHaveProperty('Iberext');
        });
    });
});

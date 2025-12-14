import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryNavigationLabelsRepository } from './InMemoryNavigationLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryNavigationLabelsRepository', () => {
    let repository: InMemoryNavigationLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryNavigationLabelsRepository();
    });

    it('should return navigation labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.home).toBeDefined();
        expect(labels.about).toBeDefined();
        expect(labels.work).toBeDefined();
        expect(labels.education).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.contact).toBeDefined();
    });

    it('should have translations for all navigation labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.home.es).toBe('Inicio');
        expect(labels.home.en).toBe('Home');
        expect(labels.about.es).toBe('Sobre Mí');
        expect(labels.about.en).toBe('About');
    });

    it('should support multiple languages', async () => {
        const labels = await repository.getAll();
        const languages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];
        
        languages.forEach(lang => {
            expect(labels.home[lang]).toBeDefined();
            expect(labels.home[lang]).not.toBe('');
        });
    });
});

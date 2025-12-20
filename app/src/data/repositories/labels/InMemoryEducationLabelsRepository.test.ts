import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryEducationLabelsRepository } from './InMemoryEducationLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryEducationLabelsRepository', () => {
    let repository: InMemoryEducationLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryEducationLabelsRepository();
    });

    it('should return education labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.achievements).toBeDefined();
    });

    it('should have translations for education labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Educación');
        expect(labels.title.en).toBe('Education');
        expect(labels.projects.es).toBe('Proyectos Académicos');
        expect(labels.projects.en).toBe('Academic Projects');
    });

    it('should support multiple languages', async () => {
        const labels = await repository.getAll();
        const languages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];
        
        languages.forEach(lang => {
            expect(labels.title[lang]).toBeDefined();
            expect(labels.title[lang]).not.toBe('');
        });
    });
});

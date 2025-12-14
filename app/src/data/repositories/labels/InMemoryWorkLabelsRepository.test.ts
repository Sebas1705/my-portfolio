import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryWorkLabelsRepository } from './InMemoryWorkLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryWorkLabelsRepository', () => {
    let repository: InMemoryWorkLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryWorkLabelsRepository();
    });

    it('should return work labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.current).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.achievements).toBeDefined();
    });

    it('should have translations for work labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Experiencia Laboral');
        expect(labels.title.en).toBe('Work Experience');
        expect(labels.current.es).toBe('Actualidad');
        expect(labels.current.en).toBe('Present');
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

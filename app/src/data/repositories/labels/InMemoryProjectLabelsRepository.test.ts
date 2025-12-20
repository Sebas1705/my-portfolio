import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryProjectLabelsRepository } from './InMemoryProjectLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryProjectLabelsRepository', () => {
    let repository: InMemoryProjectLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryProjectLabelsRepository();
    });

    it('should return project labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.viewDemo).toBeDefined();
        expect(labels.viewCode).toBeDefined();
        expect(labels.technologies).toBeDefined();
    });

    it('should have translations for project labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Proyectos');
        expect(labels.title.en).toBe('Projects');
        expect(labels.viewDemo.es).toBe('Ver Demo');
        expect(labels.viewDemo.en).toBe('View Demo');
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

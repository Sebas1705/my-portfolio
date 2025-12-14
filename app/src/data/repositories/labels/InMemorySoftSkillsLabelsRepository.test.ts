import { describe, it, expect, beforeEach } from 'vitest';
import { InMemorySoftSkillsLabelsRepository } from './InMemorySoftSkillsLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemorySoftSkillsLabelsRepository', () => {
    let repository: InMemorySoftSkillsLabelsRepository;

    beforeEach(() => {
        repository = new InMemorySoftSkillsLabelsRepository();
    });

    it('should return soft skills labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
    });

    it('should have translations for soft skills labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Habilidades Blandas');
        expect(labels.title.en).toBe('Soft Skills');
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

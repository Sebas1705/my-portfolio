import { describe, it, expect, beforeEach } from 'vitest';
import { InMemorySkillsLabelsRepository } from './InMemorySkillsLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemorySkillsLabelsRepository', () => {
    let repository: InMemorySkillsLabelsRepository;

    beforeEach(() => {
        repository = new InMemorySkillsLabelsRepository();
    });

    it('should return skills labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.categoryLanguages).toBeDefined();
        expect(labels.tierExpert).toBeDefined();
    });

    it('should have all category labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.categoryLanguages).toBeDefined();
        expect(labels.categoryFrameworks).toBeDefined();
        expect(labels.categoryTools).toBeDefined();
        expect(labels.categoryDatabases).toBeDefined();
        expect(labels.categoryCloud).toBeDefined();
        expect(labels.categoryArchitecture).toBeDefined();
        expect(labels.categoryAI).toBeDefined();
        expect(labels.categoryMethodologies).toBeDefined();
    });

    it('should have all tier labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.tierExpert).toBeDefined();
        expect(labels.tierAdvanced).toBeDefined();
        expect(labels.tierIntermediate).toBeDefined();
        expect(labels.tierBeginner).toBeDefined();
        expect(labels.tierBasic).toBeDefined();
    });

    it('should have translations', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Tecnologías');
        expect(labels.title.en).toBe('Technologies');
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

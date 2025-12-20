import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryCommonLabelsRepository } from './InMemoryCommonLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryCommonLabelsRepository', () => {
    let repository: InMemoryCommonLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryCommonLabelsRepository();
    });

    it('should return common labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.back).toBeDefined();
        expect(labels.noData).toBeDefined();
        expect(labels.viewMore).toBeDefined();
    });

    it('should have translations for all common labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.back.es).toBe('Volver');
        expect(labels.back.en).toBe('Back');
        expect(labels.viewMore.es).toBe('Ver Más');
        expect(labels.viewMore.en).toBe('View More');
    });

    it('should support multiple languages', async () => {
        const labels = await repository.getAll();
        const languages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];
        
        languages.forEach(lang => {
            expect(labels.back[lang]).toBeDefined();
            expect(labels.back[lang]).not.toBe('');
        });
    });
});

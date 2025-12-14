import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryAboutLabelsRepository } from './InMemoryAboutLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryAboutLabelsRepository', () => {
    let repository: InMemoryAboutLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryAboutLabelsRepository();
    });

    it('should return about labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.greeting).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
    });

    it('should have translations for about labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.greeting.es).toBe('Hola, soy');
        expect(labels.greeting.en).toBe("Hi, I'm");
        expect(labels.title.es).toBe('Sobre Mí');
        expect(labels.title.en).toBe('About Me');
    });

    it('should support multiple languages', async () => {
        const labels = await repository.getAll();
        const languages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];
        
        languages.forEach(lang => {
            expect(labels.greeting[lang]).toBeDefined();
            expect(labels.greeting[lang]).not.toBe('');
        });
    });
});

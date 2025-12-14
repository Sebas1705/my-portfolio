import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryContactLabelsRepository } from './InMemoryContactLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryContactLabelsRepository', () => {
    let repository: InMemoryContactLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryContactLabelsRepository();
    });

    it('should return contact labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.email).toBeDefined();
        expect(labels.phone).toBeDefined();
        expect(labels.location).toBeDefined();
        expect(labels.social).toBeDefined();
        expect(labels.message).toBeDefined();
    });

    it('should have translations for contact labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Contacto');
        expect(labels.title.en).toBe('Contact');
        expect(labels.email.es).toBe('Correo Electrónico');
        expect(labels.email.en).toBe('Email');
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

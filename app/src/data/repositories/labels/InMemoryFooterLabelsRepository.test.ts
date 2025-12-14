import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryFooterLabelsRepository } from './InMemoryFooterLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryFooterLabelsRepository', () => {
    let repository: InMemoryFooterLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryFooterLabelsRepository();
    });

    it('should return footer labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.rightsReserved).toBeDefined();
    });

    it('should have translations for footer labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.rightsReserved.es).toBe('Todos los derechos reservados.');
        expect(labels.rightsReserved.en).toBe('All rights reserved.');
    });

    it('should support multiple languages', async () => {
        const labels = await repository.getAll();
        const languages: Language[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja'];
        
        languages.forEach(lang => {
            expect(labels.rightsReserved[lang]).toBeDefined();
            expect(labels.rightsReserved[lang]).not.toBe('');
        });
    });
});

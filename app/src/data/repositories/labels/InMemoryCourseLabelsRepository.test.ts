import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryCourseLabelsRepository } from './InMemoryCourseLabelsRepository';
import type { Language } from '@/domain/models/Language';

describe('InMemoryCourseLabelsRepository', () => {
    let repository: InMemoryCourseLabelsRepository;

    beforeEach(() => {
        repository = new InMemoryCourseLabelsRepository();
    });

    it('should return course labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.pageTitle).toBeDefined();
        expect(labels.viewCourse).toBeDefined();
        expect(labels.certificate).toBeDefined();
        expect(labels.skillsLabel).toBeDefined();
    });

    it('should have translations for course labels', async () => {
        const labels = await repository.getAll();
        
        expect(labels.title.es).toBe('Cursos y Certificaciones');
        expect(labels.title.en).toBe('Courses and Certifications');
        expect(labels.viewCourse.es).toBe('Ver Curso');
        expect(labels.viewCourse.en).toBe('View Course');
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

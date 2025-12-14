import { describe, it, expect, beforeEach } from 'vitest';
import { GetAllCoursesUseCase } from './GetAllCoursesUseCase';
import { InMemoryCourseRepository } from '@/data';

describe('GetAllCoursesUseCase', () => {
    let repository: InMemoryCourseRepository;
    let useCase: GetAllCoursesUseCase;

    beforeEach(() => {
        repository = new InMemoryCourseRepository();
        useCase = new GetAllCoursesUseCase(repository);
    });

    it('should execute and return all courses', async () => {
        const courses = await useCase.execute();

        expect(courses).toBeDefined();
        expect(Array.isArray(courses)).toBe(true);
        expect(courses.length).toBeGreaterThan(0);
    });

    it('should return courses with valid structure', async () => {
        const courses = await useCase.execute();

        courses.forEach(course => {
            expect(course).toHaveProperty('id');
            expect(course).toHaveProperty('title');
            expect(course).toHaveProperty('description');
            expect(course).toHaveProperty('institution');
            expect(course).toHaveProperty('completionDate');
            expect(course).toHaveProperty('certificateUrl');
            expect(course).toHaveProperty('skills');
        });
    });

    it('should return courses with consistent data across calls', async () => {
        const courses1 = await useCase.execute();
        const courses2 = await useCase.execute();

        expect(courses1).toEqual(courses2);
    });

    it('should return courses with all required properties populated', async () => {
        const courses = await useCase.execute();

        courses.forEach(course => {
            expect(course.id).not.toBe('');
            expect(course.title).not.toBe('');
            expect(course.description).not.toBe('');
            expect(course.institution).not.toBe('');
            expect(course.certificateUrl).not.toBe('');
            expect(Array.isArray(course.skills)).toBe(true);
        });
    });

    it('should return courses with Date instance for completionDate', async () => {
        const courses = await useCase.execute();

        courses.forEach(course => {
            expect(course.completionDate).toBeInstanceOf(Date);
        });
    });

    it('should return consistent results on multiple executions', async () => {
        const firstCall = await useCase.execute();
        const secondCall = await useCase.execute();

        expect(firstCall).toEqual(secondCall);
    });
});

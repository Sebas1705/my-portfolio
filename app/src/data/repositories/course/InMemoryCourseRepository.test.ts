import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryCourseRepository } from '@/data';

describe('InMemoryCourseRepository', () => {
    let repository: InMemoryCourseRepository;

    beforeEach(() => {
        repository = new InMemoryCourseRepository();
    });

    describe('getAll', () => {
        it('should return all courses', async () => {
            const courses = await repository.getAll();

            expect(courses).toBeDefined();
            expect(courses.length).toBeGreaterThan(0);
        });

        it('should return courses with Date objects for completionDate', async () => {
            const courses = await repository.getAll();

            expect(courses.every((course) => course.completionDate instanceof Date)).toBe(true);
        });

        it('should return consistent data on multiple calls', async () => {
            const firstCall = await repository.getAll();
            const secondCall = await repository.getAll();

            expect(firstCall).toEqual(secondCall);
        });
    });

    describe('getById', () => {
        it('should return a course when found by id', async () => {
            const course = await repository.getById('android-kotlin-compose-gemini');

            expect(course).toBeDefined();
            expect(course?.id).toBe('android-kotlin-compose-gemini');
            expect(course?.title.en).toBeDefined();
        });

        it('should return null when course is not found', async () => {
            const course = await repository.getById('non-existent-id');

            expect(course).toBeNull();
        });

        it('should return course with Date instance for completionDate', async () => {
            const course = await repository.getById('android-kotlin-compose-gemini');

            expect(course?.completionDate).toBeInstanceOf(Date);
        });
    });
});
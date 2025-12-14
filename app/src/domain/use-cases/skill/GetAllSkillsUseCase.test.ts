import { describe, it, expect, beforeEach } from 'vitest';
import { GetAllSkillsUseCase } from '@/domain';
import { InMemorySkillRepository } from '@/data';

describe('GetAllSkillsUseCase', () => {
    let repository: InMemorySkillRepository;
    let useCase: GetAllSkillsUseCase;

    beforeEach(() => {
        repository = new InMemorySkillRepository();
        useCase = new GetAllSkillsUseCase(repository);
    });

    it('should execute and return all skills', async () => {
        const skills = await useCase.execute();

        expect(skills).toBeDefined();
        expect(Array.isArray(skills)).toBe(true);
        expect(skills.length).toBeGreaterThan(0);
    });

    it('should return skills with valid structure', async () => {
        const skills = await useCase.execute();

        skills.forEach(skill => {
            expect(skill).toHaveProperty('id');
            expect(skill).toHaveProperty('name');
            expect(skill).toHaveProperty('category');
            expect(skill).toHaveProperty('level');
        });
    });

    it('should return consistent results on multiple executions', async () => {
        const firstCall = await useCase.execute();
        const secondCall = await useCase.execute();

        expect(firstCall).toEqual(secondCall);
    });

    it('should return skills with valid levels', async () => {
        const skills = await useCase.execute();

        skills.forEach(skill => {
            expect(typeof skill.level).toBe('number');
            expect(skill.level).toBeGreaterThanOrEqual(1);
            expect(skill.level).toBeLessThanOrEqual(5);
        });
    });

    it('should return skills with non-empty names and categories', async () => {
        const skills = await useCase.execute();

        skills.forEach(skill => {
            expect(skill.id).not.toBe('');
            expect(skill.name).not.toBe('');
            expect(skill.category).not.toBe('');
        });
    });
});

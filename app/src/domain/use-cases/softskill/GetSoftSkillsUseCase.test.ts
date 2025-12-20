import { describe, it, expect, beforeEach } from 'vitest';
import { GetSoftSkillsUseCase } from '@/domain';
import { InMemorySoftSkillRepository } from '@/data';

describe('GetSoftSkillsUseCase', () => {
    let repository: InMemorySoftSkillRepository;
    let useCase: GetSoftSkillsUseCase;

    beforeEach(() => {
        repository = new InMemorySoftSkillRepository();
        useCase = new GetSoftSkillsUseCase(repository);
    });

    it('should execute and return all soft skills', async () => {
        const softSkills = await useCase.execute();

        expect(softSkills).toBeDefined();
        expect(Array.isArray(softSkills)).toBe(true);
        expect(softSkills.length).toBeGreaterThan(0);
    });

    it('should return soft skills with valid structure', async () => {
        const softSkills = await useCase.execute();

        softSkills.forEach(softSkill => {
            expect(softSkill).toHaveProperty('id');
            expect(softSkill).toHaveProperty('name');
            expect(softSkill).toHaveProperty('description');
            expect(softSkill).toHaveProperty('level');
        });
    });

    it('should return consistent results on multiple executions', async () => {
        const firstCall = await useCase.execute();
        const secondCall = await useCase.execute();

        expect(firstCall).toEqual(secondCall);
    });

    it('should return soft skills with valid levels', async () => {
        const softSkills = await useCase.execute();

        softSkills.forEach(softSkill => {
            expect(typeof softSkill.level).toBe('number');
            expect(softSkill.level).toBeGreaterThanOrEqual(1);
            expect(softSkill.level).toBeLessThanOrEqual(5);
        });
    });

    it('should return soft skills with non-empty identifiers', async () => {
        const softSkills = await useCase.execute();

        softSkills.forEach(softSkill => {
            expect(softSkill.id).not.toBe('');
            expect(softSkill.name).not.toBe('');
        });
    });

    it('should properly await repository call', async () => {
        const softSkills = await useCase.execute();

        expect(Array.isArray(softSkills)).toBe(true);
    });
});

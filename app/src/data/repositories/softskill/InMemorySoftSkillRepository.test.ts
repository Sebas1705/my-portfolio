import { describe, it, expect } from 'vitest';
import { InMemorySoftSkillRepository } from '@/data';

describe('InMemorySoftSkillRepository', () => {
    it('should return all soft skills', async () => {
        const repository = new InMemorySoftSkillRepository();

        const skills = await repository.getAll();

        expect(skills).toBeDefined();
        expect(Array.isArray(skills)).toBe(true);
        expect(skills.length).toBeGreaterThan(0);
    });

    it('should return a copy of the soft skills array', async () => {
        const repository = new InMemorySoftSkillRepository();

        const skills1 = await repository.getAll();
        const skills2 = await repository.getAll();

        expect(skills1).not.toBe(skills2);
        expect(skills1).toEqual(skills2);
    });

    it('should have valid soft skill objects', async () => {
        const repository = new InMemorySoftSkillRepository();

        const skills = await repository.getAll();

        skills.forEach((skill) => {
            expect(skill).toHaveProperty('level');
            expect([1, 2, 3, 4, 5]).toContain(skill.level);
        });
    });

    it('should cast level property to valid numeric type', async () => {
        const repository = new InMemorySoftSkillRepository();

        const skills = await repository.getAll();

        skills.forEach((skill) => {
            expect(typeof skill.level).toBe('number');
            expect(skill.level >= 1 && skill.level <= 5).toBe(true);
        });
    });

    it('should not mutate internal state when modifying returned array', async () => {
        const repository = new InMemorySoftSkillRepository();

        const skills1 = await repository.getAll();
        const originalLength = skills1.length;
        
        skills1.pop();

        const skills2 = await repository.getAll();

        expect(skills2.length).toBe(originalLength);
    });
});
import { describe, it, expect, beforeEach } from 'vitest';
import { InMemorySkillRepository } from '@/data';

describe('InMemorySkillRepository', () => {
    let repository: InMemorySkillRepository;

    beforeEach(() => {
        repository = new InMemorySkillRepository();
    });

    describe('getAll', () => {
        it('should return all skills', async () => {
            const skills = await repository.getAll();

            expect(skills).toBeDefined();
            expect(Array.isArray(skills)).toBe(true);
            expect(skills.length).toBeGreaterThan(0);
        });

        it('should return skills with valid structure', async () => {
            const skills = await repository.getAll();

            skills.forEach((skill) => {
                expect(skill).toHaveProperty('id');
                expect(skill).toHaveProperty('name');
                expect(skill).toHaveProperty('level');
                expect(skill).toHaveProperty('category');
                expect(typeof skill.id).toBe('string');
                expect(typeof skill.name).toBe('string');
                expect([1, 2, 3, 4, 5]).toContain(skill.level);
            });
        });

        it('should return consistent results', async () => {
            const firstCall = await repository.getAll();
            const secondCall = await repository.getAll();

            expect(firstCall).toEqual(secondCall);
        });
    });

    describe('getById', () => {
        it('should return a skill by id', async () => {
            const allSkills = await repository.getAll();
            const skillId = allSkills[0].id;

            const skill = await repository.getById(skillId);

            expect(skill).toBeDefined();
            expect(skill?.id).toBe(skillId);
        });

        it('should return null when skill id does not exist', async () => {
            const skill = await repository.getById('non-existent-id');

            expect(skill).toBeNull();
        });

        it('should handle empty string id', async () => {
            const skill = await repository.getById('');

            expect(skill).toBeNull();
        });

        it('should be case-sensitive for id lookup', async () => {
            const allSkills = await repository.getAll();
            const originalId = allSkills[0].id;

            const skill = await repository.getById(originalId.toUpperCase());

            expect(skill).toBeNull();
        });
    });

    describe('getByCategory', () => {
        it('should return skills filtered by category', async () => {
            const skills = await repository.getByCategory('languages');

            expect(Array.isArray(skills)).toBe(true);
            skills.forEach((skill) => {
                expect(skill.category).toBe('languages');
            });
        });

        it('should return empty array for non-existent category', async () => {
            const skills = await repository.getByCategory('non-existent-category');

            expect(Array.isArray(skills)).toBe(true);
            expect(skills.length).toBe(0);
        });

        it('should handle all valid categories', async () => {
            const validCategories = ['languages', 'frameworks', 'tools', 'ides', 'os', 'ai'] as const;

            for (const category of validCategories) {
                const skills = await repository.getByCategory(category);
                expect(Array.isArray(skills)).toBe(true);

                skills.forEach((skill) => {
                    expect(skill.category).toBe(category);
                });
            }
        });

        it('should be case-sensitive for category lookup', async () => {
            const skillsLowercase = await repository.getByCategory('languages');
            const skillsUppercase = await repository.getByCategory('LANGUAGES');

            expect(skillsLowercase.length).toBeGreaterThan(0);
            expect(skillsUppercase.length).toBe(0);
        });
    });

    describe('getByLevel', () => {
        it('should return skills filtered by level', async () => {
            const skills = await repository.getByLevel(5);

            expect(Array.isArray(skills)).toBe(true);
            skills.forEach((skill) => {
                expect(skill.level).toBe(5);
            });
        });

        it('should return empty array for invalid level', async () => {
            const skills = await repository.getByLevel(10);

            expect(Array.isArray(skills)).toBe(true);
            expect(skills.length).toBe(0);
        });

        it('should return skills for all valid levels', async () => {
            const validLevels = [1, 2, 3, 4, 5];

            for (const level of validLevels) {
                const skills = await repository.getByLevel(level);
                expect(Array.isArray(skills)).toBe(true);

                skills.forEach((skill) => {
                    expect(skill.level).toBe(level);
                });
            }
        });

        it('should handle zero and negative levels', async () => {
            const skillsZero = await repository.getByLevel(0);
            const skillsNegative = await repository.getByLevel(-1);

            expect(skillsZero.length).toBe(0);
            expect(skillsNegative.length).toBe(0);
        });
    });

    describe('Integration tests', () => {
        it('should combine multiple filters logically', async () => {
            const allSkills = await repository.getAll();
            const categorySkills = await repository.getByCategory('languages');
            const levelSkills = await repository.getByLevel(5);

            expect(allSkills.length).toBeGreaterThanOrEqual(categorySkills.length);
            expect(allSkills.length).toBeGreaterThanOrEqual(levelSkills.length);
        });

        it('should maintain data integrity across multiple calls', async () => {
            const firstCall = await repository.getAll();
            await repository.getByCategory('frameworks');
            const secondCall = await repository.getAll();

            expect(firstCall).toEqual(secondCall);
        });
    });
});
import { describe, it, expect } from 'vitest';
import { GetAllProjectsUseCase } from '@/domain';
import { InMemoryProjectRepository } from '@/data';

describe('GetAllProjectsUseCase', () => {
    it('should return all projects sorted by start date', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetAllProjectsUseCase(repository);

        const projects = await useCase.execute();

        expect(projects).toBeDefined();
        expect(Array.isArray(projects)).toBe(true);
        expect(projects.length).toBeGreaterThan(0);

        // Verify sorting by start date (most recent first)
        for (let i = 0; i < projects.length - 1; i++) {
            expect(projects[i].startDate.getTime()).toBeGreaterThanOrEqual(
                projects[i + 1].startDate.getTime()
            );
        }
    });

    it('should return projects with all required properties', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetAllProjectsUseCase(repository);

        const projects = await useCase.execute();
        const project = projects[0];

        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('startDate');
        expect(project).toHaveProperty('type');
        expect(Array.isArray(project.technologies)).toBe(true);
    });
});

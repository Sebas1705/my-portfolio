import { describe, it, expect } from 'vitest';
import { GetProjectsByTypeUseCase } from '@/domain';
import { InMemoryProjectRepository } from '@/data';

describe('GetProjectsByTypeUseCase', () => {
    it('should return only personal projects', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsByTypeUseCase(repository);

        const projects = await useCase.execute('personal');

        expect(projects).toBeDefined();
        expect(Array.isArray(projects)).toBe(true);
        projects.forEach(project => {
            expect(project.type).toBe('personal');
        });
    });

    it('should return only work projects', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsByTypeUseCase(repository);

        const projects = await useCase.execute('work');

        expect(projects).toBeDefined();
        projects.forEach(project => {
            expect(project.type).toBe('work');
        });
    });

    it('should return only academic projects', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsByTypeUseCase(repository);

        const projects = await useCase.execute('academic');

        expect(projects).toBeDefined();
        projects.forEach(project => {
            expect(project.type).toBe('academic');
        });
    });

    it('should return projects sorted by start date', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsByTypeUseCase(repository);

        const projects = await useCase.execute('personal');

        for (let i = 0; i < projects.length - 1; i++) {
            expect(projects[i].startDate.getTime()).toBeGreaterThanOrEqual(
                projects[i + 1].startDate.getTime()
            );
        }
    });
});

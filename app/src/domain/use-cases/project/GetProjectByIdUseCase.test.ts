import { describe, it, expect, beforeEach } from 'vitest';
import { GetProjectByIdUseCase } from '@/domain';
import { InMemoryProjectRepository } from '@/data';

describe('GetProjectByIdUseCase', () => {
    let repository: InMemoryProjectRepository;
    let useCase: GetProjectByIdUseCase;

    beforeEach(() => {
        repository = new InMemoryProjectRepository();
        useCase = new GetProjectByIdUseCase(repository);
    });

    it('should execute and return a project by id', async () => {
        const projects = await repository.getAll();
        const firstProjectId = projects[0].id;

        const project = await useCase.execute(firstProjectId);

        expect(project).toBeDefined();
        expect(project?.id).toBe(firstProjectId);
    });

    it('should return null for non-existent project id', async () => {
        const project = await useCase.execute('non-existent-id');

        expect(project).toBeNull();
    });

    it('should return project with complete structure', async () => {
        const projects = await repository.getAll();
        const firstProjectId = projects[0].id;

        const project = await useCase.execute(firstProjectId);

        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('type');
        expect(project).toHaveProperty('startDate');
        expect(project).toHaveProperty('technologies');
    });

    it('should return correct project when multiple exist', async () => {
        const projects = await repository.getAll();

        if (projects.length >= 2) {
            const secondProjectId = projects[1].id;
            const project = await useCase.execute(secondProjectId);

            expect(project?.id).toBe(secondProjectId);
            expect(project?.id).not.toBe(projects[0].id);
        }
    });

    it('should return project with Date instances', async () => {
        const projects = await repository.getAll();
        const firstProjectId = projects[0].id;

        const project = await useCase.execute(firstProjectId);

        expect(project?.startDate).toBeInstanceOf(Date);
        if (project?.endDate) {
            expect(project.endDate).toBeInstanceOf(Date);
        }
    });

    it('should be case-sensitive for id lookup', async () => {
        const projects = await repository.getAll();
        const projectId = projects[0].id;

        const result = await useCase.execute(projectId.toUpperCase());

        expect(result).toBeNull();
    });

    it('should handle empty string id', async () => {
        const project = await useCase.execute('');

        expect(project).toBeNull();
    });
});

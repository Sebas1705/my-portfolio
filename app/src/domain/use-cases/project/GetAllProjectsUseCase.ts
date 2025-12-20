import type { IProjectRepository, Project } from '@/domain';

export class GetAllProjectsUseCase {
    constructor(private projectRepository: IProjectRepository) {}

    async execute(): Promise<Project[]> {
        return await this.projectRepository.getAll();
    }
}

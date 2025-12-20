import type { IProjectRepository, Project } from '@/domain';

export class GetProjectsByTypeUseCase {
    constructor(private projectRepository: IProjectRepository) {}

    async execute(type: 'work' | 'academic' | 'personal'): Promise<Project[]> {
        return await this.projectRepository.getByType(type);
    }
}

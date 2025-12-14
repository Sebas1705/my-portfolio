import type { IProjectRepository, Project } from '@/domain';

export class GetRelatedProjectsUseCase {
    constructor(private projectRepository: IProjectRepository) {}

    async execute(relatedId: string): Promise<Project[]> {
        return await this.projectRepository.getByRelatedTo(relatedId);
    }
}

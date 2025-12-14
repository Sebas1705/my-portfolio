import type { Project, IProjectRepository } from '@/domain';

export class GetProjectByIdUseCase {
    constructor(private repository: IProjectRepository) {}

    async execute(id: string): Promise<Project | null> {
        return this.repository.getById(id);
    }
}

import type { ProjectRepository } from '@domain/repositories/ProjectRepository';
import type { Project } from '@domain/entities/Project';

export class GetRelatedProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(relatedId: string): Promise<Project[]> {
    return await this.projectRepository.getByRelatedTo(relatedId);
  }
}

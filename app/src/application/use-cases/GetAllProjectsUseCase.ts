import type { ProjectRepository } from '@domain/repositories/ProjectRepository';
import type { Project } from '@domain/entities/Project';

export class GetAllProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return await this.projectRepository.getAll();
  }
}

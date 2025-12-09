import type { ProjectRepository } from '@domain/repositories/ProjectRepository';
import type { Project } from '@domain/entities/Project';

export class GetProjectsByTypeUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(type: 'work' | 'academic' | 'personal'): Promise<Project[]> {
    return await this.projectRepository.getByType(type);
  }
}

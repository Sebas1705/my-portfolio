import type { Project } from '@domain/entities/Project';
import type { ProjectRepository } from '@domain/repositories/ProjectRepository';

export class GetProjectByIdUseCase {
  constructor(private repository: ProjectRepository) {}

  async execute(id: string): Promise<Project | null> {
    return this.repository.getById(id);
  }
}

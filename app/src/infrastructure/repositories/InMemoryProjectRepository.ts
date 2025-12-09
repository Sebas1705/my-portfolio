import type { ProjectRepository } from '@domain/repositories/ProjectRepository';
import type { Project } from '@domain/entities/Project';
import { projectsData } from '../data/projectsData';

export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = projectsData;

  async getAll(): Promise<Project[]> {
    return [...this.projects].sort((a, b) => 
      b.startDate.getTime() - a.startDate.getTime()
    );
  }

  async getByType(type: 'work' | 'academic' | 'personal'): Promise<Project[]> {
    return this.projects
      .filter(project => project.type === type)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }

  async getById(id: string): Promise<Project | null> {
    return this.projects.find(project => project.id === id) || null;
  }

  async getByRelatedTo(relatedId: string): Promise<Project[]> {
    return this.projects
      .filter(project => project.relatedTo === relatedId)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }
}

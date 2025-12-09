import type { Project } from '../entities/Project';

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
  getByType(type: 'work' | 'academic' | 'personal'): Promise<Project[]>;
  getById(id: string): Promise<Project | null>;
  getByRelatedTo(relatedId: string): Promise<Project[]>;
}

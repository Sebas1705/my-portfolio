import type { Project } from '@/domain';

export interface IProjectRepository {
    getAll(): Promise<Project[]>;
    getByType(type: 'work' | 'academic' | 'personal'): Promise<Project[]>;
    getById(id: string): Promise<Project | null>;
    getByRelatedTo(relatedId: string): Promise<Project[]>;
}

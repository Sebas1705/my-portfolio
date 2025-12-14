import type { IProjectRepository, Project } from '@/domain';
import projectsJson from '@/data/datasources/projectsData.json';

export class InMemoryProjectRepository implements IProjectRepository {
    private projects: Project[] = projectsJson.map((proj) => ({
        ...proj,
        startDate: new Date(proj.startDate),
        endDate: proj.endDate ? new Date(proj.endDate) : undefined,
        type : proj.type as 'work' | 'academic' | 'personal',
    }));

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
            .filter(project => project.relatedTo?.includes(relatedId))
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    }
}

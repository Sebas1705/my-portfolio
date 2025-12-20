import type { WorkExperience } from '@/domain';

export interface IWorkExperienceRepository {
    getAll(): Promise<WorkExperience[]>;
    getById(id: string): Promise<WorkExperience | null>;
}

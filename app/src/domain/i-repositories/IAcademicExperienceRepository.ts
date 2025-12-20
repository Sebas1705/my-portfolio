import type { AcademicExperience } from '@/domain';

export interface IAcademicExperienceRepository {
    getAll(): Promise<AcademicExperience[]>;
    getById(id: string): Promise<AcademicExperience | null>;
}

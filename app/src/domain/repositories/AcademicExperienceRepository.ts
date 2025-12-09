import type { AcademicExperience } from '../entities/AcademicExperience';

export interface AcademicExperienceRepository {
  getAll(): Promise<AcademicExperience[]>;
  getById(id: string): Promise<AcademicExperience | null>;
}

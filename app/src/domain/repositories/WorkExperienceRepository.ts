import type { WorkExperience } from '../entities/WorkExperience';

export interface WorkExperienceRepository {
  getAll(): Promise<WorkExperience[]>;
  getById(id: string): Promise<WorkExperience | null>;
}

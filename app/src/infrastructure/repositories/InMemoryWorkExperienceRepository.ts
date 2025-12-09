import type { WorkExperienceRepository } from '@domain/repositories/WorkExperienceRepository';
import type { WorkExperience } from '@domain/entities/WorkExperience';
import { workExperiencesData } from '../data/workExperiencesData';

export class InMemoryWorkExperienceRepository implements WorkExperienceRepository {
  private experiences: WorkExperience[] = workExperiencesData;

  async getAll(): Promise<WorkExperience[]> {
    return [...this.experiences].sort((a, b) => 
      b.startDate.getTime() - a.startDate.getTime()
    );
  }

  async getById(id: string): Promise<WorkExperience | null> {
    return this.experiences.find(exp => exp.id === id) || null;
  }
}

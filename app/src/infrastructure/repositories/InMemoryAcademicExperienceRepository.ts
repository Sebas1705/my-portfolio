import type { AcademicExperienceRepository } from '@domain/repositories/AcademicExperienceRepository';
import type { AcademicExperience } from '@domain/entities/AcademicExperience';
import { academicExperiencesData } from '../data/academicExperiencesData';

export class InMemoryAcademicExperienceRepository implements AcademicExperienceRepository {
  private experiences: AcademicExperience[] = academicExperiencesData;

  async getAll(): Promise<AcademicExperience[]> {
    return [...this.experiences].sort((a, b) => 
      b.startDate.getTime() - a.startDate.getTime()
    );
  }

  async getById(id: string): Promise<AcademicExperience | null> {
    return this.experiences.find(exp => exp.id === id) || null;
  }
}

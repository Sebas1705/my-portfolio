import type { AcademicExperienceRepository } from '@domain/repositories/AcademicExperienceRepository';
import type { AcademicExperience } from '@domain/entities/AcademicExperience';

export class GetAcademicExperiencesUseCase {
  constructor(private academicExperienceRepository: AcademicExperienceRepository) {}

  async execute(): Promise<AcademicExperience[]> {
    return await this.academicExperienceRepository.getAll();
  }
}

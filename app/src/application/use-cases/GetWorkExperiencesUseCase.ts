import type { WorkExperienceRepository } from '@domain/repositories/WorkExperienceRepository';
import type { WorkExperience } from '@domain/entities/WorkExperience';

export class GetWorkExperiencesUseCase {
  constructor(private workExperienceRepository: WorkExperienceRepository) {}

  async execute(): Promise<WorkExperience[]> {
    return await this.workExperienceRepository.getAll();
  }
}

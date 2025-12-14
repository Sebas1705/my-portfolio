import type { IAcademicExperienceRepository, AcademicExperience } from '@/domain';

export class GetAcademicExperiencesUseCase {
    constructor(private academicExperienceRepository: IAcademicExperienceRepository) {}

    async execute(): Promise<AcademicExperience[]> {
        return await this.academicExperienceRepository.getAll();
    }
}

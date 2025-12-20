import type { IWorkExperienceRepository, WorkExperience } from '@/domain';

export class GetWorkExperiencesUseCase {
    constructor(private workExperienceRepository: IWorkExperienceRepository) {}

    async execute(): Promise<WorkExperience[]> {
        return await this.workExperienceRepository.getAll();
    }
}

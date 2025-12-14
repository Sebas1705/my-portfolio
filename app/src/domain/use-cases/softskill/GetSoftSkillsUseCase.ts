import type { SoftSkill, ISoftSkillRepository } from '@/domain';

export class GetSoftSkillsUseCase {
    constructor(private softSkillRepository: ISoftSkillRepository) {}

    async execute(): Promise<SoftSkill[]> {
        return await this.softSkillRepository.getAll();
    }
}

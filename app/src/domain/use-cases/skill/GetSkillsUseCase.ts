import type { Skill, ISkillRepository } from '@/domain';

export class GetSkillsUseCase {
    constructor(private skillRepository: ISkillRepository) {}

    async execute(): Promise<Skill[]> {
        return await this.skillRepository.getAll();
    }
}

import type { Skill, ISkillRepository } from '@/domain';

export class GetAllSkillsUseCase {
    constructor(private repository: ISkillRepository) {}

    async execute(): Promise<Skill[]> {
        return this.repository.getAll();
    }
}

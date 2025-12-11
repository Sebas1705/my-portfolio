import type { Skill } from '@domain/entities/Skill';
import type { ISkillRepository } from '@domain/repositories/SkillRepository';

export class GetSkillsUseCase {
  constructor(private skillRepository: ISkillRepository) {}

  async execute(): Promise<Skill[]> {
    return await this.skillRepository.getAll();
  }
}

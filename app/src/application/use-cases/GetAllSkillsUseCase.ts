import type { Skill } from '@domain/entities/Skill';
import type { ISkillRepository } from '@domain/repositories/SkillRepository';

export class GetAllSkillsUseCase {
  constructor(private repository: ISkillRepository) {}

  async execute(): Promise<Skill[]> {
    return this.repository.getAll();
  }
}

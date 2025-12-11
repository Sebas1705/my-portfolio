import type { SoftSkill } from '@domain/entities/SoftSkill';
import type { ISoftSkillRepository } from '@domain/repositories/SoftSkillRepository';

export class GetSoftSkillsUseCase {
  constructor(private softSkillRepository: ISoftSkillRepository) {}

  async execute(): Promise<SoftSkill[]> {
    return await this.softSkillRepository.getAll();
  }
}

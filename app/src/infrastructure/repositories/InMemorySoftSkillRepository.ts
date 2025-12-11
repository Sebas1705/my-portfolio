import type { SoftSkill } from '@domain/entities/SoftSkill';
import type { ISoftSkillRepository } from '@domain/repositories/SoftSkillRepository';
import { softSkillsData } from '@infrastructure/data/softSkillsData';

export class InMemorySoftSkillRepository implements ISoftSkillRepository {
  private softSkills: SoftSkill[] = softSkillsData;

  async getAll(): Promise<SoftSkill[]> {
    return [...this.softSkills];
  }
}

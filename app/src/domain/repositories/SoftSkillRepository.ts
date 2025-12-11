import type { SoftSkill } from '@domain/entities/SoftSkill';

export interface ISoftSkillRepository {
  getAll(): Promise<SoftSkill[]>;
}

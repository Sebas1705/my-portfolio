import type { Skill } from '@domain/entities/Skill';

export interface ISkillRepository {
  getAll(): Promise<Skill[]>;
  getById(id: string): Promise<Skill | null>;
  getByCategory(category: string): Promise<Skill[]>;
  getByLevel(level: number): Promise<Skill[]>;
}

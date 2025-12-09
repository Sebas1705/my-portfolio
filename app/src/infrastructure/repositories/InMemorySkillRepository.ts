import type { Skill } from '@domain/entities/Skill';
import type { ISkillRepository } from '@domain/repositories/SkillRepository';
import { skillsData } from '@infrastructure/data/skillsData';

export class InMemorySkillRepository implements ISkillRepository {
  private skills: Skill[] = skillsData;

  async getAll(): Promise<Skill[]> {
    return this.skills;
  }

  async getById(id: string): Promise<Skill | null> {
    return this.skills.find((skill) => skill.id === id) || null;
  }

  async getByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter((skill) => skill.category === category);
  }

  async getByLevel(level: number): Promise<Skill[]> {
    return this.skills.filter((skill) => skill.level === level);
  }
}

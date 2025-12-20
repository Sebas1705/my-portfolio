import type { Skill, ISkillRepository } from '@/domain';
import skillsJson from '@/data/datasources/skillsData.json';

export class InMemorySkillRepository implements ISkillRepository {
    private skills: Skill[] = skillsJson.map((skill) => ({
        ...skill,
        level: skill.level as 1 | 2 | 3 | 4 | 5,
        category: skill.category as 'languages' | 'frameworks' | 'tools' | 'ides' | 'os' | 'ai',
    }));

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

import type { SoftSkill, ISoftSkillRepository } from '@/domain';
import softSkillsJson from '@/data/datasources/softSkillsData.json';

export class InMemorySoftSkillRepository implements ISoftSkillRepository {
    private softSkills: SoftSkill[] = softSkillsJson.map((skill) => ({
        ...skill,
        level: skill.level as 1 | 2 | 3 | 4 | 5,
    }));

    async getAll(): Promise<SoftSkill[]> {
        return [...this.softSkills];
    }
}

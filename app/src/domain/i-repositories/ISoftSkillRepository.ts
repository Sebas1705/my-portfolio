import type { SoftSkill } from '@/domain';

export interface ISoftSkillRepository {
    getAll(): Promise<SoftSkill[]>;
}

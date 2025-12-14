import type { ISkillsLabelsRepository } from "@/domain";
import type { SkillsLabels } from "@/domain";
import skillsLabelsJSON from "@/data/datasources/labels/skillsLabels.json";

export class InMemorySkillsLabelsRepository implements ISkillsLabelsRepository {
    private skillsLabels: SkillsLabels = skillsLabelsJSON as SkillsLabels;

    async getAll(): Promise<SkillsLabels> {
        return this.skillsLabels;
    }
}

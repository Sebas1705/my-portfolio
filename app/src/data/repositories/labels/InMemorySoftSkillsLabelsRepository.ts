import type { ISoftSkillsLabelsRepository } from "@/domain";
import type { SoftSkillsLabels } from "@/domain";
import softSkillsLabelsJSON from "@/data/datasources/labels/softSkillsLabels.json";

export class InMemorySoftSkillsLabelsRepository implements ISoftSkillsLabelsRepository {
    private softSkillsLabels: SoftSkillsLabels = softSkillsLabelsJSON as SoftSkillsLabels;

    async getAll(): Promise<SoftSkillsLabels> {
        return this.softSkillsLabels;
    }
}

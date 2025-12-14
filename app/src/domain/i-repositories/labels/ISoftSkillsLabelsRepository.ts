import type { SoftSkillsLabels } from "@/domain";

export interface ISoftSkillsLabelsRepository {
    getAll(): Promise<SoftSkillsLabels>;
}

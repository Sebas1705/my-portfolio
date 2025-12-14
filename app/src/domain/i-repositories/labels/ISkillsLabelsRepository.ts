import type { SkillsLabels } from "@/domain";

export interface ISkillsLabelsRepository {
    getAll(): Promise<SkillsLabels>;
}

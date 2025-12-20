import type { ProjectLabels } from "@/domain";

export interface IProjectLabelsRepository {
    getAll(): Promise<ProjectLabels>;
}

import type { IProjectLabelsRepository } from "@/domain";
import type { ProjectLabels } from "@/domain";
import projectLabelsJSON from "@/data/datasources/labels/projectLabels.json";

export class InMemoryProjectLabelsRepository implements IProjectLabelsRepository {
    private projectLabels: ProjectLabels = projectLabelsJSON as ProjectLabels;

    async getAll(): Promise<ProjectLabels> {
        return this.projectLabels;
    }
}

import type { IWorkLabelsRepository } from "@/domain";
import type { WorkLabels } from "@/domain";
import workLabelsJSON from "@/data/datasources/labels/workLabels.json";

export class InMemoryWorkLabelsRepository implements IWorkLabelsRepository {
    private workLabels: WorkLabels = workLabelsJSON as WorkLabels;

    async getAll(): Promise<WorkLabels> {
        return this.workLabels;
    }
}

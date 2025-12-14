import type { WorkLabels } from "@/domain";

export interface IWorkLabelsRepository {
    getAll(): Promise<WorkLabels>;
}

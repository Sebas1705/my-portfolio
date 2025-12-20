import type { CommonLabels } from "@/domain";

export interface ICommonLabelsRepository {
    getAll(): Promise<CommonLabels>;
}

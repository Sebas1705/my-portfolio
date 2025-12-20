import type { ICommonLabelsRepository } from "@/domain";
import type { CommonLabels } from "@/domain";
import commonLabelsJSON from "@/data/datasources/labels/commonLabels.json";

export class InMemoryCommonLabelsRepository implements ICommonLabelsRepository {
    private commonLabels: CommonLabels = commonLabelsJSON as CommonLabels;

    async getAll(): Promise<CommonLabels> {
        return this.commonLabels;
    }
}

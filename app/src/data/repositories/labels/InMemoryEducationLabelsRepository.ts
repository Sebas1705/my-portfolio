import type { IEducationLabelsRepository } from "@/domain";
import type { EducationLabels } from "@/domain";
import educationLabelsJSON from "@/data/datasources/labels/educationLabels.json";

export class InMemoryEducationLabelsRepository implements IEducationLabelsRepository {
    private educationLabels: EducationLabels = educationLabelsJSON as EducationLabels;

    async getAll(): Promise<EducationLabels> {
        return this.educationLabels;
    }
}

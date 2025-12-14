import type { EducationLabels } from "@/domain";

export interface IEducationLabelsRepository {
    getAll(): Promise<EducationLabels>;
}

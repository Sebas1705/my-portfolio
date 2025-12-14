import type { CourseLabels } from "@/domain";

export interface ICourseLabelsRepository {
    getAll(): Promise<CourseLabels>;
}

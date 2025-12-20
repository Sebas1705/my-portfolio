import type { ICourseLabelsRepository } from "@/domain";
import type { CourseLabels } from "@/domain";
import courseLabelsJSON from "@/data/datasources/labels/courseLabels.json";

export class InMemoryCourseLabelsRepository implements ICourseLabelsRepository {
    private courseLabels: CourseLabels = courseLabelsJSON as CourseLabels;

    async getAll(): Promise<CourseLabels> {
        return this.courseLabels;
    }
}

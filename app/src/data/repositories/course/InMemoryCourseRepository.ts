import type { Course, ICourseRepository } from '@/domain';
import coursesJson from '@/data/datasources/coursesData.json';

export class InMemoryCourseRepository implements ICourseRepository {
    private courses: Course[] = coursesJson.map((course) => ({
        ...course,
        completionDate: new Date(course.completionDate),
    }));

    async getAll(): Promise<Course[]> {
        return this.courses;
    }

    async getById(id: string): Promise<Course | null> {
        return this.courses.find((course) => course.id === id) || null;
    }
}

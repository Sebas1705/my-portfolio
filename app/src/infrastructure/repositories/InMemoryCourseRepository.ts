import type { Course } from '@domain/entities/Course';
import type { ICourseRepository } from '@domain/repositories/CourseRepository';
import { coursesData } from '@infrastructure/data/coursesData';

export class InMemoryCourseRepository implements ICourseRepository {
  private courses: Course[] = coursesData;

  async getAll(): Promise<Course[]> {
    return this.courses;
  }

  async getById(id: string): Promise<Course | null> {
    return this.courses.find((course) => course.id === id) || null;
  }
}

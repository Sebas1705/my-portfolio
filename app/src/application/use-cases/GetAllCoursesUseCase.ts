import type { Course } from '@domain/entities/Course';
import type { ICourseRepository } from '@domain/repositories/CourseRepository';

export class GetAllCoursesUseCase {
  constructor(private repository: ICourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.repository.getAll();
  }
}

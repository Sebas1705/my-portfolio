import type { Course } from '@domain/entities/Course';

export interface ICourseRepository {
  getAll(): Promise<Course[]>;
  getById(id: string): Promise<Course | null>;
}

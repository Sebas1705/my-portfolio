import type { Course } from '@/domain';

export interface ICourseRepository {
    getAll(): Promise<Course[]>;
    getById(id: string): Promise<Course | null>;
}

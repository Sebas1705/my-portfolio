import type { Course, ICourseRepository } from '@/domain';

export class GetAllCoursesUseCase {
    constructor(private repository: ICourseRepository) {}

    async execute(): Promise<Course[]> {
        return this.repository.getAll();
    }
}

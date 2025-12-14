import type { IWorkExperienceRepository, WorkExperience } from '@/domain';
import workJson from '@/data/datasources/workExperiencesData.json';

export class InMemoryWorkExperienceRepository implements IWorkExperienceRepository {
    private experiences: WorkExperience[] = workJson.map((exp) => ({
        ...exp,
        startDate: new Date(exp.startDate),
        endDate: exp.endDate ? new Date(exp.endDate) : undefined,
    }));

    async getAll(): Promise<WorkExperience[]> {
        return [...this.experiences].sort((a, b) => 
            b.startDate.getTime() - a.startDate.getTime()
        );
    }

    async getById(id: string): Promise<WorkExperience | null> {
        return this.experiences.find(exp => exp.id === id) || null;
    }
}

import type { IAcademicExperienceRepository, AcademicExperience } from '@/domain';
import academicJson from '@/data/datasources/academicExperiencesData.json';

export class InMemoryAcademicExperienceRepository implements IAcademicExperienceRepository {
    private experiences: AcademicExperience[] = academicJson.map((exp) => ({
        ...exp,
        startDate: new Date(exp.startDate),
        endDate: exp.endDate ? new Date(exp.endDate) : undefined,
    }));

    async getAll(): Promise<AcademicExperience[]> {
        return [...this.experiences].sort((a, b) => 
            b.startDate.getTime() - a.startDate.getTime()
        );
    }

    async getById(id: string): Promise<AcademicExperience | null> {
        return this.experiences.find(exp => exp.id === id) || null;
    }
}

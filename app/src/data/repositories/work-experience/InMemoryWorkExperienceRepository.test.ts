import { describe, it, expect } from 'vitest';
import { InMemoryWorkExperienceRepository } from '@/data';

describe('InMemoryWorkExperienceRepository', () => {
    it('should return all work experiences sorted by most recent first', async () => {
        const repository = new InMemoryWorkExperienceRepository();
        const experiences = await repository.getAll();
        
        expect(experiences).toHaveLength(2);
        expect(experiences[0].startDate > experiences[1].startDate).toBe(true);
    });

    it('should return a work experience by id', async () => {
        const repository = new InMemoryWorkExperienceRepository();
        const experience = await repository.getById('work-1');
        
        expect(experience).toBeDefined();
        expect(experience?.id).toBe('work-1');
    });

    it('should return null for non-existent id', async () => {
        const repository = new InMemoryWorkExperienceRepository();
        const experience = await repository.getById('non-existent');
        
        expect(experience).toBeNull();
    });
});

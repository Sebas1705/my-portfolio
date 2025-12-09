import { describe, it, expect } from 'vitest';
import { GetWorkExperiencesUseCase } from './GetWorkExperiencesUseCase';
import { InMemoryWorkExperienceRepository } from '@infrastructure/repositories/InMemoryWorkExperienceRepository';

describe('GetWorkExperiencesUseCase', () => {
  it('should return all work experiences', async () => {
    const repository = new InMemoryWorkExperienceRepository();
    const useCase = new GetWorkExperiencesUseCase(repository);

    const experiences = await useCase.execute();

    expect(experiences).toBeDefined();
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('should return experiences sorted by start date', async () => {
    const repository = new InMemoryWorkExperienceRepository();
    const useCase = new GetWorkExperiencesUseCase(repository);

    const experiences = await useCase.execute();

    for (let i = 0; i < experiences.length - 1; i++) {
      expect(experiences[i].startDate.getTime()).toBeGreaterThanOrEqual(
        experiences[i + 1].startDate.getTime()
      );
    }
  });

  it('should return experiences with all required properties', async () => {
    const repository = new InMemoryWorkExperienceRepository();
    const useCase = new GetWorkExperiencesUseCase(repository);

    const experiences = await useCase.execute();
    const experience = experiences[0];

    expect(experience).toHaveProperty('id');
    expect(experience).toHaveProperty('company');
    expect(experience).toHaveProperty('position');
    expect(experience).toHaveProperty('description');
    expect(experience).toHaveProperty('startDate');
    expect(experience).toHaveProperty('location');
    expect(experience).toHaveProperty('technologies');
    expect(experience).toHaveProperty('achievements');
    expect(Array.isArray(experience.technologies)).toBe(true);
    expect(Array.isArray(experience.achievements)).toBe(true);
  });
});

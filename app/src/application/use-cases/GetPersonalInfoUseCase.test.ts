import { describe, it, expect } from 'vitest';
import { GetPersonalInfoUseCase } from './GetPersonalInfoUseCase';
import { InMemoryPersonalInfoRepository } from '@infrastructure/repositories/InMemoryPersonalInfoRepository';

describe('GetPersonalInfoUseCase', () => {
  it('should return personal info', async () => {
    const repository = new InMemoryPersonalInfoRepository();
    const useCase = new GetPersonalInfoUseCase(repository);

    const info = await useCase.execute();

    expect(info).toBeDefined();
    expect(info).toHaveProperty('name');
    expect(info).toHaveProperty('title');
    expect(info).toHaveProperty('bio');
    expect(info).toHaveProperty('email');
    expect(info).toHaveProperty('location');
    expect(info).toHaveProperty('profileImage');
    expect(info).toHaveProperty('socialLinks');
  });

  it('should return social links object', async () => {
    const repository = new InMemoryPersonalInfoRepository();
    const useCase = new GetPersonalInfoUseCase(repository);

    const info = await useCase.execute();

    expect(info.socialLinks).toBeDefined();
    expect(typeof info.socialLinks).toBe('object');
  });

  it('should have valid email format', async () => {
    const repository = new InMemoryPersonalInfoRepository();
    const useCase = new GetPersonalInfoUseCase(repository);

    const info = await useCase.execute();

    expect(info.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

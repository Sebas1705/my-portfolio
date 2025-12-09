import type { PersonalInfoRepository } from '@domain/repositories/PersonalInfoRepository';
import type { PersonalInfo } from '@domain/entities/PersonalInfo';

export class GetPersonalInfoUseCase {
  constructor(private personalInfoRepository: PersonalInfoRepository) {}

  async execute(): Promise<PersonalInfo> {
    return await this.personalInfoRepository.get();
  }
}

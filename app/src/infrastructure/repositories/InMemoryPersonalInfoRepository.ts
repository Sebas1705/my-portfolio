import type { PersonalInfoRepository } from '@domain/repositories/PersonalInfoRepository';
import type { PersonalInfo } from '@domain/entities/PersonalInfo';
import { personalInfoData } from '../data/personalInfoData';

export class InMemoryPersonalInfoRepository implements PersonalInfoRepository {
  private info: PersonalInfo = personalInfoData;

  async get(): Promise<PersonalInfo> {
    return { ...this.info };
  }
}

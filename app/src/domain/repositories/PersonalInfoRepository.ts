import type { PersonalInfo } from '../entities/PersonalInfo';

export interface PersonalInfoRepository {
  get(): Promise<PersonalInfo>;
}

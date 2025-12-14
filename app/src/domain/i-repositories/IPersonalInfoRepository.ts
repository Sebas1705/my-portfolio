import type { PersonalInfo } from '@/domain';

export interface IPersonalInfoRepository {
    get(): Promise<PersonalInfo>;
}

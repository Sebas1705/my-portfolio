import type { IPersonalInfoRepository, PersonalInfo } from '@/domain';
import personalJson from '@/data/datasources/personalInfoData.json';

export class InMemoryPersonalInfoRepository implements IPersonalInfoRepository {
    private info: PersonalInfo = personalJson as PersonalInfo;

    async get(): Promise<PersonalInfo> {
        return { ...this.info };
    }
}

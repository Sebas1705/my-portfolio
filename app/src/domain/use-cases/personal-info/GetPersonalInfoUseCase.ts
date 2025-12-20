import type { IPersonalInfoRepository, PersonalInfo } from '@/domain';

export class GetPersonalInfoUseCase {
    constructor(private personalInfoRepository: IPersonalInfoRepository) {}

    async execute(): Promise<PersonalInfo> {
        return await this.personalInfoRepository.get();
    }
}

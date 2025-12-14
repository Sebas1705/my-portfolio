import type {
  INavigationLabelsRepository,
  ICommonLabelsRepository,
  IWorkLabelsRepository,
  IEducationLabelsRepository,
  ISkillsLabelsRepository,
  ISoftSkillsLabelsRepository,
  IProjectLabelsRepository,
  ICourseLabelsRepository,
  IContactLabelsRepository,
  IAboutLabelsRepository,
  IFooterLabelsRepository,
  NavigationLabels,
  CommonLabels,
  WorkLabels,
  EducationLabels,
  SkillsLabels,
  SoftSkillsLabels,
  ProjectLabels,
  CourseLabels,
  ContactLabels,
  AboutLabels,
  FooterLabels
} from '@/domain';

/**
 * Get Navigation Labels Use Case
 */
export class GetNavigationLabelsUseCase {
  constructor(private readonly repository: INavigationLabelsRepository) {}

  async execute(): Promise<NavigationLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Common Labels Use Case
 */
export class GetCommonLabelsUseCase {
  constructor(private readonly repository: ICommonLabelsRepository) {}

  async execute(): Promise<CommonLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Work Labels Use Case
 */
export class GetWorkLabelsUseCase {
  constructor(private readonly repository: IWorkLabelsRepository) {}

  async execute(): Promise<WorkLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Education Labels Use Case
 */
export class GetEducationLabelsUseCase {
  constructor(private readonly repository: IEducationLabelsRepository) {}

  async execute(): Promise<EducationLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Skills Labels Use Case
 */
export class GetSkillsLabelsUseCase {
  constructor(private readonly repository: ISkillsLabelsRepository) {}

  async execute(): Promise<SkillsLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Soft Skills Labels Use Case
 */
export class GetSoftSkillsLabelsUseCase {
  constructor(private readonly repository: ISoftSkillsLabelsRepository) {}

  async execute(): Promise<SoftSkillsLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Project Labels Use Case
 */
export class GetProjectLabelsUseCase {
  constructor(private readonly repository: IProjectLabelsRepository) {}

  async execute(): Promise<ProjectLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Course Labels Use Case
 */
export class GetCourseLabelsUseCase {
  constructor(private readonly repository: ICourseLabelsRepository) {}

  async execute(): Promise<CourseLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Contact Labels Use Case
 */
export class GetContactLabelsUseCase {
  constructor(private readonly repository: IContactLabelsRepository) {}

  async execute(): Promise<ContactLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get About Labels Use Case
 */
export class GetAboutLabelsUseCase {
  constructor(private readonly repository: IAboutLabelsRepository) {}

  async execute(): Promise<AboutLabels> {
    return await this.repository.getAll();
  }
}

/**
 * Get Footer Labels Use Case
 */
export class GetFooterLabelsUseCase {
  constructor(private readonly repository: IFooterLabelsRepository) {}

  async execute(): Promise<FooterLabels> {
    return await this.repository.getAll();
  }
}

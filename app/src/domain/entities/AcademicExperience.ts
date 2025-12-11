import type { Translations } from '@domain/entities/Language';

// Domain Entity: Academic Experience
export interface AcademicExperience {
  id: string;
  institution: Translations;
  degree: Translations;
  field: Translations;
  description: Translations;
  startDate: Date;
  endDate?: Date;
  location: Translations;
  achievements: Translations[];
}

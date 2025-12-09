// Domain Entity: Academic Experience
export interface AcademicExperience {
  id: string;
  institution: string;
  degree: string;
  field: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  gpa?: string;
  achievements: string[];
}

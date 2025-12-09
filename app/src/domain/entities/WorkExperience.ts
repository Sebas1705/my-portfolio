// Domain Entity: Work Experience
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  technologies: string[];
  achievements: string[];
}

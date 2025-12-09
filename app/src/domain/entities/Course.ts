// Domain Entity: Course
export interface Course {
  id: string;
  title: string;
  description: string;
  institution: string;
  completionDate: Date;
  certificateUrl?: string;
  url?: string;
  skills?: string[]; // Related skill IDs
  category: 'online' | 'certification' | 'bootcamp' | 'workshop';
}

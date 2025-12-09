// Domain Entity: Project
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  startDate: Date;
  endDate?: Date;
  type: 'work' | 'academic' | 'personal';
  relatedTo?: string; // ID of work or academic experience
}

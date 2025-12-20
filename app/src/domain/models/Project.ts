import type { Translations } from "./Language";

// Domain Entity: Project
export interface Project {
    id: string;
    title: Translations;
    description: Translations;
    technologies: string[]; // List of technology IDs used
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
    startDate: Date;
    endDate?: Date;
    type: 'work' | 'academic' | 'personal';
    relatedTo?: string[]; // ID of work or academic experience (optional for personal projects)
}

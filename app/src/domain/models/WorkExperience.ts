import type { Translations } from "./Language";

// Domain Entity: Work Experience
export interface WorkExperience {
    id: string;
    company: string;
    position: Translations;
    description: Translations;
    startDate: Date;
    endDate?: Date;
    location: Translations;
    technologies: string[]; // List of technology IDs used
    achievements: Translations[];
    companyUrl?: string;
}

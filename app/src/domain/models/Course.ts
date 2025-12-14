import type { Translations } from "./Language";

// Domain Entity: Course
export interface Course {
    id: string;
    title: Translations;
    description: Translations;
    institution: Translations;
    completionDate: Date;
    certificateUrl?: string;
    url?: string;
    skills?: string[];
}

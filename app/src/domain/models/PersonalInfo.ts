import type { Translations } from "./Language";

// Domain Entity: Personal Info
export interface PersonalInfo {
    name: string;
    name_long: string;
    name_medium: string;
    name_short: string;
    description: Translations;
    title: Translations;
    bio: Translations;
    email: string;
    location: Translations;
    profileImage: string;
    socialLinks: {
        github?: string;
        codewars?: string;
        linkedin?: string;
    };
}

import type { Translations } from "./Language";

// Domain Entity: Personal Info
export interface PersonalInfo {
  name: string;
  title: Translations;
  bio: Translations;
  email: string;
  phone?: string;
  location: string;
  profileImage: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

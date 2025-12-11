import type { Translations } from "./Language";

// Domain Entity: Skill (Technology Mastery)
export interface Skill {
  id: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1: Beginner, 5: Expert
  category: 'languages' | 'frameworks' | 'tools' | 'ides' | 'os';
  yearsOfExperience: number;
  description?: Translations;
}

import type { Translations } from "./Language";

export interface SoftSkill {
    id: string;
    name: Translations;
    description: Translations;
    icon: string; // Emoji o icono
    level: 1 | 2 | 3 | 4 | 5;
}

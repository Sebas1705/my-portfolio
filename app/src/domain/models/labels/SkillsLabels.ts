import type { Translations } from "@/domain";

export interface SkillsLabels {
    title: Translations;
    subtitle: Translations;

    //Categories:
    categoryLanguages: Translations;
    categoryFrameworks: Translations;
    categoryTools: Translations;
    categoryDatabases: Translations;
    categoryCloud: Translations;
    categoryMethodologies: Translations;
    categoryAI: Translations;
    categoryArchitecture: Translations;

    //Tiers:
    tierBasic: Translations;
    tierBeginner: Translations;
    tierIntermediate: Translations;
    tierAdvanced: Translations;
    tierExpert: Translations;
}
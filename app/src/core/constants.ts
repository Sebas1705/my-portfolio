import type { Language } from '@/domain';
import type { Project } from '@domain/models/Project';

export const PROJECT_TYPE_LABELS: Record<Language, Record<Project['type'], string>> = {
    es: {
        work: 'Proyecto Laboral',
        academic: 'Proyecto Académico',
        personal: 'Proyecto Personal'
    },
    en: {
        work: 'Work Project',
        academic: 'Academic Project',
        personal: 'Personal Project'
    },
    fr: {
        work: 'Projet Professionnel',
        academic: 'Projet Académique',
        personal: 'Projet Personnel'
    },
    de: {
        work: 'Arbeitsprojekt',
        academic: 'Akademisches Projekt',
        personal: 'Persönliches Projekt'
    },
    it: {
        work: 'Progetto Lavorativo',
        academic: 'Progetto Accademico',
        personal: 'Progetto Personale'
    },
    pt: {
        work: 'Projeto Profissional',
        academic: 'Projeto Acadêmico',
        personal: 'Projeto Pessoal'
    },
    nl: {
        work: 'Werkproject',
        academic: 'Academisch Project',
        personal: 'Persoonlijk Project'
    },
    pl: {
        work: 'Projekt Zawodowy',
        academic: 'Projekt Akademicki',
        personal: 'Projekt Osobisty'
    },
    ru: {
        work: 'Рабочий проект',
        academic: 'Академический проект',
        personal: 'Личный проект'
    },
    ja: {
        work: 'ビジネスプロジェクト',
        academic: 'アカデミックプロジェクト',
        personal: 'パーソナルプロジェクト'
    }
};

export const COMPANY_LINKS: Record<string, string> = {
    Solusoft: 'https://www.solusoft.es/',
    AGEDI: 'https://www.agedi.es/',
    Sisley: 'https://www.sisley.com/',
    Iberext: 'https://www.iberext.es/'
};
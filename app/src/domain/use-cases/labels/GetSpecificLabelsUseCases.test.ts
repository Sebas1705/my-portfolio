import { describe, it, expect, beforeEach } from 'vitest';
import {
    GetNavigationLabelsUseCase,
    GetCommonLabelsUseCase,
    GetWorkLabelsUseCase,
    GetEducationLabelsUseCase,
    GetAboutLabelsUseCase,
    GetFooterLabelsUseCase,
    GetSkillsLabelsUseCase,
    GetSoftSkillsLabelsUseCase,
    GetProjectLabelsUseCase,
    GetCourseLabelsUseCase,
    GetContactLabelsUseCase,
} from './GetSpecificLabelsUseCases';
import { InMemoryNavigationLabelsRepository } from '@/data/repositories/labels/InMemoryNavigationLabelsRepository';
import { InMemoryCommonLabelsRepository } from '@/data/repositories/labels/InMemoryCommonLabelsRepository';
import { InMemoryWorkLabelsRepository } from '@/data/repositories/labels/InMemoryWorkLabelsRepository';
import { InMemoryEducationLabelsRepository } from '@/data/repositories/labels/InMemoryEducationLabelsRepository';
import { InMemoryAboutLabelsRepository } from '@/data/repositories/labels/InMemoryAboutLabelsRepository';
import { InMemoryFooterLabelsRepository } from '@/data/repositories/labels/InMemoryFooterLabelsRepository';
import { InMemorySkillsLabelsRepository } from '@/data/repositories/labels/InMemorySkillsLabelsRepository';
import { InMemorySoftSkillsLabelsRepository } from '@/data/repositories/labels/InMemorySoftSkillsLabelsRepository';
import { InMemoryProjectLabelsRepository } from '@/data/repositories/labels/InMemoryProjectLabelsRepository';
import { InMemoryCourseLabelsRepository } from '@/data/repositories/labels/InMemoryCourseLabelsRepository';
import { InMemoryContactLabelsRepository } from '@/data/repositories/labels/InMemoryContactLabelsRepository';

describe('GetNavigationLabelsUseCase', () => {
    let repository: InMemoryNavigationLabelsRepository;
    let useCase: GetNavigationLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryNavigationLabelsRepository();
        useCase = new GetNavigationLabelsUseCase(repository);
    });

    it('should execute and return navigation labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.home).toBeDefined();
        expect(labels.about).toBeDefined();
        expect(labels.work).toBeDefined();
        expect(labels.education).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.contact).toBeDefined();
    });
});

describe('GetCommonLabelsUseCase', () => {
    let repository: InMemoryCommonLabelsRepository;
    let useCase: GetCommonLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryCommonLabelsRepository();
        useCase = new GetCommonLabelsUseCase(repository);
    });

    it('should execute and return common labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.back).toBeDefined();
        expect(labels.noData).toBeDefined();
        expect(labels.viewMore).toBeDefined();
    });
});

describe('GetWorkLabelsUseCase', () => {
    let repository: InMemoryWorkLabelsRepository;
    let useCase: GetWorkLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryWorkLabelsRepository();
        useCase = new GetWorkLabelsUseCase(repository);
    });

    it('should execute and return work labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.current).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.achievements).toBeDefined();
    });
});

describe('GetEducationLabelsUseCase', () => {
    let repository: InMemoryEducationLabelsRepository;
    let useCase: GetEducationLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryEducationLabelsRepository();
        useCase = new GetEducationLabelsUseCase(repository);
    });

    it('should execute and return education labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.projects).toBeDefined();
        expect(labels.achievements).toBeDefined();
    });
});

describe('GetAboutLabelsUseCase', () => {
    let repository: InMemoryAboutLabelsRepository;
    let useCase: GetAboutLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryAboutLabelsRepository();
        useCase = new GetAboutLabelsUseCase(repository);
    });

    it('should execute and return about labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.greeting).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
    });
});

describe('GetFooterLabelsUseCase', () => {
    let repository: InMemoryFooterLabelsRepository;
    let useCase: GetFooterLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryFooterLabelsRepository();
        useCase = new GetFooterLabelsUseCase(repository);
    });

    it('should execute and return footer labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.rightsReserved).toBeDefined();
    });
});

describe('GetSkillsLabelsUseCase', () => {
    let repository: InMemorySkillsLabelsRepository;
    let useCase: GetSkillsLabelsUseCase;

    beforeEach(() => {
        repository = new InMemorySkillsLabelsRepository();
        useCase = new GetSkillsLabelsUseCase(repository);
    });

    it('should execute and return skills labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.categoryLanguages).toBeDefined();
        expect(labels.tierExpert).toBeDefined();
    });
});

describe('GetSoftSkillsLabelsUseCase', () => {
    let repository: InMemorySoftSkillsLabelsRepository;
    let useCase: GetSoftSkillsLabelsUseCase;

    beforeEach(() => {
        repository = new InMemorySoftSkillsLabelsRepository();
        useCase = new GetSoftSkillsLabelsUseCase(repository);
    });

    it('should execute and return soft skills labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
    });
});

describe('GetProjectLabelsUseCase', () => {
    let repository: InMemoryProjectLabelsRepository;
    let useCase: GetProjectLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryProjectLabelsRepository();
        useCase = new GetProjectLabelsUseCase(repository);
    });

    it('should execute and return project labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.viewDemo).toBeDefined();
        expect(labels.viewCode).toBeDefined();
        expect(labels.technologies).toBeDefined();
    });
});

describe('GetCourseLabelsUseCase', () => {
    let repository: InMemoryCourseLabelsRepository;
    let useCase: GetCourseLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryCourseLabelsRepository();
        useCase = new GetCourseLabelsUseCase(repository);
    });

    it('should execute and return course labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.pageTitle).toBeDefined();
        expect(labels.viewCourse).toBeDefined();
        expect(labels.certificate).toBeDefined();
        expect(labels.skillsLabel).toBeDefined();
    });
});

describe('GetContactLabelsUseCase', () => {
    let repository: InMemoryContactLabelsRepository;
    let useCase: GetContactLabelsUseCase;

    beforeEach(() => {
        repository = new InMemoryContactLabelsRepository();
        useCase = new GetContactLabelsUseCase(repository);
    });

    it('should execute and return contact labels', async () => {
        const labels = await useCase.execute();
        
        expect(labels).toBeDefined();
        expect(labels.title).toBeDefined();
        expect(labels.subtitle).toBeDefined();
        expect(labels.email).toBeDefined();
        expect(labels.phone).toBeDefined();
        expect(labels.location).toBeDefined();
        expect(labels.social).toBeDefined();
        expect(labels.message).toBeDefined();
    });
});

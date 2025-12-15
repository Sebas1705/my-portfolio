import { describe, it, expect } from 'vitest';
import { COMPANY_LINKS } from './constants';

describe('constants', () => {
    describe('COMPANY_LINKS', () => {
        it('should have correct links for all companies', () => {
            expect(COMPANY_LINKS.Solusoft).toBe('https://www.solusoft.es/');
            expect(COMPANY_LINKS.AGEDI).toBe('https://www.agedi.es/');
            expect(COMPANY_LINKS.Sisley).toBe('https://www.sisley.com/');
            expect(COMPANY_LINKS.Iberext).toBe('https://www.iberext.es/');
        });

        it('should have exactly 4 companies', () => {
            const companies = Object.keys(COMPANY_LINKS);
            expect(companies).toHaveLength(4);
        });

        it('should have valid URLs for all companies', () => {
            Object.values(COMPANY_LINKS).forEach(url => {
                expect(url).toMatch(/^https?:\/\//);
                expect(url).not.toBe('');
            });
        });

        it('should contain expected company names', () => {
            expect(COMPANY_LINKS).toHaveProperty('Solusoft');
            expect(COMPANY_LINKS).toHaveProperty('AGEDI');
            expect(COMPANY_LINKS).toHaveProperty('Sisley');
            expect(COMPANY_LINKS).toHaveProperty('Iberext');
        });
    });
});

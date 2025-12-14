import { describe, it, expect } from 'vitest';
import { formatDateRange, formatMonthYear } from './date';

describe('date utilities', () => {
    describe('formatDateRange', () => {
        it('should format date range in Spanish without end date', () => {
            const startDate = new Date(2023, 0, 15); // January 15, 2023
            const result = formatDateRange(startDate, undefined, 'es', 'Actualidad');

            expect(result).toContain('Enero');
            expect(result).toContain('2023');
            expect(result).toContain('Actualidad');
            expect(result).toMatch(/Enero 2023 - Actualidad/);
        });

        it('should format date range in Spanish with end date', () => {
            const startDate = new Date(2023, 0, 15);
            const endDate = new Date(2024, 5, 20); // June 20, 2024
            const result = formatDateRange(startDate, endDate, 'es', 'Actualidad');

            expect(result).toContain('Enero');
            expect(result).toContain('2023');
            expect(result).toContain('Junio');
            expect(result).toContain('2024');
            expect(result).toMatch(/Enero 2023 - Junio 2024/);
        });

        it('should format date range in English', () => {
            const startDate = new Date(2022, 2, 10); // March 10, 2022
            const endDate = new Date(2023, 11, 15); // December 15, 2023
            const result = formatDateRange(startDate, endDate, 'en', 'Present');

            expect(result).toContain('March');
            expect(result).toContain('2022');
            expect(result).toContain('December');
            expect(result).toContain('2023');
            expect(result).toMatch(/March 2022 - December 2023/);
        });

        it('should format date range in French', () => {
            const startDate = new Date(2021, 4, 5); // May 5, 2021
            const result = formatDateRange(startDate, undefined, 'fr', 'Présent');

            expect(result).toContain('Mai');
            expect(result).toContain('2021');
            expect(result).toContain('Présent');
        });

        it('should format date range in German', () => {
            const startDate = new Date(2020, 10, 1); // November 1, 2020
            const endDate = new Date(2021, 2, 28); // March 28, 2021
            const result = formatDateRange(startDate, endDate, 'de', 'Gegenwart');

            expect(result).toContain('November');
            expect(result).toContain('2020');
            expect(result).toContain('März');
            expect(result).toContain('2021');
        });

        it('should format date range in Italian', () => {
            const startDate = new Date(2019, 6, 12); // July 12, 2019
            const result = formatDateRange(startDate, undefined, 'it', 'Presente');

            expect(result).toContain('Luglio');
            expect(result).toContain('2019');
            expect(result).toContain('Presente');
        });

        it('should format date range in Portuguese', () => {
            const startDate = new Date(2018, 1, 28); // February 28, 2018
            const endDate = new Date(2019, 5, 15); // June 15, 2019
            const result = formatDateRange(startDate, endDate, 'pt', 'Presente');

            expect(result).toContain('Fevereiro');
            expect(result).toContain('2018');
            expect(result).toContain('Junho');
            expect(result).toContain('2019');
        });

        it('should format date range in Dutch', () => {
            const startDate = new Date(2017, 8, 3); // September 3, 2017
            const result = formatDateRange(startDate, undefined, 'nl', 'Heden');

            expect(result).toContain('September');
            expect(result).toContain('2017');
            expect(result).toContain('Heden');
        });

        it('should format date range in Polish', () => {
            const startDate = new Date(2016, 11, 25); // December 25, 2016
            const endDate = new Date(2017, 0, 20); // January 20, 2017
            const result = formatDateRange(startDate, endDate, 'pl', 'Teraz');

            expect(result).toContain('Grudzień');
            expect(result).toContain('2016');
            expect(result).toContain('Styczeń');
            expect(result).toContain('2017');
        });

        it('should format date range in Russian', () => {
            const startDate = new Date(2015, 3, 7); // April 7, 2015
            const result = formatDateRange(startDate, undefined, 'ru', 'Настоящее');

            expect(result).toContain('Апрель');
            expect(result).toContain('2015');
            expect(result).toContain('Настоящее');
        });

        it('should format date range in Japanese', () => {
            const startDate = new Date(2014, 6, 19); // July 19, 2014
            const endDate = new Date(2015, 8, 30); // September 30, 2015
            const result = formatDateRange(startDate, endDate, 'ja', '現在');

            expect(result).toContain('7月');
            expect(result).toContain('2014');
            expect(result).toContain('9月');
            expect(result).toContain('2015');
        });
    });

    describe('formatMonthYear', () => {
        it('should format month year in Spanish', () => {
            const date = new Date(2023, 0, 15); // January 15, 2023
            const result = formatMonthYear(date, 'es');

            expect(result).toBe('Enero 2023');
        });

        it('should format month year in English', () => {
            const date = new Date(2023, 11, 25); // December 25, 2023
            const result = formatMonthYear(date, 'en');

            expect(result).toBe('December 2023');
        });

        it('should format month year in French', () => {
            const date = new Date(2022, 5, 10); // June 10, 2022
            const result = formatMonthYear(date, 'fr');

            expect(result).toBe('Juin 2022');
        });

        it('should format month year in German', () => {
            const date = new Date(2021, 2, 20); // March 20, 2021
            const result = formatMonthYear(date, 'de');

            expect(result).toBe('März 2021');
        });

        it('should format month year in Italian', () => {
            const date = new Date(2020, 7, 5); // August 5, 2020
            const result = formatMonthYear(date, 'it');

            expect(result).toBe('Agosto 2020');
        });

        it('should format month year in Portuguese', () => {
            const date = new Date(2019, 9, 1); // October 1, 2019
            const result = formatMonthYear(date, 'pt');

            expect(result).toBe('Outubro 2019');
        });

        it('should format month year in Dutch', () => {
            const date = new Date(2018, 4, 15); // May 15, 2018
            const result = formatMonthYear(date, 'nl');

            expect(result).toBe('Mei 2018');
        });

        it('should format month year in Polish', () => {
            const date = new Date(2017, 10, 30); // November 30, 2017
            const result = formatMonthYear(date, 'pl');

            expect(result).toBe('Listopad 2017');
        });

        it('should format month year in Russian', () => {
            const date = new Date(2016, 0, 12); // January 12, 2016
            const result = formatMonthYear(date, 'ru');

            expect(result).toBe('Январь 2016');
        });

        it('should format month year in Japanese', () => {
            const date = new Date(2015, 5, 28); // June 28, 2015
            const result = formatMonthYear(date, 'ja');

            expect(result).toBe('6月 2015');
        });

        it('should handle all months correctly in English', () => {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                                         'July', 'August', 'September', 'October', 'November', 'December'];
            
            months.forEach((month, index) => {
                const date = new Date(2023, index, 1);
                const result = formatMonthYear(date, 'en');
                expect(result).toContain(month);
                expect(result).toContain('2023');
            });
        });

        it('should handle different years correctly', () => {
            const yearsToTest = [2000, 2010, 2020, 2023, 2025, 2030];
            
            yearsToTest.forEach(year => {
                const date = new Date(year, 5, 15);
                const result = formatMonthYear(date, 'en');
                expect(result).toContain(year.toString());
            });
        });
    });
});

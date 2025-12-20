import { test, expect } from 'vitest';

import { formatDateRange, formatMonthYear } from '@/core/date';

test('formatMonthYear produces localized month and year', () => {
    const d = new Date('2025-03-15');
    expect(formatMonthYear(d, 'en')).toBe('March 2025');
    expect(formatMonthYear(d, 'es')).toBe('Marzo 2025');
    expect(formatMonthYear(d, 'ja')).toBe('3月 2025');
});

test('formatDateRange with undefined end uses current label', () => {
    const start = new Date('2024-01-01');
    const r = formatDateRange(start, undefined, 'en', 'Present');
    expect(r).toBe('January 2024 - Present');
});

test('formatDateRange with end date formats correctly even when same year', () => {
    const start = new Date('2025-01-01');
    const end = new Date('2025-12-01');
    const r = formatDateRange(start, end, 'es', 'Actual');
    expect(r).toBe('Enero 2025 - Diciembre 2025');
});

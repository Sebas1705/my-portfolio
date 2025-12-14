import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should toggle between light and dark theme', async ({ page }) => {
        const themeToggle = page.locator('button.theme-toggle');
        
        // Obtener tema inicial
        const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        
        // Hacer clic en el toggle
        await themeToggle.click();
        
        // Esperar cambio de tema
        await page.waitForTimeout(300);
        
        // Verificar que el tema cambió
        const newTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(newTheme).not.toBe(initialTheme);
    });

    test('should persist theme in localStorage', async ({ page }) => {
        const themeToggle = page.locator('button.theme-toggle');
        
        // Cambiar tema
        await themeToggle.click();
        await page.waitForTimeout(300);
        
        // Obtener tema actual
        const currentTheme = await page.evaluate(() => localStorage.getItem('theme'));
        
        // Recargar página
        await page.reload();
        
        // Verificar que el tema persiste
        const persistedTheme = await page.evaluate(() => localStorage.getItem('theme'));
        expect(persistedTheme).toBe(currentTheme);
    });
});

test.describe('Language Selector', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should change language', async ({ page }) => {
        const langToggle = page.locator('#language-toggle');
        
        // Hacer clic para abrir dropdown
        await langToggle.click();
        await page.waitForTimeout(100);
        
        // Seleccionar inglés
        await page.locator('button[data-lang="en"]').click();
        await page.waitForTimeout(100);
        
        // Verificar cambio en localStorage
        const savedLang = await page.evaluate(() => localStorage.getItem('language'));
        expect(savedLang).toBe('en');
    });

    test('should persist language in localStorage', async ({ page }) => {
        const langToggle = page.locator('#language-toggle');
        
        // Cambiar idioma
        await langToggle.click();
        await page.waitForTimeout(100);
        await page.locator('button[data-lang="en"]').click();
        await page.waitForTimeout(100);
        
        // Recargar página
        await page.reload();
        
        // Verificar que el idioma persiste
        const persistedLang = await page.evaluate(() => localStorage.getItem('language'));
        expect(persistedLang).toBe('en');
    });
});

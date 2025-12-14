import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the page', async ({ page }) => {
        await expect(page).toHaveTitle(/Sebastián - Full Stack Developer/);
    });

    test('should display header with navigation', async ({ page }) => {
        const header = page.locator('header.header');
        await expect(header).toBeVisible();
        
        // Verificar enlaces de navegación
        await expect(page.locator('a[href="#home"]').first()).toBeVisible();
        await expect(page.locator('a[href="#about"]').first()).toBeVisible();
        await expect(page.locator('a[href="#work"]').first()).toBeVisible();
        await expect(page.locator('a[href="#education"]').first()).toBeVisible();
        await expect(page.locator('a[href="#projects"]').first()).toBeVisible();
        await expect(page.locator('a[href="#contact"]').first()).toBeVisible();
    });

    test('should have theme toggle button', async ({ page }) => {
        const themeToggle = page.locator('button.theme-toggle');
        await expect(themeToggle).toBeVisible();
    });

    test('should have language selector', async ({ page }) => {
        const langSelector = page.locator('#language-toggle');
        await expect(langSelector).toBeVisible();
    });

    test('should display hero section', async ({ page }) => {
        const hero = page.locator('section.hero');
        await expect(hero).toBeVisible();
        
        // Verificar elementos del hero
        const heading = hero.locator('h1');
        await expect(heading).toBeVisible();
        await expect(heading).toContainText(/Sebastián/i);
    });

    test('should display about section', async ({ page }) => {
        const about = page.locator('#about');
        await expect(about).toBeVisible();
    });

    test('should display work experience section', async ({ page }) => {
        const workSection = page.locator('#work');
        await expect(workSection).toBeVisible();
    });

    test('should display education section', async ({ page }) => {
        const educationSection = page.locator('#education');
        await expect(educationSection).toBeVisible();
    });

    test('should display projects section', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();
    });

    test('should display contact section', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeVisible();
    });

    test('should display footer', async ({ page }) => {
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });
});

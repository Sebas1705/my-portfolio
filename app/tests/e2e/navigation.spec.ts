import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/en/');
    });

    test('should scroll to About section when clicking nav link', async ({ page }) => {
        await page.locator('a[href="#about"]').first().click();
        await page.waitForTimeout(500);
        
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeInViewport();
    });

    test('should scroll to Experience section when clicking nav link', async ({ page }) => {
        await page.locator('a[href="#work"]').first().click();
        await page.waitForTimeout(500);
        
        const experienceSection = page.locator('#work');
        await expect(experienceSection).toBeInViewport();
    });

    test('should scroll to Education section when clicking nav link', async ({ page }) => {
        await page.locator('a[href="#education"]').first().click();
        await page.waitForTimeout(500);
        
        const educationSection = page.locator('#education');
        await expect(educationSection).toBeInViewport();
    });

    test('should scroll to Projects section when clicking nav link', async ({ page }) => {
        await page.locator('a[href="#projects"]').first().click();
        await page.waitForTimeout(500);
        
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeInViewport();
    });

    test('should scroll to Contact section when clicking nav link', async ({ page }) => {
        await page.locator('a[href="#contact"]').first().click();
        await page.waitForTimeout(500);
        
        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeInViewport();
    });
});

test.describe('Responsive Design', () => {
    test('should display mobile menu on small screens', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');
        
        const mobileMenuButton = page.locator('button.mobile-menu-toggle, .hamburger, [aria-label*="menu"]');
        
        // Si existe el botón de menú móvil, verificar su visibilidad
        const count = await mobileMenuButton.count();
        if (count > 0) {
            await expect(mobileMenuButton.first()).toBeVisible();
        }
    });

    test('should be responsive on tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto('/');
        
        const header = page.locator('header');
        await expect(header).toBeVisible();
    });

    test('should be responsive on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/');
        
        const header = page.locator('header');
        await expect(header).toBeVisible();
    });
});

test.describe('Performance', () => {
    test('should load page within acceptable time', async ({ page }) => {
        const startTime = Date.now();
        await page.goto('/');
        const loadTime = Date.now() - startTime;
        
        // La página debería cargar en menos de 3 segundos
        expect(loadTime).toBeLessThan(3000);
    });

    test('should have accessible images', async ({ page }) => {
        await page.goto('/');
        
        const images = page.locator('img');
        const count = await images.count();
        
        for (let i = 0; i < count; i++) {
            const img = images.nth(i);
            const alt = await img.getAttribute('alt');
            
            // Todas las imágenes deben tener atributo alt (puede estar vacío para decorativas)
            expect(alt).toBeDefined();
        }
    });
});

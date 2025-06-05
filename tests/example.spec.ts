import { test, expect } from '@playwright/test';

test('página principal se carga correctamente', async ({ page }) => {
  await page.goto('http://localhost:4200');
  
  // Esperar a que Angular esté completamente cargado
  await page.waitForFunction(() => {
    return window.hasOwnProperty('ng');
  });

  await expect(page).toHaveTitle(/Hola Mundo/);
});

test('prueba de entorno de desarrollo', async ({ page }) => {
  await page.goto('http://localhost:4200');
  
  // Esperar a que Angular esté listo
  await page.waitForLoadState('networkidle');
  
  await expect(page).toHaveTitle(/Hola Mundo - Desarrollo/);
});

test('prueba de entorno de calidad', async ({ page }) => {
  await page.goto('http://localhost:4200');
  
  // Esperar a que Angular esté listo
  await page.waitForLoadState('networkidle');
  
  await expect(page).toHaveTitle(/Hola Mundo - Calidad/);
});
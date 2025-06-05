import { test, expect } from '@playwright/test';

test('página principal se carga correctamente', async ({ page }) => {
  // Esperar a que Angular esté listo
  await page.waitForTimeout(5000);
  
  await page.goto('http://localhost:4200');
  
  // Esperar a que la página cargue
  await page.waitForLoadState('networkidle');
  
  const title = await page.title();
  expect(title).toContain('Hola Mundo');
});

test('prueba de entorno de desarrollo', async ({ page }) => {
  // Cambiar a entorno de desarrollo
  await page.goto('http://localhost:4200/?env=dev');
  
  // Esperar a que la página cargue
  await page.waitForLoadState('networkidle');
  
  const title = await page.title();
  expect(title).toContain('Hola Mundo - Desarrollo');
});

test('prueba de entorno de calidad', async ({ page }) => {
  // Cambiar a entorno de calidad
  await page.goto('http://localhost:4200/?env=qa');
  
  // Esperar a que la página cargue
  await page.waitForLoadState('networkidle');
  
  const title = await page.title();
  expect(title).toContain('Hola Mundo - Calidad');
});
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
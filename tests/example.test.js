const { test, expect } = require('@playwright/test');

test('Página de inicio carga correctamente', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
// Cambio menor para forzar actualización

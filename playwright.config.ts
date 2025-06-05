import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000, // Aumentado a 60 segundos
  reporter: 'html',
  use: {
    headless: true, // Cambiado a true para mejor rendimiento
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 100, // Añadir delay para estabilidad
    },
  },
  retries: 2, // Añadir reintentos
};

export default config;
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  reporter: 'html',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
};

export default config;
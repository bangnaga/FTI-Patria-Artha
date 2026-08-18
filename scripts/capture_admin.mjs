import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

async function captureAdmin() {
  console.log('Launching Edge browser via Playwright...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const capturesDir = path.join(process.cwd(), 'public', 'captures');
  if (!fs.existsSync(capturesDir)) {
    fs.mkdirSync(capturesDir, { recursive: true });
  }

  console.log('Navigating to http://localhost:3000/admin ...');
  try {
    await page.goto('http://localhost:3000/admin', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(2000);
    
    // Screenshot 1: Admin Login Modal / Dashboard Overview
    console.log('Capturing Admin Login / Dashboard...');
    await page.screenshot({ path: path.join(capturesDir, 'admin_login_dashboard_view.png') });

    // Try filling admin login credentials if login modal is active
    const usernameInput = page.locator('input[type="text"]').first();
    const passwordInput = page.locator('input[type="password"]').first();
    const submitBtn = page.locator('button[type="submit"]').first();

    if (await usernameInput.isVisible()) {
      console.log('Filling admin credentials...');
      await usernameInput.fill('admin');
      await passwordInput.fill('admin123');
      await page.screenshot({ path: path.join(capturesDir, 'admin_login_form_filled.png') });
      await submitBtn.click();
      await page.waitForTimeout(2500);

      console.log('Capturing Authenticated Admin Dashboard Tabs...');
      await page.screenshot({ path: path.join(capturesDir, 'admin_dashboard_authenticated.png') });
    }

  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    await browser.close();
    console.log('Admin captures complete!');
  }
}

captureAdmin();

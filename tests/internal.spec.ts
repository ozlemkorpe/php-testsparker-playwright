import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('http://php.testsparker.com/auth/login.php');
  await page.locator('input[name="username"]').fill('admin');
  await page.locator('input[name="password"]').fill('admin123456');
  await page.locator('input[value="SUBMIT"]').click();
  });

test('Check page URL', async ({page}) => {
    //Check Page URL after login
    await expect(page).toHaveURL('http://php.testsparker.com/auth/internal.php');
});
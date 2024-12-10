import { test, expect } from '@playwright/test';

test('Check Hello page elements', async ({ page }) => {
  await page.goto('http://php.testsparker.com/hello.php?name=Visitor');

  // Check page title on browser tab
  await expect(page).toHaveTitle(/Invicti Test Web Site - PHP/);

  // Check page heading
  await expect(page.getByRole('heading', { name: 'Hello Service' })).toBeVisible();
});

import { test, expect } from '@playwright/test';

test('Check Products page elements', async ({ page }) => {
  await page.goto('http://php.testsparker.com/products.php?pro=url');

  // Check page title on browser tab
  await expect(page).toHaveTitle(/Invicti Test Web Site - PHP/);

  // Check page heading
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
});

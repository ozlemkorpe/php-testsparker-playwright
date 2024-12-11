import { test, expect } from '@playwright/test';

test('Check Home page elements', async ({ page }) => {
  await page.goto('http://php.testsparker.com/');

  // Check page title on browser tab
  await expect(page).toHaveTitle(/Invicti Test Web Site - PHP/);
  
  // Check page heading
  await expect(page.getByRole('heading', { name: 'Invicti Testing Site' })).toBeVisible();
  
  //Check reset bar
  await expect(page.locator('#resetbar')).toHaveText('This website is automatically reset at every midnight (00:00 - UTC).');
});

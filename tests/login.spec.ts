import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('http://php.testsparker.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
});

test('Check Login page elements', async ({ page }) => {
  
  // Check heading
  await expect(page.getByRole('heading', { name: 'Login Area' })).toBeVisible();

  // Check information text paragraph.
  await expect(page.locator('text=Enter your credentials (admin / admin123456)')).toBeVisible();

  // Check Username text
  await expect(page.locator('text=Username:')).toBeVisible();

  // Check Username input field
  await expect(page.locator('input[name="username"]')).toBeVisible();
  
  // Check password text
  await expect(page.locator('text=Password:')).toBeVisible();

  // Check Password input field
  await expect(page.locator('input[name="password"]')).toBeVisible();

  // Check Submit button 
  await expect(page.locator('input[value="SUBMIT"]')).toBeVisible();
});


test('Fill the form and login', async ({ page }) => {
  // Fill username field
  await page.locator('input[name="username"]').fill('admin');

  // Fill password field
  await page.locator('input[name="password"]').fill('admin123456');

  // Click on Submit button 
  await page.locator('input[value="SUBMIT"]').click();

  //Check Page URL
  await expect(page).toHaveURL('http://php.testsparker.com/auth/internal.php');
});

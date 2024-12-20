import { test, expect } from '@playwright/test';

test.describe('Product page UI controls', () => {
  test.beforeEach(async({page}) => {
    await page.goto('http://php.testsparker.com/');
    await page.getByRole('link', { name: 'Products', exact: true }).click();
  });

  test('Check Products page elements', async ({ page }) => {
    // Check page title on browser tab
    await expect(page).toHaveTitle(/Invicti Test Web Site - PHP/);
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    //Check reset bar text
    await expect(page.locator('#resetbar')).toHaveText('This website is automatically reset at every midnight (00:00 - UTC).');
  });

  test('Check product portfolio link', async ({ page }) => {
    //Click on product portfolio link
    await page.locator('a[href="?pp=+DAST"]').click();
    //Check Page URL
    await expect(page).toHaveURL('http://php.testsparker.com/products.php?pp=+DAST');
  });
});


test.describe('Product portfolio test set', () => {
  test.beforeEach(async({page}) => {
    await page.goto('http://php.testsparker.com/products.php?pp=+DAST');
  });
  
  test('Check Invicti button in product portfolio', async ({ page }) => {
    //Click on button
    await page.locator('input[name="aaaa/"]').click();
    //Check Page URL
    await expect(page).toHaveURL('http://php.testsparker.com/hello.php?aaaa%2F=Invicti%21');
    //Check Hello Visitor message
    await expect(page.locator('a:has-text("Hello Service")')).toBeVisible();
    //Check Hello Visitor message
    await expect(page.locator('p:has-text("Hello Visitor")')).toBeVisible();
  });

});
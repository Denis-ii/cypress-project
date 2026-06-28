const { test, expect } = require('@playwright/test');

test('should open Cypress example page', async ({page}) => {
    await page.goto('https://example.cypress.io');

    await expect(page.getByText('Kitchen Sink')).toBeVisible()
});

test('should open Querying page', async ({ page }) => {
  await page.goto('https://example.cypress.io');

  await page.locator('a[href="/commands/querying"]:visible').first().click();

  await expect(page).toHaveURL(/.*commands\/querying/);
});

test('should fill email input', async ({ page }) => {
  await page.goto('https://example.cypress.io/commands/actions');

  await page.locator('.action-email').fill('test@example.com');

  await expect(page.locator('.action-email')).toHaveValue('test@example.com');
});

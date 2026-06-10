const { test, expect } = require('@playwright/test');

test('should open Cypress example page', async ({page}) => {
    await page.goto('https://example.cypress.io');
    await expect(page.getByText('Kitchen Sink')).toBeVisible()
});
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

test('should wait until delayed message becomes visible', async ({ page }) => {
  await page.setContent(`
    <button id="show-message">Show message</button>
    <div id="message" hidden>Loaded message</div>
  `);

  await page.evaluate(() => {
    const button = document.querySelector('#show-message');
    const message = document.querySelector('#message');

    button.addEventListener('click', () => {
      setTimeout(() => {
        message.hidden = false;
      }, 2000);
    });
  });

  await page.locator('#show-message').click();

  await expect(page.locator('#message')).toBeVisible();
});

test('should wait until button becomes enabled', async ({ page }) => {
  await page.setContent(`
    <button id="submit-button" disabled>Submit</button>
    <p id="status">Waiting</p>

    <script>
      const button = document.querySelector('#submit-button');
      const status = document.querySelector('#status');

      setTimeout(() => {
        button.disabled = false;
        status.textContent = 'Ready to submit';
      }, 2000);
    </script>
  `);

  const submitButton = page.locator('#submit-button');

  await expect(submitButton).toBeDisabled();

  await expect(submitButton).toBeEnabled();

  await expect(page.locator('#status')).toHaveText('Ready to submit');
});

test('should reuse locator', async ({ page }) => {
  await page.setContent(`
    <input id="username" />
  `);

  const username = page.locator('#username');

  await username.fill('Amogus');

  await expect(username).toHaveValue('Amogus');
});
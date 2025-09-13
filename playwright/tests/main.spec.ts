import {test, expect, Locator} from '@playwright/test';
import {CustomerPanel} from "./customer-panel";

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/App Layout with Top Nav/);

  const customerPanel = new CustomerPanel(page);
  await expect(customerPanel.getTitle()).toHaveText('Panel A: Customer List');

  const customerDetailsPanel = page.getByTestId('customer-details-panel');
  await expect(customerDetailsPanel.locator('p')).toHaveText('Panel B: Customer Details');

  const orderListPanel = page.getByTestId('order-list-panel');
  await expect(orderListPanel.locator('p')).toHaveText('TODO: Panel C: Orders List');

  const orderDetailsPanel = page.getByTestId('order-details-panel');
  await expect(orderDetailsPanel.locator('p')).toHaveText('Panel D: Order Details');

  const itemListPanel = page.getByTestId('item-list-panel');
  await expect(itemListPanel.locator('p')).toHaveText('Panel E: Items List / Details');

  const itemDetailsPanel = page.getByTestId('item-details-panel');
  await expect(itemDetailsPanel.locator('p')).toHaveText('Panel F: Item Details');

});
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

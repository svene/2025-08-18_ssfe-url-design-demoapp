import {test, expect, Locator} from '@playwright/test';
import {CustomerPanel} from "./customer-panel";
import {CustomerDetailsPanel} from "./customer-details-panel";
import {OrderListPanel} from "./order-list-panel";
import {OrderDetailsPanel} from "./order-details-panel";
import {ItemListPanel} from "./item-list-panel";
import {ItemDetailsPanel} from "./item-details-panel";

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/App Layout with Top Nav/);

  const customerPanel = new CustomerPanel(page);
  await expect(customerPanel.getTitle()).toHaveText('Panel A: Customer List');

  const customerDetailsPanel = new CustomerDetailsPanel(page);
  await expect(customerDetailsPanel.getTitle()).toHaveText('Panel B: Customer Details');

  const orderListPanel = new OrderListPanel(page);
  await expect(orderListPanel.getTitle()).toHaveText('TODO: Panel C: Orders List');

  const orderDetailsPanel = new OrderDetailsPanel(page);
  await expect(orderDetailsPanel.getTitle()).toHaveText('Panel D: Order Details');

  const itemListPanel = new ItemListPanel(page);
  await expect(itemListPanel.getTitle()).toHaveText('Panel E: Items List / Details');

  const itemDetailsPanel = new ItemDetailsPanel(page);
  await expect(itemDetailsPanel.getTitle()).toHaveText('Panel F: Item Details');

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

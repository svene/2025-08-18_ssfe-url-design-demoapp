import {Locator, Page} from "@playwright/test";

export class OrderListPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('order-list-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

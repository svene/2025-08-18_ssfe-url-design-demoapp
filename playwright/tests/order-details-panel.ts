import {Locator, Page} from "@playwright/test";

export class OrderDetailsPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('order-details-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

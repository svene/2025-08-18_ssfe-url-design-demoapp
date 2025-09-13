import {Locator, Page} from "@playwright/test";

export class CustomerPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('customer-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

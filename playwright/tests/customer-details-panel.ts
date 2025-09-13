import {Locator, Page} from "@playwright/test";

export class CustomerDetailsPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('customer-details-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

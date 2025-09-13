import {Locator, Page} from "@playwright/test";

export class ItemDetailsPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('item-details-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

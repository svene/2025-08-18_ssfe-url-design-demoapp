import {Locator, Page} from "@playwright/test";

export class ItemListPanel {

	constructor(private page: Page) {
	}

	getPanel(): Locator {
		return this.page.getByTestId('item-list-panel');
	}
	getTitle(): Locator {
		return this.getPanel().locator('p')
	}
}

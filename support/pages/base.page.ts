
import { Page, expect } from '@playwright/test';

export class BasePage {
    constructor(private page: Page) { }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
        await expect(this.page).toHaveURL(url);
    }
}
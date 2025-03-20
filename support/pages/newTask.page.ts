import { Page, expect } from '@playwright/test';

export class NewTaskPage {
    constructor(private page: Page) { }

    async navigateToNewTicketForm() {
        await this.page.getByRole('link').nth(1).click();
    }

    async fillTicketTitle(title: string) {
        await this.page.getByTestId('title-input').fill(title);
    }

    async fillTicketDescription(description: string) {
        await this.page.getByTestId('description-textarea').fill(description);
    }
    async selectPriority(priorityLevel: string) {
        await this.page.getByTestId(`priority-${priorityLevel}-radio`).check();
    }

    async setProgress(progress: string) {
        await this.page.getByTestId('progress-range').fill(progress);
    }

    async selectStatus(status: string) {
        await this.page.getByTestId('status-select').selectOption(status);
    }

    async submitTicket() {
        await this.page.getByTestId('submit-button').click();
    }

    async createTicket(ticketDetails: {
        title?: string,
        description: string,
        priority: string,
        progress: string,
        status: string
    }) {
        await this.navigateToNewTicketForm();
        if (ticketDetails.title) {
            await this.fillTicketTitle(ticketDetails.title);
        }
        await this.fillTicketDescription(ticketDetails.description);
        await this.selectPriority(ticketDetails.priority);
        await this.setProgress(ticketDetails.progress);
        await this.selectStatus(ticketDetails.status);
        await this.submitTicket();
    }

    async findLastTicketCardByTitle(title: string) {
        return this.page.getByTestId('ticket-list').nth(1)
            .locator('div[class*="flex flex-col"]')
            .filter({ hasText: title })
            .getByText(title)
            .last();
    }
}
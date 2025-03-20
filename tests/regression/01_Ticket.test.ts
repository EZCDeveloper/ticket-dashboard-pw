import { test } from '../../fixtures/myFixtures/allFixtures';
import { expect } from 'playwright/test';
import { TEST_DATA } from '../../fixtures/data/test-data';

test.describe('TS01_Crud Ticket', () => {

    test('TC-001: Create a Ticket Succesfully',
        async ({ basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Navigate to New Task and create a newone
            await newTaskPage.createTicket(TEST_DATA.ticket);

            // 3. Verify the ticket created. (LECTION)
            const lastCard = await newTaskPage.findLastTicketCardByTitle(TEST_DATA.ticket.title);
            await expect(lastCard).toHaveText(TEST_DATA.ticket.title);
        })

    test('TC-002: Create a Ticket without Title',
        async ({ basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Prepare ticket details without title
            const ticketWithoutTitle = {
                ...TEST_DATA.ticket,
                title: undefined
            }

            // 3. Create ticket and verify behavior
            await newTaskPage.createTicket(ticketWithoutTitle);

            // 4. Add an assertion to validate the expected behavior 
            // (e.g., check if a validation message appears or ticket is not created)
            // Note: The exact assertion depends on the application's validation logic
            const lastCard = await newTaskPage.findLastTicketCardByTitle(TEST_DATA.ticket.title);
            await expect(lastCard).not.toBeVisible();
        })
})

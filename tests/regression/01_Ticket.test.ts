import { test } from '../../fixtures/myFixtures/allFixtures';
import { expect } from 'playwright/test';
import { TEST_DATA } from '../../fixtures/data/test-data';

test.describe('TS01_Crud Ticket', () => {

    test('TC-001: Create a ticket succesfully',
        async ({ basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Navigate to New Task and create a newone
            await newTaskPage.createTicket(TEST_DATA.ticket[0]);

            // 3. Verify the ticket created. (LECTION)
            const lastCard = await newTaskPage.findLastTicketCardByTitle(TEST_DATA.ticket[0].title);
            await expect(lastCard).toHaveText(TEST_DATA.ticket[0].title);
        })

    test('TC-002: Fail to create a ticket: name is missing',
        async ({ basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Prepare ticket details without title
            const ticketWithoutTitle = {
                ...TEST_DATA.ticket[0],
                title: undefined
            }

            // 3. Create ticket and verify behavior
            await newTaskPage.createTicket(ticketWithoutTitle);

            // 4. Add an assertion to validate the expected behavior 
            // (e.g., check if a validation message appears or ticket is not created)
            // Note: The exact assertion depends on the application's validation logic
            const lastCard = await newTaskPage.findLastTicketCardByTitle(TEST_DATA.ticket[0].title);
            await expect(lastCard).not.toBeVisible();
        })

    test('TC-003: Update a ticket',
        async ({ basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Navigate to New Task and create a newone
            // TIP: try to create the task by API (this step)
            await newTaskPage.createTicket(TEST_DATA.ticket[1]);


        })
})

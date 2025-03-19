import { test } from '../../fixtures/myFixtures/allFixtures';
import { TEST_DATA } from '../../fixtures/data/test-data';

test.describe('TS01_Crud Ticket', () => {

    test('TC-001: Create a Ticket Succesfully',
        async ({ page, basePage, newTaskPage }) => {
            // 1. Navigate to homepage
            await basePage.navigateTo("/")

            // 2. Navigate to New Task and create a newone
            await newTaskPage.createTicket(TEST_DATA.ticket);
        })

})

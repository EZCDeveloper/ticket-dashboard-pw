import { test } from '../../fixtures/myFixtures/allFixtures';
import { expect } from '@playwright/test';

test.describe('TS01_Crud Ticket', () => {

    test('TC-001: Create a Ticket Succesfully', async ({ page, basePage }) => {
        await basePage.navigateTo("/")

        /**
         * **Steps:**
        1. Log in and navigate to the **Products** page.
        2. Click on the **"Add New Product"** button.
        3. Upload a valid product image.
        4. Fill out the form with valid data.
        5. Select the **"Pizza"** category.
        6. Set the status to **"Available"**.
        7. Click the **"Save"** button.
        8. Verify that the **"Product successfully created"** notification is displayed.
         */


    })

})

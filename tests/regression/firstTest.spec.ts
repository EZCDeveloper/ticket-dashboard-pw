import { test, expect } from '@playwright/test'
import { BasePage } from '../../support/pages/base.page'

test('TC-001: Navigate to the homepage', async ({ page }) => {
    const basePage = new BasePage(page)
    const baseUrl = process.env.BASE_URL as string
    await basePage.navigateTo(baseUrl)
})
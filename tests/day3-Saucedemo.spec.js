
import {test, expect} from "@playwright/test"

test("Handling SauceDemo" , async function({page}){

    //browser
    await page.goto('https://www.saucedemo.com/')

    //validate page title
    await expect(page).toHaveTitle('Swag Labs')

    //username and password
    await page.locator('[id="user-name"]').fill('standard_user')

    await page.locator('//input[@id="password"]').fill('secret_sauce')

    //login button
    await page.locator('//input[@name="login-button"]').click()

    //validate dashboard
    await expect(page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]')).toBeVisible()
})












import {test, expect} from "@playwright/test"

test("Handling SauceDemo" , async function({page}){

    //browser
    await page.goto('https://www.saucedemo.com/')

    //validate page title
    await expect(page).toHaveTitle('Swag Labs')

    //username and password
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('//input[@type="password"]').fill('secret_sauce')

    //login button
    await page.locator('//input[@name="login-button"]').click()

    //validate dashboard select a product
    //await expect(page.locator('//div class[@"Sauce Labs Bolt T-Shirt"]')).toHaveText

    //select on add to cart option
    await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
    await page.waitForTimeout(3000)

    //clicking cart
    await page.locator('[data-test="shopping-cart-link"]').click()
    await page.waitForTimeout(3000)

    //Checkout flow
    await page.locator('//button[@data-test="checkout"]').click()

    //First name last name zipcode
    await page.locator('[id="first-name"]').fill('Dilip')
    await page.locator('[id="last-name"]').fill('Kumar')
    await page.locator('[id="postal-code"]').fill('600044')

    //click on finish option
    await page.locator('[id="continue"]').click()
    await page.waitForTimeout(3000)

})






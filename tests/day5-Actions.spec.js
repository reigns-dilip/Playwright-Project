
import {test , expect} from "@playwright/test"

test("Handle Radio Button & Check Box" , async function({page}){

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForSelector('.post-title.entry-title')

    //fill
    await page.locator('[id="name"]').fill('Dilipkumar')
    await page.waitForTimeout(2000)

    //email
    await page.locator('[id="email"]').pressSequentially('dilipkumar@gmail.com')
    await page.waitForTimeout(2000)

    //RadioButton
    await page.locator('[id="male"]').check()

    //Assert
    await expect(page.locator('[id="male"]')).toBeChecked()
    await expect(await page.locator('[id="male"]').isChecked()).toBeTruthy()

    //CheckBox
    await page.locator('[id="sunday"]').check()

    //Assert
    await expect(page.locator('[id="sunday"]')).toBeChecked()

    //Multiple CheckBox
    let multiplechecks = [page.locator('[id="tuesday"]'), page.locator('#thursday'), page.locator('input#saturday')]

    //Select checkboxes
    for (const element of multiplechecks) {
        await element.check()
        await expect(element).toBeChecked()
        await page.waitForTimeout(1500)
    }

    //Unselect selected checkboxed
    for (const element of multiplechecks) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
        await page.waitForTimeout(1500)
    }
})






























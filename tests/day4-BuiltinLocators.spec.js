

import {test, expect} from "@playwright/test"

test("Handling BuiltIn Locators" , async ({page})=>{

    //browser
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //alt
    const orangeLogo = page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //role
    await page.getByRole('button' , {name :" Login "}).click()

    //wait for
    await page.waitForLoadState('load')
    await page.waitForTimeout(3000)

    //text
    const username = await page.locator('[class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(username)).toBeVisible()

    //label
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //title
    await page.getByTitle('Help').click()

    //test id
    //playwright.dev
})





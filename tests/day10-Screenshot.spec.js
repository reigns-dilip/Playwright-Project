

import {test} from "@playwright/test"

test("Handling Normal Page" , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screeenshot
    await page.screenshot({path : 'images/' + 'visiblepage.png'})

})


test("Handling Full Page" , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    await page.screenshot({path : 'images/' + 'fullpage.jpg' , fullPage : true})

})


test("Handling Locator Page" , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    await page.locator('[name="start"]').screenshot({path : 'images/' + 'locatorpage.jpeg'})

})



test("Handling Highlight Page" , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    const start = page.locator('[name="start"]')

    await start.scrollIntoViewIfNeeded()

    await start.highlight()
    await page.waitForTimeout(3000)

    await page.screenshot({path : 'images/' + 'highlightedArea.png'})

})


















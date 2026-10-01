

import {test , expect} from "@playwright/test"


test("Handling Mouse Hover" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //hover
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    //click
    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(2000)

})


test("Handling Mouse Double Click" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('text=Copy Text').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    //fill
    await page.locator('[id="field1"]').pressSequentially('Dilipkumar')
    await page.waitForTimeout(2000)

    //Double Click
    await page.locator('text=Copy Text').dblclick()
    await page.waitForTimeout(2000)

    //Right Click
    await page.locator('h2:has-text("Double Click")').click({button : 'right'})
    await page.waitForTimeout(2000)

    //Approach - 2
    await page.locator('h2' , {hasText : "Double Click"})

    })



test("Handling Mouse Drag and Drop" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="droppable"]').scrollIntoViewIfNeeded
    await page.waitForTimeout(2000)

    const source = page.locator('[id="draggable"]')
    const target = page.locator('[id="droppable"]')

    //Approach - 1
    await source.dragTo(target)
    await page.waitForTimeout(2000)

    //Approach - 2
    //await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
    //await page.waitForTimeout(2000)
})



test("Handling KeyBoard Actions" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForSelector('[class="post-title entry-title"]')

    //scroll
    await page.mouse.wheel(0, 500)       //Top to Bottom
    await page.mouse.wheel(0, -500)      //Bottom to Top

    await page.waitForTimeout(2000)

    await page.mouse.wheel(500, 0)       //Left to Right
    await page.mouse.wheel(-500, 0)      //Right to Left

    await page.waitForTimeout(2000)

    //fill
    await page.locator('[id="name"]').fill("JavaScript")
    await page.waitForTimeout(2000)

    //Control + A
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000)

    //Control + C
    await page.keyboard.press('Control+KeyC')
    await page.waitForTimeout(2000)

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(2000)

    //Control + V
    await page.keyboard.press('Control+KeyV')
    await page.waitForTimeout(2000)

})





  



















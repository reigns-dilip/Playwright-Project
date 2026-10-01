
import {test , expect} from "@playwright/test"

test("Handling Frames" , async ({page})=>{

    //browser
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //count of frames
    const framescount = await page.frames()
    console.log(framescount.length)

    //Approach - 1
    await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]').fill("Playwright")
    await page.waitForTimeout(3000)

    //Approach - 2
    const frame2 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_2'})
    await frame2.locator('[name="mytext2"]').fill("Javascript")
    await page.waitForTimeout(3000)

    //Handling Inner Frame
    const innerframe = await page.frameLocator('//frame[@src="frame_3.html"]').frameLocator('//iframe')

    await innerframe.locator('[class="AB7Lab Id5V1"]').nth(1).click()
    await page.waitForTimeout(3000)

    await innerframe.locator('[class="uHMk6b fsHoPb"]').last().click()
    await page.waitForTimeout(3000)
}
)





















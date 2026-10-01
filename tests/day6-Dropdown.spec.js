
import {test, expect } from "@playwright/test"

test("Handling dropdown" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('text=Country:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //select dropdown
    const dropdown = page.locator('[id="country"]')

    //1. visible
    await dropdown.selectOption('India')
    await page.waitForTimeout(1000)

    //2. Label
    await dropdown.selectOption({label : 'Japan'})
    await page.waitForTimeout(1000)

    //3. Value
    await dropdown.selectOption({value : 'france'})
    await page.waitForTimeout(1000)

    //4. Index
    await dropdown.selectOption({index : 2})
    await page.waitForTimeout(1000)

    //Assert
    await expect(page.locator('[id="country"] option')).toHaveCount(10)
    await expect((await page.$$('//select[@id="country"]//option[@value]')).length).toBe(10)

}) 


test("Handling Multiple DropDown" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('label:has-text("Colors:")').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //select
    await page.locator('[id="colors"]').selectOption(["Blue" , "Yellow" , "White"])
    await page.waitForTimeout(2000)

    //Unselect
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(2000)

    //select
    await page.locator('[id="colors"]').selectOption([{label : 'Blue'} , {value : 'yellow'} , {index : 5}])
    await page.waitForTimeout(2000)
})


test.only("Handling Dynamic DropDown" , async ({page})=>{

    //browser
    await page.goto('https://ticketnew.com/movies/chennai')

    //wait
    const searchbox1 = page.locator('//div[text()="Search for movies, cinemas and more"]')
    await searchbox1.first().waitFor({state : 'visible'})

    //click
    await searchbox1.first().click()

    //search
    const searchbox2 = page.locator('//input[contains(@class, "dds-rounded-lg dds-outline-none dds-transition-all")]')

    //wait for last matched selector
    await searchbox2.last().waitFor()
    await searchbox2.last().fill("man")

    //wait for all selectors
    await page.waitForSelector('//div[contains(@class, "dds-flex dds-flex-col dds-gap-[4px]")]//h5')

    //Approach - 1

    let searchlist = await page.$$('//div[contains(@class, "dds-flex dds-flex-col dds-gap-[4px]")]//h5')
    for (const element of searchlist){
    const txt = await element.textContent()
    if (txt.trim() === "Spider-Man: Brand New Day"){
    await element.click()
    break
    }
    }
})





//Approach - 2

// let searchlist = page.locator('//div[contains(@class, "dds-flex dds-flex-col dds-gap-[4px]")]//h5')

// for(let i=0; i < await searchlist.count(); i++){    //i < 20
// const item = await searchlist.nth(i)
// const txt = await item.textContent()

// if(txt.trim() === "Spider-Man: Brand New Day"){
//     await item.click()
//     break
// }
// }

// //hard wait
// await page.waitForTimeout(3000)

// })



























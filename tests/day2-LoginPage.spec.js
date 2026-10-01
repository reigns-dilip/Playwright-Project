
// //Agile methodologies - An interactive flexible approach to software development
// focused on collaboration and continuous delivery.
// Waterfall methodologies
// Kanban methodologies

// how many locators? 8 types
// 1. id - attributename = attributevalue
// 2. name
// 3. class
// 4. CSS selector - #id, .class, [attname = "attvalue"]
// 5. tagname
// 6. xpath - relative, absolute, dynamic
// 7. link text
// 8. partial link text

// tag name -> pink
// Attribute Name -> orange
// Attribute Value -> Blue
// Text -> Black



import {test, expect} from "@playwright/test";

test("Handling Login Page" , async function({page}){

    //browser
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.pause()   //Debug

    //username & password
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[type="password"]').fill("admin123")

    //login button
    await page.locator('[type="submit"]').click()

    //Dashboard validation
    await expect(page).toHaveTitle(await page.title())

    await expect(page.locator('[class="oxd-userdropdown-img"]')).toBeVisible()

    await expect(page.locator('[alt="client brand banner"]')).toHaveText

})

//What is locator?
//Xpath is used to find the webelement more accurately.
//Weblocators are available in webpage. To fetch the webelements.
//difference between relative and absolute xpath?

//
//X Path -> Relative Xpath Syntax

1. //tagName[@attributeName = "attributeValue"]  ---> basic xpath
   //button[@name="login"] --> FB login button

2. (//tagName[@attributeName = "attributeValue"])[index] ---> use to find indexwise

3. //tagName[text()="Full Text"]  ---> full textcontent,
//we cannot prefer multi language websites like English, Spanish, Japanese.

4. //tagName[contains(text(),"partial text")]  ---> partial text
//if we have too length textcontent then we can mention partial textcontent.

5. //tagName[contains(@attributeName,"partial AttributeValue")] ---> partial attributeValue








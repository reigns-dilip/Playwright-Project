
// npx playwright test

import {test , expect} from "@playwright/test" ;

test("Tc_001 Validating Amazon Title & url" , async function({page}){   //Fixture

    //browser
    await page.goto("https://www.flipkart.com/")

    //get title & url
    const pageTitle = await page.title()
    const pageUrl = await page.url()

    console.log(pageTitle)
    console.log(pageUrl)

    //Validate both
    await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL(pageUrl)

})


//Open a Reports                      - npx playwright show report
//Run all scripts                     - npx playwright test
//Run a specific file                 - npx playwright test example.spec.js
//Run a spec file & headed mode       - npx playwright test example.spec.js --headed
//Run a spec file & specific browser  - npx playwright test example.spec.js --project=chromium







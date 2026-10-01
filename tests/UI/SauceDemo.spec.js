
import { test } from "../fixtures/fixture"

import userData from '../testData/testData.json'


// const {userDetails} = require('../../testData/testData.json')


test("Validating saucedemo website" , async ({login, home, order}) =>{


    await login.navigate()
    await login.enterUsername(userData.username)
    await login.enterPassword(userData.password)
    await login.clickOnLogin()
    await login.verifyDashboard()
    
    await home.selectDropDown(userData.dropDownOption)
    await home.selectProduct()
    await home.addtoCart()
    await home.cartIconOption()
    await home.verifyUrl()

    await order.checkOutOpt()
    await order.verifyUrl()
    await order.detailsFill(userData.firstName, userData.lastName, userData.zipCode)
    await order.verifyUrl2()
    await order.clickOnFinish()
    await order.verifyConfirmation()
    await order.takeScreenshot()
    
})









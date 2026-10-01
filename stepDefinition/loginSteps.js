
import { log } from 'node:console';
import {test} from '../fixtures/fixture'

import {createBdd} from "playwright-bdd"

const {Given, When, Then} = createBdd(test)

//npx bddgen

Given('Iam open the saucedemo', async ({login}) => {
  await login.navigate(process.env.BASE_URL)
});

When('iam enter username', async ({login}) => {
  await login.enterUsername(process.env.USER_NAME)
});

When('iam enter password', async ({login}) => {
  await login.enterPassword(process.env.PASSWORD)
});

When('iam click on login button', async ({login}) => {
  await login.clickOnLogin()
});

Then('i should see dashboard page', async ({login}) => {
  await login.verifyDashboard()
});


Then('i should handle error', async ({}) => {
  // Step: Then i should handle error
  // From: features\login.feature:19:1
});

//DATA DRIVEN
Given('iam open the URL', async ({login}) => {
  await login.navigate(process.env.BASE_URL)
});

When('iam enter {string} and {string}', async ({login}, username, password) => {
  await login.enterUsername(username)
  await login.enterPassword(password)
});

Then('i should handle error or dashboard', async ({login}) => {
  await login.verifyDashboard()
});









const {Given, When, Then} = require('@cucumber/cucumber');
//import { Given, When, Then } from '@cucumber/cucumber';
const {expect} = require('@playwright/test');
//const playwright = require('@playwright/test');
const {PageObjectManager} = require('../../pageObjects/PageObjectManager');
//hooks
let poMngr

Given('User Logs into the application2 with {string} and {string}', async function (username, pwd)
 {   
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    //await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await this.page.locator('input#username').fill(username);
    await this.page.locator("[name='password']").fill(pwd);
    await this.page.locator("#signInBtn").click();
    //wait till we get incorrect error message
    
  });



  Then('User should get an error message displayed', async function () {
    const errorMsg = await this.page.locator("[style*='block']").textContent();
    console.log(errorMsg)
    // regular expression * is used to provide partial value of the selector. here block is partial value
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect username/password.')
  });

  module.exports = { Given, When, Then };

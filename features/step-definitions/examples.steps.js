const {Given, When, Then} = require('@cucumber/cucumber');
//import { Given, When, Then } from '@cucumber/cucumber';
const {expect} = require('@playwright/test');
//const playwright = require('@playwright/test');
const {PageObjectManager} = require('../../pageObjects/PageObjectManager');
//hooks
let poMngr


// there is a concept of world constructor in cucumber
// as long as you declare a variable this.variable it will be available in all the steps in the scenarion.

  Given('User Logs into the application with {string} and {string}', {timeout: 100*1000},async function (username, password) 
  {
    console.log("In given function this.page is : "+this.page);
    poMngr = new PageObjectManager(this.page);    
    this.loginPage = poMngr.getLoginPage();
    await this.loginPage.openURL();
    await this.loginPage.validLogin(username,password);
  });


  When('User adds {string} to the cart', async function (productName) 
  {
    const dashboardPage= poMngr.getDashboardPage();
    await dashboardPage.placeOrder(productName);
    await dashboardPage.navigateToCart();
    await this.loginPage.wait(1000);
  
  });


  Then('User places the order and validates that the order is present in the name of {string} and for the product {string}',{timeout: 100*1000}, async function (uname, productName) 
  {
    const checkoutPage = poMngr.getCheckoutPage();
    await checkoutPage.view_order_and_checkout(productName);
    await checkoutPage.fill_checkout_form(uname);
    await this.loginPage.wait(1000);
  });
 // module.exports = { Given, When, Then };
  
 // to make it exit at the end of execution npx cucumber-js --exit

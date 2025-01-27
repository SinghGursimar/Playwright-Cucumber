//class to consolidate all page objects
const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {CheckoutPage} = require('./CheckoutPage');

class PageObjectManager
{
    constructor(page)
    {
        this.loginPage = new LoginPage(page);      
        this. dashboardPage = new DashboardPage(page);       
        this.checkoutPage = new CheckoutPage(page);       
    }
    getLoginPage()
    {
        return this.loginPage;
    }
    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getCheckoutPage()
    {
        return this.checkoutPage;
    }
}
module.exports = {PageObjectManager};
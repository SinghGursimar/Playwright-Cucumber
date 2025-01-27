const { expect } = require('@playwright/test');
class CheckoutPage
{
    constructor(page)
    {
        this.page = page;
        this.myCart = page.locator("div li");
        this.checkoutBtn = page.locator("text=Checkout");
        this.selectCountry = page.locator("[placeholder*='Country']");
        this.drpdown = page.locator(".ta-results");
        this.place_order_btn = page.locator(".action__submit");
        this.email_field = page.locator(".user__name [type='text']");
        this.thank_you_message =page.locator(".hero-primary");
        this.orderNumber = page.locator(".em-spacer-1 .ng-star-inserted");
        this.orders = page.locator("button:has-text('ORDERS')");
    }

    async view_order_and_checkout(productName)
    {
        await this.myCart.first().waitFor();
        const myProduct = this.getProductLocator(productName);
        const bool = await myProduct.isVisible();
        //console.log("product visible :- "+bool);
        await expect(bool).toBeTruthy();
        await this.checkoutBtn.click();

    }
    getProductLocator(productName)
    {
      return this.page.locator("h3:has-text('"+productName+"')");
    }
       
     async fill_checkout_form(emailID)
     {
       await this.selectCountry.pressSequentially("ind");
       //const dropdown = 
       await this.drpdown.waitFor();
       const optionsCount = await this.drpdown.locator("button").count();
       for (let i = 0; i < optionsCount; ++i) {
          const text = await this.drpdown.locator("button").nth(i).textContent();
          if (text === " India") {
             await this.drpdown.locator("button").nth(i).click();
             break;
          }
       }
       //await page.pause()
       
       //await expect(this.email_field.first()).toHaveText(emailID);
       await this.place_order_btn.click();
       await expect(this.thank_you_message).toHaveText(" Thankyou for the order. ");
       const orderId = await this.orderNumber.textContent();
       console.log(orderId);
     
       await this.orders.click()
    }
}
module.exports = {CheckoutPage}
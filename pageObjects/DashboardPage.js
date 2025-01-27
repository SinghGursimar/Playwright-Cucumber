const { expect } = require('@playwright/test');
class DashboardPage 
{
    constructor(page)
    {
        this.page = page;
        this.productsText = page.locator(".card-body b");
        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");

    }

    async placeOrder(productName)
    {
        const titles = await this.productsText.allTextContents();
        console.log(titles); 
        const count = await this.products.count();
        const itemFound = false;
       // await page.pause();
        for (let i = 0; i < count; ++i) {
           if (await this.products.nth(i).locator("b").textContent() === productName) {
              //add to cart
              await this.products.nth(i).locator("text= Add To Cart").click();
              break;
           }
           else
           {
            //throw new Error("Item not found");
            expect(itemFound).toBeTruthy();
           }

        }
      

    }
    async navigateToCart()
    {
        await this.cart.click();

    }


}
module.exports = {DashboardPage};
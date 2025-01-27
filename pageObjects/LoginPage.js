class LoginPage{

    constructor(page)
    {
        this.page = page;
        this.userName = page.locator('#userEmail');
        this.password= page.locator("#userPassword");
        this.signInBtn = page.locator("#login");
        this.carTitles = page.locator(".card-body b ");
    }

    async validLogin(uname, pwd)
    {
        await this.userName.fill(uname);
        await this.password.fill(pwd);
        await this.signInBtn.click();  
        await this.page.waitForLoadState('networkidle');
    }
    async openURL()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async wait(time)
    {
        await this.page.waitForTimeout(1000);
    }

    
}
module.exports = {LoginPage};
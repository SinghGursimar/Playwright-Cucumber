const {Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const {PageObjectManager} = require('../pageObjects/PageObjectManager');

let browser, context ;
Before(async function()
{
     browser =await playwright.chromium.launch
        ({
            headless: false,
            args: ['--start-maximized'], // Maximizes the window on launch
           
          });
         context = await browser.newContext({
            viewport: null, // Disables the default viewport and uses the full screen
        });
        this.page = await context.newPage(); 
       // console.log("In before function this.page is : "+this.page);
        


})
// Hooks can also be used with tags syntax  --> Before({tags: "@Regression"}, async function(){})

After(async function({pickle, result})  {
    //console.log("In after block");
    console.log("Scenario Name : -"+pickle.name);
    console.log("Scenario Status : -"+result.status);
    await browser.close();

  });

BeforeStep(async function()  
{
  
})
//Note that your hook functions cannot reference the world as this if you use arrow functions.
AfterStep(async function({result, pickleStep})  
    {
        console.log("Step Name : -"+pickleStep.text);        
        console.log("Step Status : -"+result.status);
        const comp = result.status === Status.FAILED;
        //console.log(comp)
        if(result.status === Status.FAILED)
        {
            // const buffer = await this.page.screenshot();
            // console.log(buffer);
            // await this.page.screenshot({ path: 'screenshot1.png' });
            // this.attach(buffer.toString('base64'), 'base64:image/png');
            // console.log("Screenshot logged")
            const screenshotPath = `screenshots/${pickleStep.text.replace(/[^a-z0-9]/gi, '_')}.png`;
            const buffer = await this.page.screenshot({ path: screenshotPath });
            console.log(`Screenshot taken for failed step: ${screenshotPath}`);
            await this.attach(buffer, { mediaType: 'image/png' });

        }
    })
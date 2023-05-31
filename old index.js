const puppeteer = require('puppeteer');

async function scrapeProfile(url){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(url);

    

    // const [el] = await page.$x('//*[@id="ember319"]');
    // const src = await el.getProperty('textContent');
    // const srcTxt = await src.jsonValue();

    const grabName = await page.evaluate(()=>{
        const name = document.querySelector('.pv-text-details__left-panel h1');
        return name.innerHTML;
    })

    console.log(grabName)

    await browser.close();
}

scrapeProfile("https://www.linkedin.com/in/maurice-rana-396384213/");
const puppeteer = require('puppeteer');

let cheerio = require('cheerio')

const users = [

    {name : "smith jonathan",
    email : "smithjonathan111@hotmail.com",
    password: "123456789str@",
    dob:"15,01,2000"},

    {name : "alexa vayuz",
    email : "alexavayuz34@hotmail.com",
    password: "123456789str@",
    dob:"15,01,2000"},
    
]

function getuser (){
    const res = Math.floor(Math.random() * 10);

    if(res <5)
        return users[0];
    
    return users[1];
}

const user = getuser();

const EMAIL_SELECTOR = '#username';
const PASSWORD_SELECTOR = '#password';
const SUBMIT_SELECTOR = '#organic-div > form > div.login__form_action_container > button';
const LINKEDIN_LOGIN_URL = 'https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin';

async function scrapeProfile(url){
    const browser = await puppeteer.launch({ headless:false});
    const page = await browser.newPage();
    // await page.goto(url);

    

    await page.goto(LINKEDIN_LOGIN_URL, { waitUntil: 'domcontentloaded' })

    // const element = await page.waitForSelector(SUBMIT_SELECTOR);
    // console.log(element);
    await page.click(EMAIL_SELECTOR)
    await page.keyboard.type(user.email);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(user.password);
    await page.click(SUBMIT_SELECTOR);

    await page.waitForNetworkIdle({
        idleTime: 4000
    })

    await page.goto(url);

    await page.waitForNetworkIdle({
        idleTime: 1000
    })
    var consoled = false;
    try{
        const [el] = await page.$x('//*[@id="ember29"]/div[2]/div[2]/div[1]/div[1]/h1');
        const nameEle = await el.getProperty('textContent');
        const Name = await nameEle.jsonValue();
    
        console.log({Name})
    
        const [el2] = await page.$x('//*[@id="ember29"]/div[2]/div[2]/div[1]/div[2]');
        const src = await el2.getProperty('textContent');
        const designation = await src.jsonValue();
    
        console.log({designation})
        consoled = true;

    }
    catch{
        consoled = false
    }
    if(consoled == false)
    try{
        const [el] = await page.$x('//*[@id="ember30"]/div[2]/div[2]/div[1]/div[1]/h1');
        const nameEle = await el.getProperty('textContent');
        const Name = await nameEle.jsonValue();
    
        console.log({Name})
    
        const [el2] = await page.$x('//*[@id="ember30"]/div[2]/div[2]/div[1]/div[2]');
        const src = await el2.getProperty('textContent');
        const designation = await src.jsonValue();
    
        console.log({designation})
        consoled = true;
    }
    catch{
        consoled = false;
    }
    if(consoled == false)
    try{
        const [el] = await page.$x('//*[@id="ember31"]/div[2]/div[2]/div[1]/div[1]/h1');
        const nameEle = await el.getProperty('textContent');
        const Name = await nameEle.jsonValue();
    
        console.log({Name})
    
        const [el2] = await page.$x('//*[@id="ember31"]/div[2]/div[2]/div[1]/div[2]');
        const src = await el2.getProperty('textContent');
        const designation = await src.jsonValue();
    
        console.log({designation})
        consoled = true;
    }
    catch(err){
        console.log(err)
        console.log("div not found!")
    }

    // const element = await page.waitForSelector("#ember79 > div.display-flex.ph5.pv3 > div > div > div > span:nth-child(1)");
    // console.log((await element.getProperty('textContent')).jsonValue());

    // const [el3] = await page.$x('//*[@id="ember68"]/div[3]/div/div/div/span[1]');
    // const src2 = await el3.getProperty('textContent');
    // const about = await src2.jsonValue();

    // console.log({about});

    // const element = await page.waitForSelector("#ember28 > div.ph5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1");
    // console.log((await element.getProperty('textContent')).jsonValue());


    // const element2 = await page.waitForSelector("#ember28 > div.ph5 > div.mt2.relative > div:nth-child(1) > div.text-body-medium.break-words");
    // console.log((await element2.getProperty('textContent')).jsonValue());


    await browser.close();
}

scrapeProfile("https://www.linkedin.com/in/vatsal-poddar-71810a158/");
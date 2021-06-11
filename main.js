const { SIGTERM } = require("constants");
const puppeteer = require("puppeteer");
fs = require('fs');

const url = "";

(async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    console.log("Loading...")

    await page.setViewport({
        width: 1280,
        height: 10800,
    });



    // take pdf
    // await page.pdf({
    //     path: "page.pdf",
    //     format: "A4",
    // })




    // take screen
    // await page.screenshot({
    //     path: "image.png"
    // })



    // HTML code grabber
    // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    // fs.writeFile('htmlcode.txt', bodyHTML, function(err) { err = null });

    let data = await await page.evaluate(() => {
        return document.querySelector('span[itemprop=price]').innerText
    });
    price = parseInt(data);
    console.log(price);

    if (price < 85) {
        console.log('Le prix est en dessous de 85€')
    }

    await browser.close();
    console.log("End")
})();
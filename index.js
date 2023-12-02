//futtatas: node .\index.js

import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./temp"
    });
  const page = await browser.newPage();

  await page.goto('https://npmjs.com/');

  await page.type('._390acbc5', 'express');

  const searchResultSelector = '._5b436c1a';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  var selector = '#top > div.fdbf4038.w-third-l.mt3.w-100.ph3.ph4-m.pv3.pv0-l > div:nth-child(7) > div > p';
  await page.waitForSelector(selector);
  let element = await page.$(selector);
  let value = await page.evaluate(el => el.textContent, element);
  console.log("Current version is: " + value);

  await browser.close();
})(); 
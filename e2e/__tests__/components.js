const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH
  });
  page = await browser.newPage();
});

describe('SWE Components testing', () => {
  test('Twitter and Facebook feed is working as expected', async () => {
    await page.setViewport({ width: ct.BT_XL, height: 800 });
    await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
    // twitter widget exist
    const searchInput = await page.$('#twitter-widget-0');
    expect(searchInput).toBeTruthy();
    //facebook widget exist
    const getFbAttr = await page.evaluate(
      'document.querySelector(".fb_iframe_widget").getElementsByTagName("iframe")[0].getAttribute("src")'
    );
    expect(getFbAttr).toMatch(/https:\/\/www.facebook.com/);
  });

  test('Carousel is working as expected', async () => {
    await page.setViewport({ width: ct.BT_XL, height: 800 });
    await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
    const carItem1 = await page.evaluate(
      "document.querySelectorAll('.carousel-item')[0].getAttribute('class')"
    );
    expect(carItem1).toMatch(/active/);
    await page.click('.right.carousel-control');
    await page.waitFor(3000);
    expect(
      await page.evaluate("document.querySelectorAll('.carousel-item')[1].getAttribute('class')")
    ).toMatch(/active/);
  }, 31000);

  afterAll(async () => {
    await browser.close();
  });
});

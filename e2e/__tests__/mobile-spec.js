const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH,
    headless: false,
  });
  page = await browser.newPage();
});

describe('SWE Mobile Interactions', () => {
  test('Should display the menu clicking menu icon', async () => {
    const siteNav = '#qg-site-nav';
    expect(
      await page.evaluate("document.querySelectorAll('#qg-site-nav').getAttribute('class')")
    ).not.toMatch(/collapse show/);
    (await page.$(siteNav)).click();
    expect(
      await page.evaluate("document.querySelectorAll('#qg-site-nav').getAttribute('class')")
    ).toMatch(/collapse show/);
  });

  afterAll(async () => {
    await browser.close();
  });
});

const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH,
  });
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_SM, height: 800 });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Mobile Interactions', () => {
  test('Should display the menu clicking menu icon', async () => {
    expect(await page.evaluate("document.querySelector('#qg-site-nav').getAttribute('class')")).not.toMatch(/collapse show/);
    (await page.$('#qg-show-menu')).click();
    await page.waitFor(3000);
    expect(await page.evaluate("document.querySelector('#qg-site-nav').getAttribute('class')")).toMatch(/collapse show/);
  }, 30000);

  afterAll(async () => {
    await browser.close();
  });
});

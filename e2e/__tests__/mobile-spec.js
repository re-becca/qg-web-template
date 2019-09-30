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
    await page.setViewport({ width: ct.BT_SM, height: 800 });
    await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
    const el = await page.$('#qg-site-nav');
    const className = await el.getProperty('className');
    expect(className).not.toMatch(/collapse show/);
  });

  afterAll(async () => {
    await browser.close();
  });
});

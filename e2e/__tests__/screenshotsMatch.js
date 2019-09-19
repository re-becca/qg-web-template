const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH,
  });
  page = await browser.newPage();
});

describe('SWE templates testing', () => {
  test('Index page should match with the screenshot stored', async () => {
    const page = await browser.newPage();
    await page.setViewport({ width: ct.BT_XL, height: 1800 });
    await page.goto(`${ct.APP_URL}/template-pages/index-page.html`, { waitUntil: 'networkidle0' });
    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'Index Page Template',
    });
  });
  afterAll(async () => {
    await browser.close();
  });
});

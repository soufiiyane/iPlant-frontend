const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('React App E2E Tests', function() {
  let driver;

  before(async function() {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should load the homepage', async function() {
    await driver.get('http://localhost:3000');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'React App');
  });
});
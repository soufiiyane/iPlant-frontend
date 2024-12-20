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
    options.addArguments('--disable-gpu');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  after(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  it('should load the homepage', async function() {
    try {
      await driver.get('http://localhost:3000');
      // Wait for some element that you know exists on your page
      await driver.wait(until.elementLocated(By.css('body')), 1000000);
      const title = await driver.getTitle();
      assert.strictEqual(title, 'React App'); // Make sure this matches your actual page title
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});
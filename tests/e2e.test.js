const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('React App E2E Tests', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should load the homepage', async function() {
    await driver.get('http://localhost:3000'); // Replace with your React app URL
    const title = await driver.getTitle();
    assert.strictEqual(title, 'React App');
  });

 
});

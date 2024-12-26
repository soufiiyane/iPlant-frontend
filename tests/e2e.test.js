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
      await driver.wait(until.elementLocated(By.css('body')), 10000);
      const title = await driver.getTitle();
      assert.strictEqual(title, 'iPlant');
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });

  it('should display the NavBar component', async function() {
    await driver.get('http://localhost:3000');
    const navBar = await driver.wait(until.elementLocated(By.css('header')), 10000);
    assert(await navBar.isDisplayed());
  });

  it('should display the HeroSection component', async function() {
    await driver.get('http://localhost:3000');
    const heroSection = await driver.wait(until.elementLocated(By.css('section.pt-35')), 10000);
    assert(await heroSection.isDisplayed());
  });

  it('should display the Facts component', async function() {
    await driver.get('http://localhost:3000');
    const facts = await driver.wait(until.elementLocated(By.css('section.py-20')), 10000);
    assert(await facts.isDisplayed());
  });

  it('should display the Features component', async function() {
    await driver.get('http://localhost:3000');
    const features = await driver.wait(until.elementLocated(By.css('section#features')), 10000);
    assert(await features.isDisplayed());
  });

  it('should display the IPlantCard component', async function() {
    await driver.get('http://localhost:3000');
    const iPlantCard = await driver.wait(until.elementLocated(By.css('.group.bg-white.rounded-xl')), 10000);
    assert(await iPlantCard.isDisplayed());
  });

  it('should display the Footer component', async function() {
    await driver.get('http://localhost:3000');
    const footer = await driver.wait(until.elementLocated(By.css('footer')), 10000);
    assert(await footer.isDisplayed());
  });

  it('should display the search input', async function() {
    await driver.get('http://localhost:3000/blog');
    const searchInput = await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);
    assert(await searchInput.isDisplayed());
  });

  it('should display plant cards', async function() {
    await driver.get('http://localhost:3000/blog');
    const plantCards = await driver.wait(until.elementsLocated(By.css('.bg-white.rounded-xl')), 10000);
    assert(plantCards.length > 0);
  });

  it('should filter plants by properties', async function() {
    await driver.get('http://localhost:3000/blog');
    const propertyCheckbox = await driver.wait(until.elementLocated(By.css('input[id="Calmante"]')), 10000);
    await propertyCheckbox.click();
    const plantCards = await driver.wait(until.elementsLocated(By.css('.bg-white.rounded-xl')), 10000);
    assert(plantCards.length > 0);
  });

  it('should display the plant image', async function() {
    await driver.get('http://localhost:3000/plant/JU8JQU8zsxR');
    const plantImage = await driver.wait(until.elementLocated(By.css('.relative img')), 10000);
    assert(await plantImage.isDisplayed());
  });

  it('should display the plant name', async function() {
    await driver.get('http://localhost:3000/plant/JU8JQU8zsxR');
    const plantName = await driver.wait(until.elementLocated(By.css('h1.text-4xl.font-bold')), 10000);
    assert(await plantName.isDisplayed());
  });

  it('should display the plant description', async function() {
    await driver.get('http://localhost:3000/plant/JU8JQU8zsxR');
    const plantDescription = await driver.wait(until.elementLocated(By.css('p.text-gray-600')), 10000);
    assert(await plantDescription.isDisplayed());
  });

  it('should display the properties accordion', async function() {
    await driver.get('http://localhost:3000/plant/JU8JQU8zsxR');
    const propertiesAccordion = await driver.wait(until.elementLocated(By.css('div.bg-white.rounded-lg')), 10000);
    assert(await propertiesAccordion.isDisplayed());
  });

  it('should display the comments section', async function() {
    await driver.get('http://localhost:3000/plant/JU8JQU8zsxR');
    const commentsSection = await driver.wait(until.elementLocated(By.css('h3.text-xl.font-semibold')), 10000);
    assert(await commentsSection.isDisplayed());
  });


  it('should login and redirect to home page', async function() {
    await driver.get('http://localhost:3000/login');
    await driver.wait(until.elementLocated(By.id('email')), 10000);

    const emailInput = await driver.findElement(By.id('email'));
    const passwordInput = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.css('button[type="submit"]'));

    await emailInput.sendKeys('imad@gmail.com');
    await passwordInput.sendKeys('imad');
    await loginButton.click();

    await driver.wait(until.urlIs('http://localhost:3000/'), 10000);
    const userData = await driver.executeScript('return localStorage.getItem("userData");');
    assert(userData !== null);
  });

});
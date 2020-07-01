require('chromedriver');
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe("Проверка поиска элементов с разными типами локаторов", () => {
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://google.com');
    });

    it('Find element by id', async function() {
        let role = await driver.findElement(By.id("tsf")).getAttribute("role");
        assert.equal(role, 'search');
    });

    it('Find element by name', async function() {
        let role = await driver.findElement(By.name("f")).getAttribute("role");
        assert.equal(role, 'search');
    });

    it('Find element by className', async function() {
        let role = await driver.findElement(By.className("tsf nj")).getAttribute("role");
        assert.equal(role, 'search');
    });

    it('Find element by tagName', async function() {
        let role = await driver.findElement(By.tagName("form")).getAttribute("role");
        assert.equal(role, 'search');
    });

    it('Find element by linkText', async function() {
        let role = await driver.findElement(By.linkText("Конфиденциальность")).getAttribute("href");
        assert.equal(role, 'https://policies.google.com/privacy?fg=1');
    });

    it('Find element by partialLinkText', async function() {
        let role = await driver.findElement(By.partialLinkText("Конфиденц")).getAttribute("href");
        assert.equal(role, 'https://policies.google.com/privacy?fg=1');
    });

    it('Find element by css', async function() {
        let role = await driver.findElement(By.css("form#tsf")).getAttribute("role");
        assert.equal(role, 'search');
    });

    it('Find element by xpath', async function() {
        let role = await driver.findElement(By.xpath("//form")).getAttribute("role");
        assert.equal(role, 'search');
    });

    after(() => driver.quit());
});
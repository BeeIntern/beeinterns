require('chromedriver');
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe("Проверка поиска элементов с разными типами локаторов", () => {
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://moskva.beeline.ru/shop');
    });
    
    // it('Find element by xpath', async function() {
    //     let role = await driver.findElement(By.xpath("//span[text()=\'телефоны\']")).getAttribute("role");
    //     assert.equal(role, 'телефоны');
    // });

    // it('should successfull open phone page', function(){
    //     $('//span[text()=\'телефоны\']').click();
    //     title=browser.getTitle();
    //     expect(title).to.equal('Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва');
    // });

    it('Find element by css', async function() {
        let role = await driver.findElement(By.css("a:nth-of-type(2).DevicesMenu_text_3pNm")).getAttribute("role");
        assert.equal(role, 'span.DevicesMenu_text_3pNm');
    });
    
    // it('Find element by css', async function() {
    //     let role = await driver.findElement(By.css("[class*='DevicesMenu_component']")).getAttribute("innerText");
    //     assert.equal(role, 'телефоны');
    // });
    

    // before(async function() {
    //     driver = await new Builder().forBrowser('chrome').build();
    //     await driver.get('https://moskva.beeline.ru/shop/catalog/telefony/smartfony/');
    // });

    // it('Find element by css', async function() {
    //     let role = await driver.findElement(By.css("[class*='Slider_range']")).getAttribute("role");
    //     assert.equal(role, 'presentation');
    // });



   
    // it("findElement: получен один веб-элемент", async () => {
    //     // Сохраняем веб-элемент в переменную searchInput
    //     const searchInput = await driver.findElement(By.css("[class*='DevicesMenu_component']")).getAttribute("href");
    //     // Кликаем по элементу
    //     await searchInput.click();
    //     // Печатаем значение переменной query в поисковое поле
    //     await searchInput.sendKeys(query, Key.RETURN);
    //     // Ждём 10 сек, пока не появится элемент блока с результатами выдачи
    //     await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
    //     // Когда дождались, сохраняем в переменную title значение заголовка сайта
    //     const title = await driver.getTitle();
    //     // Проверяем АКТУАЛЬНЫЙ заголовок с ОЖИДАЕМЫМ (форматируя строку, передаём значение переменной query в неё)
    //     assert.equal(title, `${query} - Google Search`);
    // });


    // it('Find element by name',2-q async function() {
    //     let role = await driver.findElement(By.name("f")).getAttribute("role");
    //     assert.equal(role, 'search');
    // });

    // it('Find element by className', async function() {
    //     let role = await driver.findElement(By.className("tsf nj")).getAttribute("role");
    //     assert.equal(role, 'search');
    // });

    // it('Find element by tagName', async function() {
    //     let role = await driver.findElement(By.tagName("form")).getAttribute("role");
    //     assert.equal(role, 'search');
    // });

    // it('Find element by linkText', async function() {
    //     let role = await driver.findElement(By.linkText("onfid")).getAttribute("href");
    //     assert.equal(role, 'https://policies.google.com/privacy?fg=1');
    // });

    // it('Find element by partialLinkText', async function() {
    //     let role = await driver.findElement(By.partialLinkText("onfid")).getAttribute("href");
    //     assert.equal(role, 'https://policies.google.com/privacy?fg=1');
    // });

    // it('Find element by css', async function() {
    //     let role = await driver.findElement(By.css("form#tsf")).getAttribute("role");
    //     assert.equal(role, 'search'); 

    // });

    // it('Find element by xpath', async function() {
    //     let role = await driver.findElement(By.xpath("//form")).getAttribute("role");
    //     assert.equal(role, 'search');
    // });

    after(() => driver.quit());
});
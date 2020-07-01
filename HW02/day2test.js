require("chromedriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");

describe("Проверка поиска элементов средствами Selenium WD = CSS-selectors", () => {
    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://moskva.beeline.ru/shop"); 
    });

    it("Поиск вкладки 'Телефоны'", async () => {
        await driver.wait(until.elementLocated(By.css('a[href="/shop/catalog/telefony/"]')), 10000).click();
        // Когда дождались, сохраняем в переменную title значение заголовка сайта
        const title = await driver.getTitle();
        // Проверяем АКТУАЛЬНЫЙ заголовок с ОЖИДАЕМЫМ (форматируя строку, передаём значение переменной query в неё)
        assert.equal(title, `Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва`);
    });

    it("инпуты фильтрации: от и до (в блоке “Цена”)", async () => {
        const priceFilters = await driver.wait(until.elementLocated(By.css("div[class *= 'options']>[class *= 'RangeFilter']>[class *='container']")));
        const priceFrom = priceFilters[0];
        const priceTo = priceFilters[1];
    });

    it("Показать всё в разделе фильтра “Производители” ", async () => {
        const showAllProducers = await driver.wait(until.elementLocated(By.css("div[class *= 'SidebarPanel_borderBottom']:nth-of-type(3) [class *= 'ShowAllButton_text']")), 10000).click();
    });

    it("один из чекбоксов производителей, например, “Xiaomi”, ", async () => {
        const showProductXiaomi = await driver.wait(until.elementLocated(By.css("label[for *='xiaomi']")), 10000).click();
    });

    
    it("элемент сортировки по цене,", async () => {
       
        const sortbyprice = await driver.wait(until.elementLocated(By.css("div:nth-of-type(2) > div[role='menu'] > div:nth-of-type(2) > .FilterTabs_content_23-b")),20000).click();
        // а как в css выбрать текст как в xpath //div[2]/span[@innertext=' Цене'] text()=' Цене']
    });

    it("элемент наименования товара в каталоге,", async () => {
        const showdetailedProductXiaomi = await driver.wait(until.elementLocated(By.linkText("Смартфон Xiaomi Redmi 5 Plus 32GB Gold")),20000).click();
       
        // а как в css правильно ?
        // const showdetailedProductXiaomi = await driver.wait(until.elementLocated(By.css("a[href *= '/shop/details/smartfon-xiaomi-redmi-5-plus-32gb-gold/']")), 30000).click(); 
        // [data-indenty][class *= ProductCard_desc][href *='/shop/details/smartfon-xiaomi-redmi-5-plus-32gb-gold/']
    });

    it("Значение цены товара", async () => {
        const priceValue = await driver.wait(until.elementsLocated(By.css("div[class *= 'Heading_h1'] [class *= 'InlineSet_item']")), 10000);
    });

    it("кнопка “Купить”,", async () => {
        const buyButton = await driver.wait(until.elementLocated(By.css("button[class *= 'BuyButtonLayout_button']")));
        assert.equal(await buyButton.getText(), "Купить");
        await buyButton.click();
 
    });
    // на странице https://moskva.beeline.ru/shop/basket/#?step=orderList (после нажатия на кнопку “Купить”)
    // • 

    it("Крестик для удаления товара из корзины (страница Корзины)", async () => {
        await driver.wait(until.elementLocated(By.css("table[class*='orders-list']")), 10000);
        await driver.findElement(By.css("svg[class='modify-link-after']")).click();
    });

    it("элемент сообщения о том, что товар был удалён из корзины", async () => {
        await driver.wait(until.elementLocated(By.css("div[class*='shop-basket-item-service-note']")), 10000);
        let text = await driver.findElement(By.css("div[class*='shop-basket-item-service-note'] > span")).getText();
        assert.equal(text, "Товар был удален из корзины");
    });

    it("кнопка восстановления удалённого товара (страница Корзины).", async () => {
        await driver.wait(until.elementLocated(By.css("span[data-ng-click = 'restoreItem(item)']")), 10000).click();
    });

    after(() => driver.quit());
});

// $ ./node_modules/.bin/mocha --timeout 10000 ./test\ sripts/baseTest.js
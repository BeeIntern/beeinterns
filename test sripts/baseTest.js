require("chromedriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
const query = "Beeline";

/*
ЭТИ СТРОКИ Я ЗАКОММЕНТИРОВАЛ. 

Звёздочка и слэш закрывают комментарий. Всё, что здесь написано, игнорируется, выполняетсят только код.
Также мы можем закомментировать отдельные строки с помощью двойного слэша. 
Например, так:

// await driver.get("https://google.com");

Комментарии нужны для повышения понимания кода, его читаемости, а также упрощают жизнь
новым людям на проекте :)
*/

describe("Проверка поиска элементов средствами Selenium WD", () => {
    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        // Переходим на google.com
        await driver.get("https://google.com"); 
    });

    it("findElement: получен один веб-элемент", async () => {
        // Сохраняем веб-элемент в переменную searchInput
        const searchInput = await driver.findElement(By.xpath("//input[@name='q']"));
        // Кликаем по элементу
        await searchInput.click();
        // Печатаем значение переменной query в поисковое поле
        await searchInput.sendKeys(query, Key.RETURN);
        // Ждём 10 сек, пока не появится элемент блока с результатами выдачи
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // Когда дождались, сохраняем в переменную title значение заголовка сайта
        const title = await driver.getTitle();
        // Проверяем АКТУАЛЬНЫЙ заголовок с ОЖИДАЕМЫМ (форматируя строку, передаём значение переменной query в неё)
        assert.equal(title, `${query} - Google Search`);
    });

    it("findElements: получен массив веб-элементов", async () => {
        // Нажимаем кнопку "Назад" в браузере
        driver.navigate().back();
        // Ждём, пока появится элемент поискового поля не появится
        await driver.wait(until.elementLocated(By.xpath("//input[@name='q']")), 10000);
        // Ищем все элементы с тэгом "a" на странице и сохраняем массив из них в переменную
        const refs = await driver.findElements(By.tagName("a"));
        // Получаем текст 22 элемента в массиве, обращаясь к нему по индексу
        const refText = await refs[21].getText();
        // Сравниваем АКТУАЛЬНЫЙ текст ссылки с ОЖИДАЕМЫМ
        assert.equal(refText, "Google Поиск");
    });

    it("Поиск элемента внутри элемента", async () => {
        // Ищем "контейнер" поискового поля, сохраняем веб-элемент в переменную
        const searchDiv = await driver.findElement(By.xpath("//div[contains(@jsaction, 'input')]"));
        // Ищем элемент внутри элемента. Находим поисковое поле
        const searchInput = await searchDiv.findElement(By.tagName("input"));
        // Кликаем по полю
        await searchInput.click();
        // Печатаем значение переменной query в поисковое поле
        await searchInput.sendKeys(query, Key.RETURN);
        // Ждём 10 сек, пока не появится элемент блока с результатами выдачи
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // Когда дождались, сохраняем в переменную title значение заголовка сайта
        const title = await driver.getTitle();
        // Проверяем АКТУАЛЬНЫЙ заголовок с ОЖИДАЕМЫМ (форматируя строку, передаём значение переменной query в неё)
        assert.equal(title, `${query} - Google Search`);
    });

    after(() => driver.quit());
});



//assert describe it mocha functions
// assert helps to determine the status of the test, it determines failure of the test.
// describe is a function which holds the collection of tests. It takes two parameters, first one is the meaningful name to functionality under test and second one is the function which contains one or multiple tests. We can have nested describe as well.
// it is a function again which is actually a test itself and takes two parameters, first parameter is name to the test and second parameter is function which holds the body of the test.


//async await   js opratorors  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/await

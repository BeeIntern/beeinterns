ЛЕКЦИЯ
«Знакомство с Allure-reporter; написание первых простых тестов с использованием WebdriverIO»

Видео лекции:
https://youtu.be/0l9Ld-ELWo4

💣БОНУС ВИДЕО
«Подключение Allure-report к проекту WebdriverIO»

Видео лекции:
https://youtu.be/zN80NCnC4Bo


npm init -y
npm i @wdio/cli --save-dev
npm i allure-commandline --save-dev
npm i chai
./node_modules/.bin/wdio wdio.conf.js
npm run report
npm install cypress
./node_modules/.bin/cypress open
describe('Beeline Shop Test', function(){

    it('Open phone page', function(){
        cy.visit('https://moskva.beeline.ru/shop/');
        cy.contains('телефоны').click();
        cy.contains('Смартфоны').should('be.visible');
    });

    it('Search Apple phones', function(){
        cy.visit('https://moskva.beeline.ru/shop/');
        cy.contains('телефоны').click();
        cy.contains('Смартфоны').should('be.visible');
        cy.get('input[name="query"]').type('Apple');
        cy.get('input[name="query"]').type('{enter}');
        cy.get('div[class*=\'ProductCard_header\'] a').then(function(names){
            const name = names[0].text;
            expect(name).to.contain('Apple');
        });
    });
});
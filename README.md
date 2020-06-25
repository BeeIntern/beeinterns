    brew install node

    1  npm i
    2  npm install -g nodemon
    3  npm install express

    https://www.diffchecker.com/diff

    Сегодня (11 июня) пройдет лекция на тему:
«Асинхронный JavaScript ч2. Как работает асинхронность»
Видео лекции:
https://youtu.be/PCyhtZYCZks

 ⁃ Лектор: Павел Захаров





Задание:

Реализовать функционал взаимодействия с backend посредоством HTTP запросов.

Ссылку на PullRequest присылать на почту PaVZakharov@beeline.ru c темой письма #28 HW. В тексте письма обязательно указать ФИО интерна.

Требования:
HTTP запросы должно быть асинхронными (AJAX).
Можно использовать любой интерфейс для написания HTTP запросов (Fetch, Axios, Redaxios, Superagent), не принципиально.
При написании кода необходимо учитывать, что любой запрос может завершиться с ошибкой (statusCode 300~599). При этом код должен продолжать работать корректно.
Стилизовать кнопку и тексты необязательно - по желанию.
Шаблон серверной части можно взять из материалов 27 лекции. Либо написать свой - не принципиально.

ТЗ:
Backend API:
[GET]  /serviceavailable/
JSON-Response: { "isSucceeded": true }

[GET]  /getinfo/
JSON-Response: { "isSucceeded": true, "text": "Info info info info info info" }

[GET]  /getdescription/
JSON-Response: { "isSucceeded": true, "text": "Description Description Description Description Description Description" }

Функционал:
Есть кнопка с текстом "Получить".
По клику на кнопку вызывается метод /serviceavailable/
Если метод завершился с ошибкой (statusCode 300~599) либо ответил { "isSucceeded": false }, то под кнопкой вывести текст "Произошла ошибка".
Если метод ответил { "isSucceeded": true }, то выполнить ПАРАЛЛЕЛЬНО два запроса /getinfo/ и /getdescription/
В ответе то, что вернулось в поле "text" вывести под кнопкой "Получить".
Если оба запроса завершились успешно, то под кнопкой выводятся оба текста.
Если успешно завершился только один из запросов, то выводится текст этого запроса.
Если оба запроса завершились с ошибкой (statusCode 300~599 или { "isSucceeded": false }), то вывести в консоль Server Error
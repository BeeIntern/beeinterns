## HW5
### Useful commands

npm init -y

npm i mocha

npm i node-fetch

npm i chromedriver --save-dev

npm i selenium-webdriver

npm install @wdio/cli

npx wdio config

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register

npm install @wdio/allure-reporter --save-dev

https://webdriver.io/docs/allure-reporter.html

npm i allure-commandline --save-dev

./node_modules/.bin/wdio wdio.conf.js

npm i

npm run report

in browser

jdk 8 download

https://www.oracle.com/ru/java/technologies/javase/javase-jdk8-downloads.html

https://login.oracle.com/mysso/signon.jsp

webmaster.it.io@gmail.com
P/:hT2=.7CF66=z

jdk-8u261-windows-x64.exe

Настройки Windows:
## Панель управления\Система и безопасность\Система
Дополнительные параметры системы->Свойства системы->Системные переменные->Переменные среды->Системные переменные:
JAVA_HOME
C:\Program Files\Java\jdk1.8.0_261\

-----------
./node_modules/.bin/wdio wdio.conf.js --spec ./tests/removeRestore.test.js

// browser.debug();
-----------

## Подключение Allure-report к проекту WebdriverIO
https://www.youtube.com/watch?v=zN80NCnC4Bo&t=146s
https://www.w3schools.com/xml/xpath_operators.asp
https://w3c.github.io/webdriver/#dfn-refresh

https://webdriver.io/docs/api/webdriver.html
https://webdriver.io/docs/allure-reporter.html#supported-allure-api
https://webdriver.io/docs/clioptions.html

https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/testing/index.html

https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/testing/index.js#L436


## logs
```
[0-0] 2020-08-04T04:59:28.636Z INFO webdriver: RESULT true
2020-08-04T04:59:28.637Z INFO webdriver: COMMAND findElement("xpath", "//span[text()="Товар был удален из корзины"]")
2020-08-04T04:59:28.637Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:28.637Z INFO webdriver: DATA {
  using: 'xpath',
  value: '//span[text()="Товар был удален из корзины"]'
}
[0-0] 2020-08-04T04:59:28.685Z INFO webdriver: RESULT {
  'element-6066-11e4-a52e-4f735466cecf': 'f2e2804a-8812-42b6-9a88-31ae0aa290c2'
}
[0-0] 2020-08-04T04:59:28.686Z INFO webdriver: COMMAND executeScript(<fn>, <object>)
[0-0] 2020-08-04T04:59:28.692Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/execute/sync
[0-0] 2020-08-04T04:59:28.693Z INFO webdriver: DATA {
  script: 'return (function isElementDisplayed(element) {\n' +
    '  function nodeIsElement(node) {\n' +
    '    if (!node) {\n' +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    switch (node.nodeType) {\n' +
    '      case Node.ELEMENT_NODE:\n' +
    '      case Node.DOCUMENT_NODE:\n' +
    '      case Node.DOCUMENT_FRAGMENT_NODE:\n' +
    '        return true;\n' +
    '\n' +
    '      default:\n' +
    '        return false;\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  function parentElementForElement(element) {\n' +
    '    if (!element) {\n' +
    '      return null;\n' +
    '    }\n' +
    '\n' +
    '    return enclosingNodeOrSelfMatchingPredicate(element.parentNode, nodeIsElement);\n' +
    '  }\n' +
    '\n' +
    '  function enclosingNodeOrSelfMatchingPredicate(targetNode, predicate) {\n' +
    '    for (let node = targetNode; node && node !== targetNode.ownerDocument; node = node.parentNode) if (predicate(node)) {\n' +
    '      return node;\n' +
    '    }\n' +
    '\n' +
    '    return null;\n' +
    '  }\n' +
    '\n' +
    '  function enclosingElementOrSelfMatchingPredicate(targetElement, predicate) {\n' +
    '    for (let element = targetElement; element && element !== targetElement.ownerDocument; element = parentElementForElement(element)) if (predicate(element)) {\n' +
    '      return element;\n' +
    '    }\n' +
    '\n' +
    '    return null;\n' +
    '  }\n' +
    '\n' +
    '  function cascadedStylePropertyForElement(element, property) {\n' +
    '    if (!element || !property) {\n' +
    '      return null;\n' +
    '    }\n' +
    '\n' +
    '    if (element instanceof DocumentFragment) {\n' +
    '      element = element.host;\n' +
    '    }\n' +
    '\n' +
    '    let computedStyle = window.getComputedStyle(element);\n' +
    '    let computedStyleProperty = computedStyle.getPropertyValue(property);\n' +
    '\n' +
    "    if (computedStyleProperty && computedStyleProperty !== 'inherit') {\n" +
    '      return computedStyleProperty;\n' +
    '    }\n' +
    '\n' +
    '    let parentElement = parentElementForElement(element);\n' +
    '    return cascadedStylePropertyForElement(parentElement, property);\n' +
    '  }\n' +
    '\n' +
    '  function elementSubtreeHasNonZeroDimensions(element) {\n' +
    '    let boundingBox = element.getBoundingClientRect();\n' +
    '\n' +
    '    if (boundingBox.width > 0 && boundingBox.height > 0) {\n' +
    '      return true;\n' +
    '    }\n' +
    '\n' +
    "    if (element.tagName.toUpperCase() === 'PATH' && boundingBox.width + boundingBox.height > 0) {\n" +
    "      let strokeWidth = cascadedStylePropertyForElement(element, 'stroke-width');\n" +
    '      return !!strokeWidth && parseInt(strokeWidth, 10) > 0;\n' +
    '    }\n' +
    '\n' +
    "    let cascadedOverflow = cascadedStylePropertyForElement(element, 'overflow');\n" +
    '\n' +
    "    if (cascadedOverflow === 'hidden') {\n" +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    return Array.from(element.childNodes).some(childNode => {\n' +
    '      if (childNode.nodeType === Node.TEXT_NODE) {\n' +
    '        return true;\n' +
    '      }\n' +
    '\n' +
    '      if (nodeIsElement(childNode)) {\n' +
    '        return elementSubtreeHasNonZeroDimensions(childNode);\n' +
    '      }\n' +
    '\n' +
    '      return false;\n' +
    '    });\n' +
    '  }\n' +
    '\n' +
    '  function elementOverflowsContainer(element) {\n' +
    "    let cascadedOverflow = cascadedStylePropertyForElement(element, 'overflow');\n" +
    '\n' +
    "    if (cascadedOverflow !== 'hidden') {\n" +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    return true;\n' +
    '  }\n' +
    '\n' +
    '  function isElementSubtreeHiddenByOverflow(element) {\n' +
    '    if (!element) {\n' +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    if (!elementOverflowsContainer(element)) {\n' +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    if (!element.childNodes.length) {\n' +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    return Array.from(element.childNodes).every(childNode => {\n' +
    '      if (childNode.nodeType === Node.TEXT_NODE) {\n' +
    '        return false;\n' +
    '      }\n' +
    '\n' +
    '      if (!nodeIsElement(childNode)) {\n' +
    '        return true;\n' +
    '      }\n' +
    '\n' +
    '      if (!elementSubtreeHasNonZeroDimensions(childNode)) {\n' +
    '        return true;\n' +
    '      }\n' +
    '\n' +
    '      return isElementSubtreeHiddenByOverflow(childNode);\n' +
    '    });\n' +
    '  }\n' +
    '\n' +
    '  function isElementInsideShadowRoot(element) {\n' +
    '    if (!element) {\n' +
    '      return false;\n' +
    '    }\n' +
    '\n' +
    '    if (element.parentNode && element.parentNode.host) {\n' +
    '      return true;\n' +
    '    }\n' +
    '\n' +
    '    return isElementInsideShadowRoot(element.parentNode);\n' +
    '  }\n' +
    '\n' +
    '  if (!isElementInsideShadowRoot(element) && !document.contains(element)) {\n' +
    '    return false;\n' +
    '  }\n' +
    '\n' +
    '  switch (element.tagName.toUpperCase()) {\n' +
    "    case 'BODY':\n" +
    '      return true;\n' +
    '\n' +
    "    case 'SCRIPT':\n" +
    "    case 'NOSCRIPT':\n" +
    '      return false;\n' +
    '\n' +
    "    case 'OPTGROUP':\n" +
    "    case 'OPTION':\n" +
    '      {\n' +
    "        let enclosingSelectElement = enclosingNodeOrSelfMatchingPredicate(element, e => e.tagName.toUpperCase() === 'SELECT');\n" +
    '        return isElementDisplayed(enclosingSelectElement);\n' +
    '      }\n' +
    '\n' +
    "    case 'INPUT':\n" +
    "      if (element.type === 'hidden') {\n" +
    '        return false;\n' +
    '      }\n' +
    '\n' +
    '      break;\n' +
    '\n' +
    '    default:\n' +
    '      break;\n' +
    '  }\n' +
    '\n' +
    "  if (cascadedStylePropertyForElement(element, 'visibility') !== 'visible') {\n" +
    '    return false;\n' +
    '  }\n' +
    '\n' +
    '  let hasAncestorWithZeroOpacity = !!enclosingElementOrSelfMatchingPredicate(element, e => {\n' +
    "    return Number(cascadedStylePropertyForElement(e, 'opacity')) === 0;\n" +
    '  });\n' +
    '  let hasAncestorWithDisplayNone = !!enclosingElementOrSelfMatchingPredicate(element, e => {\n' +
    "    return cascadedStylePropertyForElement(e, 'display') === 'none';\n" +
    '  });\n' +
    '\n' +
    '  if (hasAncestorWithZeroOpacity || hasAncestorWithDisplayNone) {\n' +
    '    return false;\n' +
    '  }\n' +
    '\n' +
    '  if (!elementSubtreeHasNonZeroDimensions(element)) {\n' +
    '    return false;\n' +
    '  }\n' +
    '\n' +
    '  if (isElementSubtreeHiddenByOverflow(element)) {\n' +
    '    return false;\n' +
    '  }\n' +
    '\n' +
    '  return true;\n' +
    '}).apply(null, arguments)',
  args: [
    {
      'element-6066-11e4-a52e-4f735466cecf': 'f2e2804a-8812-42b6-9a88-31ae0aa290c2',
      ELEMENT: 'f2e2804a-8812-42b6-9a88-31ae0aa290c2'
    }
  ]
}
[0-0] 2020-08-04T04:59:28.712Z INFO webdriver: RESULT true
2020-08-04T04:59:28.714Z INFO webdriver: COMMAND findElement("xpath", "//span[@data-ng-click="restoreItem(item)"]")
2020-08-04T04:59:28.714Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:28.714Z INFO webdriver: DATA { using: 'xpath', value: '//span[@data-ng-click="restoreItem(item)"]' }
2020-08-04T04:59:28.736Z INFO webdriver: RESULT {
  'element-6066-11e4-a52e-4f735466cecf': 'f7e68619-ef75-4d4d-8122-e0eacc8a19ba'
}
2020-08-04T04:59:28.737Z INFO webdriver: COMMAND elementClick("f7e68619-ef75-4d4d-8122-e0eacc8a19ba")
2020-08-04T04:59:28.738Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element/f7e68619-ef75-4d4d-8122-e0eacc8a19ba/click    
[0-0] 2020-08-04T04:59:28.941Z INFO webdriver: COMMAND findElement("xpath", "//span[text()="Товар был удален из корзины"]")
[0-0] 2020-08-04T04:59:28.942Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:28.942Z INFO webdriver: DATA {
  using: 'xpath',
  value: '//span[text()="Товар был удален из корзины"]'
}
[0-0] 2020-08-04T04:59:29.011Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'no such element: Unable to locate element: {"method":"xpath","selector":"//span[text()="Товар был удален из корзины"]"}\n' +
    '  (Session info: chrome=84.0.4147.105)',
  stacktrace: 'Backtrace:\n' +
    '\tOrdinal0 [0x00A19563+2725219]\n' +
    '\tOrdinal0 [0x00918551+1672529]\n' +
    '\tOrdinal0 [0x00800359+525145]\n' +
    '\tOrdinal0 [0x00799755+104277]\n' +
    '\tOrdinal0 [0x007B53C0+218048]\n' +
    '\tOrdinal0 [0x007AAAD0+174800]\n' +
    '\tOrdinal0 [0x007B3D7C+212348]\n' +
    '\tOrdinal0 [0x007AA94B+174411]\n' +
    '\tOrdinal0 [0x00792528+75048]\n' +
    '\tOrdinal0 [0x007935A0+79264]\n' +
    '\tOrdinal0 [0x00793539+79161]\n' +
    '\tOrdinal0 [0x0092D607+1758727]\n' +
    '\tGetHandleVerifier [0x00B36546+1050150]\n' +
    '\tGetHandleVerifier [0x00B36291+1049457]\n' +
    '\tGetHandleVerifier [0x00B410D7+1094071]\n' +
    '\tGetHandleVerifier [0x00B36B46+1051686]\n' +
    '\tOrdinal0 [0x00925B06+1727238]\n' +
    '\tOrdinal0 [0x0092EB7B+1764219]\n' +
    '\tOrdinal0 [0x0092ECE3+1764579]\n' +
    '\tOrdinal0 [0x00944C05+1854469]\n' +
    '\tBaseThreadInitThunk [0x751A6359+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167C24+228]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167BF4+180]\n'
}
[0-0] 2020-08-04T04:59:29.013Z INFO webdriver: COMMAND findElement("xpath", "//span[text()="Товар был удален из корзины"]")
2020-08-04T04:59:29.013Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:29.013Z INFO webdriver: DATA {
  using: 'xpath',
  value: '//span[text()="Товар был удален из корзины"]'
}
[0-0] 2020-08-04T04:59:29.024Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'no such element: Unable to locate element: {"method":"xpath","selector":"//span[text()="Товар был удален из корзины"]"}\n' +
    '  (Session info: chrome=84.0.4147.105)',
  stacktrace: 'Backtrace:\n' +
    '\tOrdinal0 [0x00A19563+2725219]\n' +
    '\tOrdinal0 [0x00918551+1672529]\n' +
    '\tOrdinal0 [0x00800359+525145]\n' +
    '\tOrdinal0 [0x00799755+104277]\n' +
    '\tOrdinal0 [0x007B53C0+218048]\n' +
    '\tOrdinal0 [0x007AAAD0+174800]\n' +
    '\tOrdinal0 [0x007B3D7C+212348]\n' +
    '\tOrdinal0 [0x007AA94B+174411]\n' +
    '\tOrdinal0 [0x00792528+75048]\n' +
    '\tOrdinal0 [0x007935A0+79264]\n' +
    '\tOrdinal0 [0x00793539+79161]\n' +
    '\tOrdinal0 [0x0092D607+1758727]\n' +
    '\tGetHandleVerifier [0x00B36546+1050150]\n' +
    '\tGetHandleVerifier [0x00B36291+1049457]\n' +
    '\tGetHandleVerifier [0x00B410D7+1094071]\n' +
    '\tGetHandleVerifier [0x00B36B46+1051686]\n' +
    '\tOrdinal0 [0x00925B06+1727238]\n' +
    '\tOrdinal0 [0x0092EB7B+1764219]\n' +
    '\tOrdinal0 [0x0092ECE3+1764579]\n' +
    '\tOrdinal0 [0x00944C05+1854469]\n' +
    '\tBaseThreadInitThunk [0x751A6359+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167C24+228]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167BF4+180]\n'
}
[0-0] 2020-08-04T04:59:29.026Z INFO webdriver: COMMAND findElement("xpath", "//span[text()="Товар был удален из корзины"]")
2020-08-04T04:59:29.026Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:29.026Z INFO webdriver: DATA {
  using: 'xpath',
  value: '//span[text()="Товар был удален из корзины"]'
}
[0-0] 2020-08-04T04:59:29.040Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'no such element: Unable to locate element: {"method":"xpath","selector":"//span[text()="Товар был удален из корзины"]"}\n' +
    '  (Session info: chrome=84.0.4147.105)',
  stacktrace: 'Backtrace:\n' +
    '\tOrdinal0 [0x00A19563+2725219]\n' +
    '\tOrdinal0 [0x00918551+1672529]\n' +
    '\tOrdinal0 [0x00800359+525145]\n' +
    '\tOrdinal0 [0x00799755+104277]\n' +
    '\tOrdinal0 [0x007B53C0+218048]\n' +
    '\tOrdinal0 [0x007AAAD0+174800]\n' +
    '\tOrdinal0 [0x007B3D7C+212348]\n' +
    '\tOrdinal0 [0x007AA94B+174411]\n' +
    '\tOrdinal0 [0x00792528+75048]\n' +
    '\tOrdinal0 [0x007935A0+79264]\n' +
    '\tOrdinal0 [0x00793539+79161]\n' +
    '\tOrdinal0 [0x0092D607+1758727]\n' +
    '\tGetHandleVerifier [0x00B36546+1050150]\n' +
    '\tGetHandleVerifier [0x00B36291+1049457]\n' +
    '\tGetHandleVerifier [0x00B410D7+1094071]\n' +
    '\tGetHandleVerifier [0x00B36B46+1051686]\n' +
    '\tOrdinal0 [0x00925B06+1727238]\n' +
    '\tOrdinal0 [0x0092EB7B+1764219]\n' +
    '\tOrdinal0 [0x0092ECE3+1764579]\n' +
    '\tOrdinal0 [0x00944C05+1854469]\n' +
    '\tBaseThreadInitThunk [0x751A6359+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167C24+228]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167BF4+180]\n'
}
[0-0] 2020-08-04T04:59:29.041Z INFO webdriver: COMMAND findElement("xpath", "//span[text()="Товар был удален из корзины"]")
2020-08-04T04:59:29.041Z INFO webdriver: [POST] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26/element
2020-08-04T04:59:29.041Z INFO webdriver: DATA {
  using: 'xpath',
  value: '//span[text()="Товар был удален из корзины"]'
}
[0-0] 2020-08-04T04:59:29.050Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'no such element: Unable to locate element: {"method":"xpath","selector":"//span[text()="Товар был удален из корзины"]"}\n' +
    '  (Session info: chrome=84.0.4147.105)',
  stacktrace: 'Backtrace:\n' +
    '\tOrdinal0 [0x00A19563+2725219]\n' +
    '\tOrdinal0 [0x00918551+1672529]\n' +
    '\tOrdinal0 [0x00800359+525145]\n' +
    '\tOrdinal0 [0x00799755+104277]\n' +
    '\tOrdinal0 [0x007B53C0+218048]\n' +
    '\tOrdinal0 [0x007AAAD0+174800]\n' +
    '\tOrdinal0 [0x007B3D7C+212348]\n' +
    '\tOrdinal0 [0x007AA94B+174411]\n' +
    '\tOrdinal0 [0x00792528+75048]\n' +
    '\tOrdinal0 [0x007935A0+79264]\n' +
    '\tOrdinal0 [0x00793539+79161]\n' +
    '\tOrdinal0 [0x0092D607+1758727]\n' +
    '\tGetHandleVerifier [0x00B36546+1050150]\n' +
    '\tGetHandleVerifier [0x00B36291+1049457]\n' +
    '\tGetHandleVerifier [0x00B410D7+1094071]\n' +
    '\tGetHandleVerifier [0x00B36B46+1051686]\n' +
    '\tOrdinal0 [0x00925B06+1727238]\n' +
    '\tOrdinal0 [0x0092EB7B+1764219]\n' +
    '\tOrdinal0 [0x0092ECE3+1764579]\n' +
    '\tOrdinal0 [0x00944C05+1854469]\n' +
    '\tBaseThreadInitThunk [0x751A6359+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167C24+228]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77167BF4+180]\n'
}
[0-0] 2020-08-04T04:59:29.063Z INFO webdriver: COMMAND deleteSession()
[0-0] 2020-08-04T04:59:29.063Z INFO webdriver: [DELETE] http://127.0.0.1:4444/session/854ae5c2c5e08a8edf0f3bffe06fdd26
[0-0] PASSED in chrome - E:\Mega\WEB MASTER\BeeInterns\1 Beeinterns\lesson_05\beeinterns\beeinterns\beeinterns-HW5\tests\removeRestore.test.js
2020-08-04T04:59:29.235Z INFO @wdio/cli:launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[chrome 84.0.4147.105 windows #0-0] Spec: E:\Mega\WEB MASTER\BeeInterns\1 Beeinterns\lesson_05\beeinterns\beeinterns\beeinterns-HW5\tests\removeRestore.test.js      
[chrome 84.0.4147.105 windows #0-0] Running: chrome (v84.0.4147.105) on windows
[chrome 84.0.4147.105 windows #0-0] Session ID: 854ae5c2c5e08a8edf0f3bffe06fdd26
[chrome 84.0.4147.105 windows #0-0]
[chrome 84.0.4147.105 windows #0-0] Удаление товара и его восстановление
[chrome 84.0.4147.105 windows #0-0]    ✓ Перейти на главную страницу
[chrome 84.0.4147.105 windows #0-0]    ✓ Нажать на вкладку Телефоны
[chrome 84.0.4147.105 windows #0-0]    ✓ Добавляем товар из середины списка в корзину
[chrome 84.0.4147.105 windows #0-0]    ✓ Нажать на “крестик” рядом с выбранным ранее товаром
[chrome 84.0.4147.105 windows #0-0]    ✓ Нажать на “Восстановить”
[chrome 84.0.4147.105 windows #0-0]
[chrome 84.0.4147.105 windows #0-0] 5 passing (8.8s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:11

2020-08-04T04:59:29.252Z INFO @wdio/local-runner: Shutting down spawned worker
2020-08-04T04:59:29.503Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2020-08-04T04:59:29.504Z INFO @wdio/local-runner: shutting down
```

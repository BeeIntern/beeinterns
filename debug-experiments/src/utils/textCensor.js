import badWordsRegexp from 'badwords/regexp';

export const clearText = (text) => (
  text.replace(badWordsRegexp, (word) =>
    '*'.repeat(word.length)
  )
);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export
// убрал скобки {}
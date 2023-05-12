/* exported titleCase */
function titleCase(title) {
  const splitTitle = title.split(' ');
  const apaArray = [];
  const minorArray = [
    'and',
    'nor',
    'or',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  let subTitleFound = false;
  for (let i = 0; i < splitTitle.length; i++) {
    let currWord = splitTitle[i].toLowerCase();
    let newWord = currWord;

    if (currWord[currWord.length - 1] === ':') {
      // if after this word is a subtitle
      subTitleFound = true;
      currWord = currWord.slice(0, -1);
    }

    if (currWord === 'javascript') newWord = 'JavaScript'; // hardcoded
    else if (currWord === 'api') newWord = 'API'; // hardcoded
    else {
      if (!minorArray.includes(currWord)) {
        // if the word is not one of our minor words
        newWord = currWord[0].toUpperCase() + currWord.slice(1).toLowerCase();
      } else if (subTitleFound || i === 0) {
        // or if this is a word beginning a subtitle/at the start of the title
        newWord = currWord[0].toUpperCase() + currWord.slice(1).toLowerCase();
        subTitleFound = false;
      }
    }

    if (currWord.split('-').length > 1) {
      // for words with a dash
      const testWord = currWord.split('-');
      for (let j = 0; j < testWord.length; j++) {
        testWord[j] =
          testWord[j][0].toUpperCase() + testWord[j].slice(1).toLowerCase();
      }
      let holdWord = '';
      for (let j = 0; j < testWord.length; j++) {
        holdWord += testWord[j] + '-';
      }
      newWord = holdWord.slice(0, -1);
    }

    if (subTitleFound) newWord += ':';
    apaArray.push(newWord);
  }
  return apaArray.join(' ');
}

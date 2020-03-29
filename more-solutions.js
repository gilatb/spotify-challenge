
function removeLeastUsedCharacters1 (text) {
  if (text.length <= 50) return [];
  const answer = new Set();
  const dict = new Map();

  let maxNumOfCharsToRemove = text.length - 50;

  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    if (dict.has(letter)) {
      let previousValue = dict.get(letter);
      dict.set(letter, previousValue + 1);
    }
    else dict.set(letter, 1);
  }

  const sortedDict = new Map([...dict.entries()].sort((a, b) => a[1] - b[1]));
  const sortedArr = [...sortedDict];

  let i = 0;
  while (maxNumOfCharsToRemove > 0 && i < sortedArr.length) {
    let charToRemove = sortedArr[i][0];
    let numOfCharInText = sortedArr[i][1]

    if (maxNumOfCharsToRemove < numOfCharInText) return answer;

    let re = new RegExp(charToRemove, "gi");
    text = text.replace(re, '');
    answer.add(charToRemove)
    maxNumOfCharsToRemove = maxNumOfCharsToRemove - numOfCharInText;
    i++
  }
  return answer;
}

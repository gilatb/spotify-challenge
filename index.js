
function removeLeastUsedCharacters (text) {
  const dict = new Map();
  const answer = new Set();
  const mostlyUsedChars = new Set()

  if (text.length <= 50) return answer;

  // populating the dict with num of appearances in the text
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (dict.has(char)) {
      let previousValue = dict.get(char);
      dict.set(char, previousValue + 1);
    }
    else dict.set(char, 1);
  }

  const sortedDict = new Map([...dict.entries()].sort((a, b) => a[1] - b[1]));
  const sortedArr = [...sortedDict];
  
  let counter = 0;
  let i = sortedDict.size - 1;

  while (counter < 50) {
    if (i < 0) return;
    let currentChar = sortedArr[i][0];
    let numOfApearances = sortedArr[i][1];

    mostlyUsedChars.add(currentChar);
    counter += numOfApearances;
    i--;
  }

  sortedDict.forEach((value, key) => {
    if (!mostlyUsedChars.has(key)) answer.add(key);
  })

  return answer;
}


module.exports = removeLeastUsedCharacters;

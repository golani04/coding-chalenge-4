const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) return;

  data = data.trim().split('\n');
  const notAllowedCombinations = ['ab', 'cd', 'pq', 'xy'];
  let count = 0
  const totalStrings = data.reduce((total, str) => {
    const vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    let doublePair = false;
    for (let i = 0, len = str.length; i < len; i++) {
      let pair = `${str[i]}${str[i+1]}`;
      if (notAllowedCombinations.indexOf(pair) > -1) {
        doublePair = false;
        break;
      }

      doublePair = doublePair || str[i] === str[i+1];
      if (vowels.hasOwnProperty(str[i])) {
        vowels[str[i]] += 1;
      }
    }

    let sum = Object.values(vowels).reduce((sum, num) => sum + num, 0);
    return (doublePair && sum >= 3) ? total + 1 : total;
  }, 0);

  console.log(totalStrings);
});

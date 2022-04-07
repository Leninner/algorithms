/**
 * @param {string} s - An string
 * @returns {string} - The maximum substring with non-repeated letters
 */

const maxSubstring = (s: string): string => {
  let results: string[] = [];
  let temporalString = '';

  for (let i = 0; i < s.length; i++) {
    if (!temporalString.includes(s[i])) {
      temporalString += s[i];
      continue;
    }

    results.push(temporalString);
    s = s.slice(s.indexOf(s[i]) + 1);
    i = -1;
    temporalString = '';
  }

  results.push(temporalString);

  let max = 0;

  results.forEach((value) => {
    if (value.length > max) {
      max = value.length;
    }
  });

  return results.find((value) => value.length === max)?.toString() || '';
};

console.log(maxSubstring('aaabccc'));
console.log(maxSubstring('efgabzafklmneaklj'));
console.log(maxSubstring('leninner'));
console.log(maxSubstring('DayanaCandilejo'));

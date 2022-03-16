/**
 * This function reduce the string to the minimum number of single characters
 * @param {string} s - string to reduce
 * @returns {string} - reduced string
 * @link https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
 */

const superReducedString = (s: string): any => {
  // Write your code here

  let objResult: { [key: string]: number } = {};

  s.split('').forEach((letter) => {
    objResult[letter] = (objResult[letter] || 0) + 1;
  });

  console.log(objResult);

  return Object.entries(objResult).reduce((acc: string, [key, value]): string => {
    if (value > 1) {
      value -= 2;

      if (value > 0) {
        acc += key;
      }
    } else {
      acc += key;
    }

    return acc.length === 0 ? 'Empty String' : acc;
  }, '');
};

console.log(
  superReducedString(
    'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'
  )
); //tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh

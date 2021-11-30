/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
 */

function superReducedString(s) {
  if (s === '') return 'Empty String';
  // Write your code here
  let main = {};

  s.split('').forEach((element) => {
    if (main[element]) {
      main[element]++;
    } else {
      main[element] = 1;
    }
  });

  let result = {};

  Object.entries(main)
    .filter((value) => {
      return value[1] % 2 !== 0;
    })
    .forEach((value) => {
      result[value[0]] = value[0];
    });

  return Object.values(result).join('').length === 0 ? 'Empty String' : Object.values(result).join('');
}

console.log(
  superReducedString(
    'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'
  )
); // abd

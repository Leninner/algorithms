/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
 */

// function superReducedString(s) {
//   if (s === '') return 'Empty String';
//   // Write your code here
//   let main = {};

//   s.split('').forEach((element) => {
//     if (main[element]) {
//       main[element]++;
//     } else {
//       main[element] = 1;
//     }
//   });

//   let result = {};

//   Object.entries(main)
//     .filter((value) => {
//       return value[1] % 2 !== 0;
//     })
//     .forEach((value) => {
//       result[value[0]] = value[0];
//     });

//   return Object.values(result).join('').length === 0 ? 'Empty String' : Object.values(result).join('');
// }

// const superReducedString = (s) => {
//   if (s === '') return 'Empty String';

//   let result = {};

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in result) {
//       result[s[i]] += s[i];
//     } else {
//       result[s[i]] = s[i];
//     }
//   }

//   console.log(result);

//   return Object.entries(result).reduce((acc, [key, value]) => {
//     if (value.length % 2 === 0) {
//       acc += key;
//     }

//     return acc;
//   }, '');
// };

const superReducedString = (s) => {
  if (s === '') return 'Empty String'
  const results = []

  for (let i = 0; i < s.length; i++) {
    if (results[results.length - 1] === s[i]) {
      results.splice(results.length - 1, 1)
      continue
    }

    results.push(s[i])
  }

  return results.join('')
}

console.log(
  superReducedString(
    'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'
  )
) // tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh
// tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh

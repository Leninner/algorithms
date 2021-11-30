/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER with the number of word in the function.
 * The function accepts STRING s as parameter.
 */

const isWithinUpperCaseLetters = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
};

const camelcase = (s) => {
  return s.split('').filter(isWithinUpperCaseLetters).length + 1;
};

export default camelcase;

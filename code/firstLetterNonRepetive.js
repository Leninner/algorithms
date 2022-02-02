// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript

const firstNonRepeatingLetter = (s) => {
  const arrayAux = s.toLowerCase().split('');

  const solution = arrayAux.indexOf(arrayAux.find((value) => arrayAux.indexOf(value) === arrayAux.lastIndexOf(value)));

  return s.length < 2 ? s : s[solution] || '';
};

console.log(firstNonRepeatingLetter('sTreSS'));

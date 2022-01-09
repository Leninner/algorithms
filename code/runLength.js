export const runLength = (str) => {
  let contAndLetters = [];
  let cont = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cont++;
    } else {
      contAndLetters.push([cont, str[i]]);
      cont = 1;
    }
  }

  return contAndLetters.flat().join('');
};

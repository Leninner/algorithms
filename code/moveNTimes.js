export const moveNTimes = (letter, n) => {
  const charLetter = letter.charCodeAt(0);

  if (charLetter + n < 97) {
    return String.fromCharCode(charLetter + n + 26);
  } else if (charLetter + n > 122) {
    return String.fromCharCode(charLetter + n - 26);
  }

  return String.fromCharCode(letter.charCodeAt(0) + n);
};

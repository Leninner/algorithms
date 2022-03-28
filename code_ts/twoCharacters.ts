/**
 *
 * @param {string} s - the string to be checked
 * @returns {number} the length of the longest substring without repeating characters
 */

const alternate = (s: string): number => {
  const letters = Array.from(new Set(s));
  let combinations = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 1; j < letters.length; j++) {
      const regex = new RegExp('[' + letters[i] + '|' + letters[j] + ']', 'g');

      combinations.push(s.match(regex)?.join('') || '');
    }
  }

  const finalResult = combinations
    .filter((value) => !value.split('').find((letter, index) => letter === value.split('')[index + 1]))
    .map((value) => value.length);

  return finalResult.length ? Math.max(...finalResult) : 0;
};

console.log(alternate('asdcbsdcagfsdbgdfanfghbsfdab')); // 8

export const strangeScore = (ops) => {
  let result = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      result.push(result[result.length - 2] + result[result.length - 1]);
    } else if (ops[i] === 'D') {
      result.push(result[result.length - 1] * 2);
    } else if (ops[i] === 'C') {
      result.pop();
    } else {
      result.push(parseInt(ops[i]));
    }
  }

  return result.reduce((acc, curr) => acc + curr);
};

export const comprobateBrackets = (str) => {
  if (str.length % 2 !== 0) return false;

  const array = str.split('');
  let stack = [array[0]];
  let isCorrect = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === '(' || array[i] === '[' || array[i] === '{') {
      stack.push(array[i]);
    } else if (
      (stack[stack.length - 1] === '(' && array[i] === ')') ||
      (stack[stack.length - 1] === '[' && array[i] === ']') ||
      (stack[stack.length - 1] === '{' && array[i] === '}')
    ) {
      stack.pop();
    } else if (stack.length === 0) {
      if (i !== array.length - 1) {
        isCorrect = false;
      }
    } else {
      isCorrect = false;
    }
  }

  return isCorrect;
};

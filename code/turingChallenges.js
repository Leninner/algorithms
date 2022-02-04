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
  let stack = [];
  let isCorrect = true;

  for (let i = 0; i < array.length; i++) {
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
      break;
    }
  }

  return isCorrect;
};

export const moveNPositionClockwise = (k, nums) => {
  const portion = nums.splice(-k);
  return [...portion, ...nums];
};

export const moveNPositionCounterClockwise = (k, nums) => {
  const portion = nums.splice(0, k);
  return nums.concat(portion);
};

const sumLeftLeavesInABinaryTree = (root) => {
  if (!root) return 0;

  let sum = 0;

  const traverse = (node) => {
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return sum;
};

console.log(
  sumLeftLeavesInABinaryTree({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  })
);

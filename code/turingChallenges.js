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

  const bracketsPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < array.length; i++) {
    if (bracketsPairs[array[i]]) {
      stack.push(array[i]);
    } else if (bracketsPairs[stack[stack.length - 1]] === array[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
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

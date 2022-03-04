function largestOfFour(arr: number[][]): number[] {
  return arr.map((x) => Math.max(...x));
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function titleCase(str: String) {
  return str
    .toLowerCase()
    .split(' ')
    .map((value) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`)
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1: number[], arr2: number[], n: number) {
  let newArr = [...arr2];
  const firstElement = newArr.splice(n - 1, 1);
  const array = [...arr1, ...newArr];
  array.sort((a, b) => a - b);
  array.unshift(...firstElement);
  return array.flat();
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr: any[]) {
  return arr.filter((value) => Boolean(value));
}

console.log(bouncer([7, 'ate', '', false, 9]));

function getIndexToIns(arr: number[], num: number) {
  const orderedArr = arr.sort((a, b) => a - b);
  let currentIndex = orderedArr.length;

  for (let i = 0; i < orderedArr.length; i++) {
    if (num <= orderedArr[i]) {
      currentIndex = i;
      break;
    }
  }

  return currentIndex;
}

console.log(getIndexToIns([2, 5, 10], 15));

function mutation(arr: string[]) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every((letter) => arr[0].toLowerCase().includes(letter));
}

mutation(['hello', 'hey']);

function chunkArrayInGroups(arr: any[], size: number) {
  let newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }

  return newArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));

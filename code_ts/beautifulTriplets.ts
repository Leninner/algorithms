function beautifulTriplets(d: number, arr: number[]): number {
  // Write your code here
  let cont = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[j] - arr[i] === d && arr[k] - arr[j] === d) {
          cont++;
        }
      }
    }
  }

  return cont;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // 3

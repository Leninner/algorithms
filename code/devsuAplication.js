const doSome = (x) => {
  //2, 4, 7, 28, 33, 198, ...
  let current = 2;
  //*2 + 3

  let multiplicador = 2,
    sumador = 3;
  for (let i = 1; i < x; i++) {
    if (i % 2 === 0) {
      current += sumador;
      sumador += 2;
    } else {
      current *= multiplicador;
      multiplicador += 2;
    }
  }

  return current;
};

console.log(doSome(18));
798441426;
console.log(doSome(21));
15968828921;

function maxSubarrayProduct(arr) {
  let result = [];
  let suma = 1;
  let resta = 0;

  for (let i = 0; i < arr.length; i++) {
    suma = 1;
    resta = 0;
    for (let y = i + 1; y < arr.length; y++) {
      suma *= arr[y];
      resta += arr[y];
    }
    result.push({ multi: suma.toFixed(1), resta: resta.toFixed(1) });
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    suma = 1;
    resta = 0;
    for (let y = i; y >= 0; y--) {
      suma *= arr[y];
      resta += arr[y];
    }
    result.push({ multi: suma.toFixed(1), resta: resta.toFixed(1) });
  }
  return result;
}

console.table(maxSubarrayProduct([-3.2, 4.2, 7.0, 5.4, -2.2, -2.5], 6)); //11.2
console.table(maxSubarrayProduct([1.1, -5.7, 4.0, 9.3, -5.7, 9.9, -1.4, 9.1, 2.0, -5.0, -9.0, 1.0]));

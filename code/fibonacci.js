// calcular  la serie de fibonaacci  e ir imprimiéndola en la pantalla

const fibonacci = (n) => {
  let a = 1,
    b = 0,
    curr = 0;

  let i = 0;
  while (i < n) {
    curr = a + b;
    console.log(curr);
    a = b;
    b = curr;
    i++;
  }
};

// calcular la serie de  fibonacci e ir almacenando  los resultados en un arreglo

export const fibonacciInArray = (n) => {
  let array = [];
  let a = 1,
    b = 0,
    curr = 0;

  while (array.length < n) {
    curr = a + b;
    array.push(curr);
    a = b;
    b = curr;
  }

  return array;
};

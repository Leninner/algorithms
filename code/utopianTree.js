//La clave es entender el número de ciclo: Si es par, entonces dobla el tamaño, si es impar entonces solo suma 1
//https://www.hackerrank.com/challenges/utopian-tree/problem

const utopianTree = (n) => {
  let tamaño = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      tamaño *= 2;
    } else {
      tamaño++;
    }
  }

  return tamaño;
};

utopianTree(0);
utopianTree(1);
utopianTree(2);
utopianTree(7);
utopianTree(4);

export { utopianTree };

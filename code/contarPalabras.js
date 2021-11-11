// Programa que recopila la cantidad de palabras de un string.

const normalizar = (word) => {
  return word.toLowerCase().replace(/[.|,|;]/g, '');
};

const contarPalabras = (string) => {
  let vocales = {};
  let arrPalabras = string.split(' ');

  arrPalabras.forEach((element) => {
    if (normalizar(element) in vocales) {
      vocales[normalizar(element)]++;
    } else {
      vocales[normalizar(element)] = 1;
    }
  });

  console.table(vocales);
};

contarPalabras('Lenin, estás re pro, bett, lenin, marquitos, ala ala lus luz, estas');

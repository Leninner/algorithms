// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortText = (cadena, numberOfCharacters) => {
  if (numberOfCharacters < 0 || typeof numberOfCharacters !== "number") {
    return false;
  } else {
    return typeof cadena === "string" ? cadena.slice(0, numberOfCharacters) : false;
  }
};

export { recortText };

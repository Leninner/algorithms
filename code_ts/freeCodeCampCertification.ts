// NOTE: Palindrome Checker

const plainStr = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

function palindrome(str: string): boolean {
  return plainStr(str).split('').reverse().join('') === plainStr(str).split('').join('');
}

// console.log(palindrome('eye'));
// console.log(palindrome('race CAR'));
// console.log(palindrome('1 eye for of 1 eye.'));
// console.log(palindrome('My age is 0, 0 si ega ym.'));

// NOTE: Roman Numeral Converter

/**
 * Cuando un símbolo aparece después de uno mayor  o igual, se añaden
 * Cuando un símbolo aparece antes de uno mayor, se resta el mayor - el menor
 * No se puede usar el símbolo más de 3 veces
 */

// Roman Numeral Converter

/**
 * Cuando un símbolo aparece después de uno mayor  o igual, se añaden
 * Cuando un símbolo aparece antes de uno mayor, se resta el mayor - el menor
 * No se puede usar el símbolo más de 3 veces
 */
const getDescomposedNumber = (number: number) => {
  const descomposeNumber = [];
  let numberSize = number.toString().length;
  let divisor = Math.pow(10, numberSize - 1);
  let aux = 0;

  while (number) {
    aux = Math.floor(number / divisor) * divisor;
    descomposeNumber.push(aux);
    number = number % divisor;
    numberSize = number.toString().length;
    divisor = Math.pow(10, numberSize - 1);
  }

  return descomposeNumber;
};

function convertToRoman(num: number) {
  const ROMAN_NUMBERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let posibleWays: any = [];

  const numberDescomposed = getDescomposedNumber(num);
  const romanNumbers = Object.entries(ROMAN_NUMBERS);

  const array = [1, 2, 3];

  numberDescomposed.forEach((number) => {
    for (let i = 0; i < romanNumbers.length; i++) {
      const [key, value] = romanNumbers[i];

      if (number / value <= 3 && (number / value) % 1 === 0) {
        posibleWays.push([key.repeat(number / value)]);
        break;
      }

      const upper500 = (number % value) / Math.pow(10, number.toString().length - 1);

      if (array.includes(upper500)) {
        posibleWays.push([key + romanNumbers[i - 1][0].repeat(upper500)]);
        break;
      }

      const l = [4, 40, 400];

      if (number % value === number) {
        if (l.includes(number)) {
          posibleWays.push([romanNumbers[i - 1][0] + key]);
        } else {
          posibleWays.push([romanNumbers[i - 2][0] + key]);
        }

        break;
      }
    }
  });

  // A partir de aquí, estamos comprobando que no se hayan repetido valores como VV, LL, DD. Caso contrario, vamos a intercambiarlo por el inmediato superior, por ejemplo, VV por L, LL por C, DD por M.
  let result = posibleWays.flat().join('').split('');

  const posibles: any = {
    V: 'X',
    L: 'C',
    D: 'M',
  };

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1] && result[i] in posibles) {
      result[i] = posibles[result[i]];
      result.splice(i + 1, 1);
    }
  }

  return result.join('');
}

// console.log(convertToRoman(99));

// NOTE: Caesars Cipher

// La función debe aceptar signos de puntuación y espacios y no borrarlos durante la ejecución del programa
// Todos los inputs van a ser strings y si son letras, van a ser Mayúsculas
// Ascii Range A-Z: 65-90

function rot13(str: string) {
  const codesFromStr = str.split('').map((value) => {
    return value.charCodeAt(0);
  });

  return codesFromStr
    .map((value: number) => {
      if (value >= 65 && value <= 90) {
        if (value - 13 <= 64) {
          value = 90 - (64 - (value - 13));
        } else {
          value -= 13;
        }

        return String.fromCharCode(value);
      }

      return String.fromCharCode(value);
    })
    .join('');
}

// console.log(rot13('SERR PBQR PNZC.'));

// NOTE: Telephone Number Validator

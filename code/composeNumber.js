const composeNumber = (number) => {
  let result = '';
  let newNumber = number;
  let numberSize = newNumber.toString().length;
  let divisor = Math.pow(10, numberSize - 1);

  result += ` ${parseInt(newNumber / divisor) * divisor}`;

  while (divisor >= 10) {
    newNumber = newNumber % divisor;
    numberSize--;
    divisor = Math.pow(10, numberSize - 1);
    result += parseInt(newNumber / divisor) * divisor;
  }

  return result;
};

console.log(composeNumber(12345));
console.log(composeNumber(4500045));

const composeNumber2 = (number) => {
  let result = '';
  let arrayOfNumbers = number.toString().split('');
  let numberSize;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    numberSize = arrayOfNumbers.length - i;

    if (parseInt(arrayOfNumbers[i]) !== 0) {
      result += ` ${arrayOfNumbers[i]}`;

      while (numberSize > 1) {
        result += '0';
        numberSize--;
      }
    }
  }

  return result;
};

console.log(composeNumber2(12345));
console.log(composeNumber2(1234567));
console.log(composeNumber2(4500045));

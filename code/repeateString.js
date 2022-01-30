const repeatString = (number, string) => {
  let result = '';
  for (let i = 0; i < number; i++) {
    result += string;
  }

  return result;
};

console.log(repeatString(4, 'Hello '));

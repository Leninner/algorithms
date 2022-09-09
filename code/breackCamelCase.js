const breackCamelCase = camelCase => {
  return camelCase
    .split('')
    .reduce((acc, curr) => (curr.match(new RegExp(/[A-Z0-9]/)) ? (acc += ' ' + curr) : (acc += curr)), '')
}

console.log(breackCamelCase('helloWorld')) // 'hello World'
console.log(breackCamelCase('breakCamelCase')) // 'break Camel Case'

const breackCamelCase = (camelCase) =>
  camelCase
    .split('')
    .reduce(
      (acc, curr) =>
        curr.match(new RegExp(/[A-Z0-9]/))
          ? (acc += ` ${curr}`)
          : (acc += curr),
      ''
    )

breackCamelCase('helloWorld') // 'hello World'
breackCamelCase('breakCamelCase') // 'break Camel Case'

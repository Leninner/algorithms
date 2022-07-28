function isValid(brackets: string): boolean {
  let stack: string[] = []

  for (let bracket of brackets) {
    if (stack.length && isClosing(stack[stack.length - 1], bracket)) stack.pop()
    else stack.push(bracket)
  }

  return !stack.length
}

function isClosing(open: String, close: String) {
  return (open === '(' && close === ')') || (open === '{' && close === '}') || (open === '[' && close === ']')
}

console.log(isValid('(')) // false
console.log(isValid('())')) // false
console.log(isValid('((({{{}}})))')) // true
console.log(isValid('((({}})))()()')) // false
console.log(isValid('())({}}{()][][')) //false

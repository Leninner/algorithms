const isValid = (brackets: string): boolean => {
  const stack: string[] = []

  for (const bracket of brackets) {
    if (stack.length && isClosing(stack[stack.length - 1], bracket)) stack.pop()
    else stack.push(bracket)
  }

  return !stack.length
}

const isClosing = (open: string, close: string) =>
  (open === '(' && close === ')') ||
  (open === '{' && close === '}') ||
  (open === '[' && close === ']')

console.log(isValid('(')) // false
console.log(isValid('())')) // false
console.log(isValid('((({{{}}})))')) // true
console.log(isValid('((({}})))()()')) // false
console.log(isValid('())({}}{()][][')) // false

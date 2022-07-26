function isValid(s: string): boolean {
  const brackets: any = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  if (Object.values(brackets).includes(s[0]) || s.length % 2) return false

  let stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) stack.push(s[i])
    else if (brackets[stack[stack.length - 1]] === s[i]) stack.pop()
    else return false
  }

  return true
}

console.log(isValid('(')) // false
console.log(isValid('())')) // false
console.log(isValid('((({{{}}})))')) // true
console.log(isValid('((({}})))()()')) // false

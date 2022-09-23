// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

const zero = (fn?: () => any) => (!fn ? () => 0 : fn(() => 0))
const one = (fn?: () => any) => (!fn ? () => 1 : fn(() => 1))
const two = (fn?: () => any) => (!fn ? () => 2 : fn(() => 2))
const three = (fn?: () => any) => (!fn ? () => 3 : fn(() => 3))
const four = (fn?: () => any) => (!fn ? () => 4 : fn(() => 4))
const five = (fn?: () => any) => (!fn ? () => 5 : fn(() => 5))
const six = (fn?: () => any) => (!fn ? () => 6 : fn(() => 6))
const seven = (fn?: () => any) => (!fn ? () => 7 : fn(() => 7))
const eight = (fn?: () => any) => (!fn ? () => 8 : fn(() => 8))
const nine = (fn?: () => any) => (!fn ? () => 9 : fn(() => 9))

const plus = (a: () => any) => (b: () => any) => b() + a()
const minus = (a: () => any) => (b: () => any) => b() - a()
const times = (a: () => any) => (b: () => any) => b() * a()
const dividedBy = (a: () => any) => (b: () => any) => Math.floor(b() / a())

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))

// https://apuntes.de/typescript/parametros-opcionales/#gsc.tab=0

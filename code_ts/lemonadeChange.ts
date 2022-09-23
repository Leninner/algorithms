/**
 *
 * @param bills - An array of integers representing the amount of money paid (5, 10, 20)
 * @returns - True if the amount of money paid is enough to buy lemonade, false otherwise
 * @link https://leetcode.com/problems/lemonade-change/
 */

const lemonadeChange = (bills: number[]): boolean => {
  if (bills[0] > 5) return false

  const payments = []

  for (let i = 0; i < bills.length; i++) {
    payments.push(bills[i])

    if (bills[i] === 10) {
      if (payments.indexOf(5) > -1) {
        payments.splice(payments.indexOf(5), 1)
      } else {
        return false
      }
    }

    if (bills[i] === 20) {
      if (payments.indexOf(10) > -1) {
        payments.splice(payments.indexOf(10), 1)

        if (payments.indexOf(5) > -1) {
          payments.splice(payments.indexOf(5), 1)
        } else {
          return false
        }
      } else if (payments.indexOf(5) === payments.lastIndexOf(5)) {
        return false
      } else {
        if (payments.reduce((a, b) => (b === 5 ? a + b : a), 0) < 15) {
          return false
        } else {
          payments.splice(payments.indexOf(5), 1)
          payments.splice(payments.indexOf(5), 1)
          payments.splice(payments.indexOf(5), 1)
        }
      }
    }
  }

  return true
}

console.log(lemonadeChange([5, 5, 5, 10, 20])) // true
console.log(lemonadeChange([5, 5, 10, 10, 20])) // false
console.log(lemonadeChange([5, 5, 5, 20, 20, 20, 20, 20, 20, 20])) // false
console.log(lemonadeChange([5, 10, 5, 10, 5, 10, 5])) // true
console.log(lemonadeChange([20, 20, 20, 20])) // false
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5])) // false
console.log(
  lemonadeChange([
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20,
    5, 10, 5, 20,
  ])
) // true
console.log(lemonadeChange([5, 5, 20, 5, 5, 10, 5, 10, 5, 20])) // false

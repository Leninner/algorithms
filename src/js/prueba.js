// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Price: Costo de la compra
// Cash: Dinero recibido de parte del usuario como pago
// CID: Resumen de la caja registradora

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit|	Amount
// Penny	$0.01 |(PENNY)
// Nickel	$0.05 |(NICKEL)
// Dime	$0.1 |(DIME)
// Quarter	$0.25 |(QUARTER)
// Dollar	$1 |(ONE)
// Five Dollars	$5 |(FIVE)
// Ten Dollars	$10 |(TEN)
// Twenty Dollars	$20 |(TWENTY)
// One-hundred Dollars	$100 |(ONE HUNDRED)

const checkCashRegister = (price, cash, cid) => {
  let change = cash - price
  const aux = change

  const validate = cid.reduce((acc, [, value]) => acc + value, 0)

  if (validate < aux) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }

  if (validate === aux) {
    return { status: 'CLOSED', change: [...cid] }
  }

  const currencyUnit = {
    ONE_HUNDRED: 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  }

  const result = []

  while (change > 1) {
    for (let i = cid.length - 1; i >= 0; i--) {
      if (currencyUnit[cid[i][0]] <= change && cid[i][1] > 0) {
        change = parseFloat((change - currencyUnit[cid[i][0]]).toFixed(2))
        cid[i][1] -= currencyUnit[cid[i][0]]
        result.push([cid[i][0], currencyUnit[cid[i][0]]])
        break
      }
    }
  }

  const dollars = { QUARTER: 0.25, DIME: 0.1, NICKEL: 0.05, PENNY: 0.01 }

  if (
    cid[3][1] + cid[2][1] + cid[1][1] + cid[0][1] < aux &&
    result.length === 0
  ) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }
  while (change) {
    for (let i = 3; i >= 0; i--) {
      if (dollars[cid[i][0]] <= change && cid[i][1]) {
        change = parseFloat((change - dollars[cid[i][0]]).toFixed(2))
        cid[i][1] -= dollars[cid[i][0]]
        result.push([cid[i][0], dollars[cid[i][0]]])
        break
      }
    }
  }

  return {
    status: 'OPEN',
    change: Object.entries(
      result.reduce((acc, [key, value]) => {
        if (acc[key]) {
          acc[key] += value
        } else {
          acc[key] = value
        }
        return acc
      }, {})
    ),
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
)

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
)

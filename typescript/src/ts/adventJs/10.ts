const COINS = [1, 2, 5, 10, 20, 50]

export const getCoins = (change: number): number[] => {
  if (change === 0) return new Array(6).fill(0)

  const result = new Array(6).fill(0)

  for (let i = COINS.length - 1; i >= 0; i--) {
    if (change >= COINS[i]) {
      result[i] = Math.floor(change / COINS[i])
      change = change % COINS[i]
    }
  }

  return result
}

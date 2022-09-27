export const maxProfit = (prices: number[]): number => {
  if (new Set(prices).size === 1) return -1
  const pricesArrayLength = prices.length
  let maxProfit = -1

  for (let i = 0; i < pricesArrayLength; i++) {
    for (let k = i + 1; k < pricesArrayLength; k++) {
      const differenceBetweenPrices = prices[k] - prices[i]

      if (differenceBetweenPrices > maxProfit) {
        maxProfit = differenceBetweenPrices
      }
    }
  }

  return maxProfit
}

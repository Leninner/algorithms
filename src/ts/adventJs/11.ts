const FIDELITY_CARD_COST = 250
const TICKET_COST = 12
const PURCHASE_DISCOUNT = 0.75

export const shouldBuyFidelity = (times: number): boolean => {
  const costByTimes = times * TICKET_COST
  let fidelityPrice = 0

  for (let i = 0; i < times; i++) {
    let priceToDiscount = TICKET_COST

    for (let y = 0; y < i + 1; y++) {
      priceToDiscount *= PURCHASE_DISCOUNT
    }

    fidelityPrice += priceToDiscount
  }

  return costByTimes > fidelityPrice + FIDELITY_CARD_COST
}

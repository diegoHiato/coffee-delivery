export function getValueByPriceTimesAmount(price: number, amount: number) {
  const total = price * amount
  const fixedTotal = total.toFixed(2)

  return Number(fixedTotal)
}

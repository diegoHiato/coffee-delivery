export function getFormattedPriceValue(value: number) {
  if (value) {
    const [dollars, cents] = String(value).split('.')
    const paddedCents = cents.padEnd(2, '0')
    const formattedPriceValue = `R$ ${dollars},${paddedCents}`

    return formattedPriceValue
  }

  return 'R$ 0,00'
}

export function getFormattedPriceValueWithoutDollarSign(value: number) {
  if (value) {
    const [dollars, cents] = String(value).split('.')
    const paddedCents = cents.padEnd(2, '0')
    const formattedPriceValue = `${dollars},${paddedCents}`

    return formattedPriceValue
  }

  return '0,00'
}

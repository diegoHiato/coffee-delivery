import { Minus, Plus, Trash } from 'phosphor-react'
import { Coffee } from '../../../../contexts/Cart/Context'
import { useCart } from '../../../../contexts/Hooks/useCart'
import { ButtonSmallText, TextM } from '../../../../styles/typography'
import { getFormattedPriceValue } from '../../../../utils/getFormattedPriceValue'
import { getValueByPriceTimesAmount } from '../../../../utils/getValueByPriceTimesAmount'
import { CartCoffeeActions, CartCoffeeCardContainer, Counter } from './styles'

interface CartCoffeeProps {
  coffee: Coffee
}

export const CartCoffee = ({ coffee }: CartCoffeeProps) => {
  const { removeCoffeeFromCart, updateCoffeeAmount } = useCart()
  const valueOfPriceTimesAmount = getValueByPriceTimesAmount(
    coffee.price,
    coffee.amountInCart as number,
  )

  return (
    <CartCoffeeCardContainer>
      <section>
        <img src={coffee.imageUrl} alt="" />
        <div>
          <TextM>{coffee.title}</TextM>
          <CartCoffeeActions>
            <Counter>
              <button>
                <Minus
                  size={14}
                  weight="bold"
                  onClick={() => {
                    updateCoffeeAmount(coffee.id, 'decrease')
                  }}
                />
              </button>
              <TextM>{coffee.amountInCart}</TextM>
              <button>
                <Plus
                  size={14}
                  weight="bold"
                  onClick={() => {
                    updateCoffeeAmount(coffee.id, 'increase')
                  }}
                />
              </button>
            </Counter>

            <button
              onClick={() => {
                removeCoffeeFromCart(coffee.id)
              }}
            >
              <Trash size={16} />
              <ButtonSmallText>{'Remover'}</ButtonSmallText>
            </button>
          </CartCoffeeActions>
        </div>
      </section>

      <section>
        <TextM>{getFormattedPriceValue(valueOfPriceTimesAmount)}</TextM>
      </section>
    </CartCoffeeCardContainer>
  )
}

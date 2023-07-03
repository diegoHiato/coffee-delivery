import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import { Coffee } from '../../../../contexts/Cart/Context'
import { useCart } from '../../../../contexts/Hooks/useCart'
import { ButtonSmallText, TextM } from '../../../../styles/typography'
import { getFormattedPriceValue } from '../../../../utils/getFormattedPriceValue'
import { CartCoffeeActions, CartCoffeeCardContainer } from './styles'

interface CartCoffeeProps {
  coffee: Coffee
}

export const CartCoffee = ({ coffee }: CartCoffeeProps) => {
  const { removeCoffeeFromCart } = useCart()
  const [amount, setAmount] = useState(coffee.amountInCart as number)

  return (
    <CartCoffeeCardContainer>
      <section>
        <img src={coffee.imageUrl} alt="" />
        <div>
          <TextM>{'Expresso Americano'}</TextM>
          <CartCoffeeActions>
            <CoffeeCounter
              counter={amount}
              counterDispatchFunction={setAmount}
            />
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
        <TextM>{getFormattedPriceValue(coffee.price)}</TextM>
      </section>
    </CartCoffeeCardContainer>
  )
}

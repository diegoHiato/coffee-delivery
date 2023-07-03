import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import { Coffee } from '../../../../contexts/Cart/Context'
import { ButtonSmallText, TextM } from '../../../../styles/typography'
import { CartCoffeeActions, CartCoffeeCardContainer } from './styles'

interface CartCoffeeProps {
  coffee: Coffee
}

export const CartCoffee = ({ coffee }: CartCoffeeProps) => {
  const [amount, setAmount] = useState(coffee.amountInCart as number)
  const [dollar, cents] = String(coffee.price).split('.')
  const paddedCents = cents.padEnd(2, '0')
  const formattedPrice = `${dollar},${paddedCents}`

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
            <button>
              <Trash size={16} />
              <ButtonSmallText>{'Remover'}</ButtonSmallText>
            </button>
          </CartCoffeeActions>
        </div>
      </section>

      <section>
        <TextM>{`R$ ${formattedPrice}`}</TextM>
      </section>
    </CartCoffeeCardContainer>
  )
}

import { Trash } from 'phosphor-react'
import { useState } from 'react'
import CoffeeImage from '../../../../assets/menu/american.png'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import { ButtonSmallText, TextM } from '../../../../styles/typography'
import { CartCoffeeActions, CartCoffeeCardContainer } from './styles'

export const CartCoffee = () => {
  const [amount, setAmount] = useState(1)

  return (
    <CartCoffeeCardContainer>
      <section>
        <img src={CoffeeImage} alt="" />
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
        <TextM>{'R$ 9,90'}</TextM>
      </section>
    </CartCoffeeCardContainer>
  )
}

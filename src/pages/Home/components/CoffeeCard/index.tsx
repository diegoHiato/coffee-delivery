import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import Coffee from '../../../../assets/menu/american.png'
import {
  AddToCartButton,
  CartActions,
  CoffeCardContent,
  CoffeeAmount,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeTag,
  Price,
  PriceAndCartActions,
  TagContainer,
} from './styles'

export const CoffeeCard = () => {
  const [amount, setAmount] = useState(1)

  function handleMinus() {
    if (amount > 1) {
      setAmount((prev) => prev - 1)
    }
  }

  function handlePlus() {
    setAmount((prev) => prev + 1)
  }

  return (
    <CoffeeCardContainer>
      <CoffeCardContent>
        <img src={Coffee} alt="" />

        <TagContainer>
          <CoffeeTag>Tradicional</CoffeeTag>
          <CoffeeTag>Gelado</CoffeeTag>
        </TagContainer>

        <CoffeeDescription>
          <h2>Expresso Americano</h2>
          <span>Expresso diluído, menos intenso que o tradicional</span>
        </CoffeeDescription>

        <PriceAndCartActions>
          <Price>
            <span>R$</span>
            <span>{'9,90'}</span>
          </Price>

          <CartActions>
            <CoffeeAmount>
              <button disabled={amount <= 1}>
                <Minus size={14} weight="bold" onClick={handleMinus} />
              </button>
              <span>{amount}</span>
              <button>
                <Plus size={14} weight="bold" onClick={handlePlus} />
              </button>
            </CoffeeAmount>

            <AddToCartButton>
              <ShoppingCart weight="fill" size={22} />
            </AddToCartButton>
          </CartActions>
        </PriceAndCartActions>
      </CoffeCardContent>
    </CoffeeCardContainer>
  )
}

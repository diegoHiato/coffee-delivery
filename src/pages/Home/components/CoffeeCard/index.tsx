import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import Coffee from '../../../../assets/menu/american.png'
import {
  TagText,
  TextM,
  TextS,
  TitleM,
  TitleS,
} from '../../../../styles/typography'
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
          <CoffeeTag>
            <TagText>Tradicional</TagText>
          </CoffeeTag>
        </TagContainer>

        <CoffeeDescription>
          <TitleS>Expresso Americano</TitleS>
          <TextS>Expresso diluído, menos intenso que o tradicional</TextS>
        </CoffeeDescription>

        <PriceAndCartActions>
          <Price>
            <TextS>R$</TextS>
            <TitleM>{'9,90'}</TitleM>
          </Price>

          <CartActions>
            <CoffeeAmount>
              <button disabled={amount <= 1}>
                <Minus size={14} weight="bold" onClick={handleMinus} />
              </button>
              <TextM>{amount}</TextM>
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

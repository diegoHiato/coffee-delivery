import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import Coffee from '../../../../assets/menu/american.png'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import { TagText, TextS, TitleM, TitleS } from '../../../../styles/typography'
import {
  AddToCartButton,
  CartActions,
  CoffeCardContent,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeTag,
  Price,
  PriceAndCartActions,
  TagContainer,
} from './styles'

export const CoffeeCard = () => {
  const [amount, setAmount] = useState(1)

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
            <CoffeeCounter
              counter={amount}
              counterDispatchFunction={setAmount}
            />

            <AddToCartButton>
              <ShoppingCart weight="fill" size={22} />
            </AddToCartButton>
          </CartActions>
        </PriceAndCartActions>
      </CoffeCardContent>
    </CoffeeCardContainer>
  )
}

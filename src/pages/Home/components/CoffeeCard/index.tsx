import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import { Coffee } from '../../../../contexts/Cart/Context'
import { useCart } from '../../../../contexts/Hooks/useCart'
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

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { addCoffeeToCart } = useCart()
  const [amount, setAmount] = useState(1)
  const [dollar, cents] = String(coffee.price).split('.')
  const paddedCents = cents.padEnd(2, '0')
  const formattedPrice = `${dollar},${paddedCents}`

  return (
    <CoffeeCardContainer>
      <CoffeCardContent>
        <img src={coffee.imageUrl} alt="" />

        <TagContainer>
          {coffee.tags.map((tag, index) => {
            return (
              <CoffeeTag key={`${index}_${tag}`}>
                <TagText>{tag}</TagText>
              </CoffeeTag>
            )
          })}
        </TagContainer>

        <CoffeeDescription>
          <TitleS>{coffee.title}</TitleS>
          <TextS>{coffee.description}</TextS>
        </CoffeeDescription>

        <PriceAndCartActions>
          <Price>
            <TextS>R$</TextS>
            <TitleM>{formattedPrice}</TitleM>
          </Price>

          <CartActions>
            <CoffeeCounter
              counter={amount}
              counterDispatchFunction={setAmount}
            />

            <AddToCartButton
              onClick={() => {
                addCoffeeToCart({ coffee, amount })
              }}
            >
              <ShoppingCart weight="fill" size={22} />
            </AddToCartButton>
          </CartActions>
        </PriceAndCartActions>
      </CoffeCardContent>
    </CoffeeCardContainer>
  )
}

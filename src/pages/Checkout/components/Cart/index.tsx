import { Fragment } from 'react'
import { Divider } from '../../../../components/Divider'
import { useCart } from '../../../../contexts/Hooks/useCart'
import {
  ButtonLargeText,
  TextL,
  TextM,
  TextS,
  TitleXS,
} from '../../../../styles/typography'
import { getFormattedPriceValue } from '../../../../utils/getFormattedPriceValue'
import { CartCoffee } from './CartCoffee'
import {
  CartContainer,
  CartContent,
  CoffeeListContainer,
  PriceInformationContainer,
} from './styles'

export const CheckoutCart = () => {
  const { coffeeList, valueOfItemsInCart } = useCart()
  const freightBaseCost = Number(import.meta.env.VITE_FREIGHT_BASE_COST)
  const totalCartValue = freightBaseCost + valueOfItemsInCart

  return (
    <CartContainer>
      <TitleXS>{'Cafés selecionados'}</TitleXS>
      <CartContent>
        <CoffeeListContainer>
          {coffeeList?.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <CartCoffee coffee={coffee} />
                <Divider />
              </Fragment>
            )
          })}
        </CoffeeListContainer>

        <PriceInformationContainer>
          <div>
            <TextS>{'Total de itens'}</TextS>
            <TextM>{getFormattedPriceValue(valueOfItemsInCart)}</TextM>
          </div>

          <div>
            <TextS>{'Frete'}</TextS>
            <TextM>{getFormattedPriceValue(freightBaseCost)}</TextM>
          </div>

          <div>
            <TextL>{'Total'}</TextL>
            <TextL>{getFormattedPriceValue(totalCartValue)}</TextL>
          </div>
        </PriceInformationContainer>

        <button type="submit">
          <ButtonLargeText>{'CONFIRMAR PEDIDO'}</ButtonLargeText>
        </button>
      </CartContent>
    </CartContainer>
  )
}

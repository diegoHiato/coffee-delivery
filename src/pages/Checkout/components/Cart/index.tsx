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
import { CartCoffee } from './CartCoffee'
import {
  CartContainer,
  CartContent,
  CoffeeListContainer,
  PriceInformationContainer,
} from './styles'

export const CheckoutCart = () => {
  const { coffeeList } = useCart()

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
            <TextM>{'R$ 29,70'}</TextM>
          </div>

          <div>
            <TextS>{'Frete'}</TextS>
            <TextM>{'R$ 3,50'}</TextM>
          </div>

          <div>
            <TextL>{'Total'}</TextL>
            <TextL>{'R$ 33,20'}</TextL>
          </div>
        </PriceInformationContainer>

        <button type="submit">
          <ButtonLargeText>{'CONFIRMAR PEDIDO'}</ButtonLargeText>
        </button>
      </CartContent>
    </CartContainer>
  )
}

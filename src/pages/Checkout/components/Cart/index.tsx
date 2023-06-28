import { Divider } from '../../../../components/Divider'
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
  return (
    <CartContainer>
      <TitleXS>{'Cafés selecionados'}</TitleXS>
      <CartContent>
        <CoffeeListContainer>
          <CartCoffee />
          <Divider />
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

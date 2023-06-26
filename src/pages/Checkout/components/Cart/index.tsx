import { TitleXS } from '../../../../styles/typography'
import { CartContainer } from './styles'

export const CheckoutCart = () => {
  return (
    <CartContainer>
      <TitleXS>{'Cafés selecionados'}</TitleXS>
      <div>
        <button type="submit">{'CONFIRMAR PEDIDO'}</button>
      </div>
    </CartContainer>
  )
}

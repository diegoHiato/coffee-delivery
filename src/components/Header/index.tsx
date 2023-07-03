import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { InternationalShoppingMapsLink } from '../../../envrionmentVariables'
import Logo from '../../assets/full-logo.svg'
import { useCart } from '../../contexts/Hooks/useCart'
import { TextS } from '../../styles/typography'
import { Actions, Cart, HeaderContainer, Location } from './styles'

export function Header() {
  const { totalCoffeeUnitsInCart } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Cardápio">
        <img src={Logo} alt="Coffee Delivery" />
      </NavLink>
      <Actions>
        <Location
          to={InternationalShoppingMapsLink}
          target="__blank"
          title="Localização"
        >
          <MapPin weight="fill" size={22} />
          <TextS>{'Guarulhos, SP'}</TextS>
        </Location>
        <NavLink to="/checkout" title="Carrinho">
          <Cart>
            {totalCoffeeUnitsInCart > 0 && (
              <span>
                {totalCoffeeUnitsInCart > 9
                  ? '9+'
                  : `${totalCoffeeUnitsInCart}`}
              </span>
            )}
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}

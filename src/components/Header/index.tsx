import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
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
          to={import.meta.env.VITE_COFFEE_SHOP_LOCATION_URL}
          target="__blank"
          title="Localização"
        >
          <MapPin weight="fill" size={22} />
          <TextS>{'Guarulhos, SP'}</TextS>
        </Location>

        <Cart
          to="/checkout"
          title="Carrinho"
          $disabled={totalCoffeeUnitsInCart < 1}
        >
          {totalCoffeeUnitsInCart > 0 && (
            <span>
              {totalCoffeeUnitsInCart > 9 ? '9+' : `${totalCoffeeUnitsInCart}`}
            </span>
          )}
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}

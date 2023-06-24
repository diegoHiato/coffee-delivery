/* eslint-disable no-unused-vars */
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Logo from '../../assets/full-logo.svg'
import { openWeatherAPI } from '../../services/openWeatherAPI'
import { Actions, Cart, HeaderContainer, Location } from './styles'

enum StateInitials {
  Acre = 'AC',
  Alagoas = 'AL',
  Amapá = 'AP',
  Amazonas = 'AM',
  Bahia = 'BA',
  Ceará = 'CE',
  Distrito_Federal = 'DF',
  Espírito_Santo = 'ES',
  Goiás = 'GO',
  Maranhão = 'MA',
  Mato_Grosso = 'MT',
  Mato_Grosso_do_Sul = 'MS',
  Minas_Gerais = 'MG',
  Pará = 'PA',
  Paraíba = 'PB',
  Paraná = 'PR',
  Pernambuco = 'PE',
  Piauí = 'PI',
  Rio_de_Janeiro = 'RJ',
  Rio_Grande_do_Norte = 'RN',
  Rio_Grande_do_Sul = 'RS',
  Rondônia = 'RO',
  Roraima = 'RR',
  Santa_Catarina = 'SC',
  São_Paulo = 'SP',
  Sergipe = 'SE',
  Tocantins = 'TO',
}

interface OpenWeatherApiResponse {
  country: string
  name: string
  state: string
}

export function Header() {
  const [currentLocation, setCurrentLocation] = useState<string>('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords

      openWeatherAPI
        .get<OpenWeatherApiResponse[]>(
          `reverse?lat=${latitude}&lon=${longitude}`,
        )
        .then(({ data }) =>
          setCurrentLocation(
            `${data[0].name}, ${
              StateInitials[
                data[0].state.replace(' ', '_') as keyof typeof StateInitials
              ]
            }`,
          ),
        )
    })
  }, [])

  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery" />
      <Actions>
        <Location>
          <MapPin weight="fill" size={22} />
          {currentLocation}
        </Location>
        <Cart>
          <span>{'3'}</span>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}

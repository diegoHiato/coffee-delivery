import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { shopLocationLatitude, shopLocationLongitude } from '../../../envrionmentVariables'
import { RoundedIcon } from '../../components/RoundedIcon'
import { useCart } from '../../contexts/Hooks/useCart'
import { geocodingApi } from '../../services/freeGeocodingAPI'
import { defaultTheme } from '../../styles/themes/default'
import { TextM, TitleL } from '../../styles/typography'
import { getDistanceBetweenCoordinates } from '../../utils/getDistanceBetweenCoordinates'
import { getEstimatedTimeForDeliver } from '../../utils/getEstimatedTimeForDeliver'
import {
  CheckoutSuccessContainer,
  CheckoutSuccessHeroImage,
  IconAndTextContainer,
  ShippingInformation,
  ShippingInformationBorder,
} from './styles'

interface GeocodingApiResponse {
  place_id: number
  licence: string
  powered_by: string
  osm_type: string
  osm_id: number
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
}

interface UserGeolocation {
  latitude: number | undefined
  longitude: number | undefined
}

enum PaymentMethod {
  "cash" = "Dinheiro",
  "debitCard" = "Cartão de Débito",
  "creditCard" = "Cartão de Crédito"
}

const AVERAGE_SPEED = 30
const AVERAGE_PREPARATION_TIME = 20

export const CheckoutSuccess = () => {
  const { buyerInformation } = useCart()
  const [userGeolocation, setUserGeolocation] = useState<UserGeolocation>({
    latitude: undefined,
    longitude: undefined,
  })
  const { address } = buyerInformation
  const freeGeocodingApiQueryString = `${address.street}, ${address.streetNumber}, ${address.neighborhood}, ${address.city}, ${address.state}, ${address.cep}, ${address.country}`

  const distanceInKilometers = getDistanceBetweenCoordinates(
    {
      latitude: userGeolocation.latitude as number,
      longitude: userGeolocation.longitude as number,
    },
    { latitude: shopLocationLatitude, longitude: shopLocationLongitude},
  )

  const estimatedTime = getEstimatedTimeForDeliver(distanceInKilometers, AVERAGE_PREPARATION_TIME, AVERAGE_SPEED)

  useEffect(() => {
    geocodingApi
    .get<GeocodingApiResponse[]>('/search', {
      params: {
        q: freeGeocodingApiQueryString,
      },
    })
    .then(({ data }) => {
      const { lat, lon } = data[0]
      setUserGeolocation({ latitude: Number(lat), longitude: Number(lon) })
    })
  }, [])

  return (
    <CheckoutSuccessContainer>
      <section>
        <TitleL>{'Uhu! Pedido confirmado'}</TitleL>
        <TextM>{'Agora é só aguardar que logo o café chegará até você'}</TextM>
      </section>

      <section>
        <ShippingInformationBorder>
          <ShippingInformation>
            <IconAndTextContainer>
              <RoundedIcon
                Icon={MapPin}
                iconColor={`${defaultTheme.background}`}
                weight="fill"
                backgroundColor={`${defaultTheme.purple}`}
              />
              <div>
                <TextM>
                  {'Entrega em '}
                  <strong>{`${address.street}, ${address.streetNumber}`}</strong>
                </TextM>
                <TextM>{`${address.neighborhood} - ${address.city} - ${address.state}`}</TextM>
              </div>
            </IconAndTextContainer>

            <IconAndTextContainer>
              <RoundedIcon
                Icon={Timer}
                iconColor={`${defaultTheme.background}`}
                weight="fill"
                backgroundColor={`${defaultTheme.yellow}`}
              />
              <div>
                <TextM>Previsão de entrega</TextM>
                <TextM>
                  <strong>{`${estimatedTime} min - ${estimatedTime + 10} min`}</strong>
                </TextM>
              </div>
            </IconAndTextContainer>

            <IconAndTextContainer>
              <RoundedIcon
                Icon={CurrencyDollar}
                iconColor={`${defaultTheme.background}`}
                backgroundColor={`${defaultTheme['yellow-dark']}`}
              />
              <div>
                <TextM>Pagamento na entrega</TextM>
                <TextM>
                  <strong>{buyerInformation.paymentMethod && PaymentMethod[buyerInformation.paymentMethod]}</strong>
                </TextM>
              </div>
            </IconAndTextContainer>
          </ShippingInformation>
        </ShippingInformationBorder>

        <CheckoutSuccessHeroImage />
      </section>
    </CheckoutSuccessContainer>
  )
}

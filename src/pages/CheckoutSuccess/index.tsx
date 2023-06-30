import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { RoundedIcon } from '../../components/RoundedIcon'
import { defaultTheme } from '../../styles/themes/default'
import { TextM, TitleL } from '../../styles/typography'
import {
  CheckoutSuccessContainer,
  CheckoutSuccessHeroImage,
  IconAndTextContainer,
  ShippingInformation,
  ShippingInformationBorder,
} from './styles'

export const CheckoutSuccess = () => {
  // const distanceInKilometers = getDistanceBetweenCoordinates(
  //   { latitude: -23.49696, longitude: -46.54993 },
  //   { latitude: -23.47154, longitude: -46.56356 },
  // )

  // function showDistanceBetweenShopAndClient() {
  //   if (distanceInKilometers < 1) {
  //     const distanceInMeters = String(
  //       Number(Number(distanceInKilometers) * 1000).toFixed(0),
  //     )
  //     return `${distanceInMeters} m.`
  //   }

  //   return `${distanceInKilometers.toFixed(1)} km.`
  // }

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
                  <strong>{'Rua João Daniel Martinelli, 102'}</strong>
                </TextM>
                <TextM>{'Farrapos - Porto Alegre, RS'}</TextM>
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
                  <strong>{'20 min - 30 min'}</strong>
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
                <TextM>Previsão de entrega</TextM>
                <TextM>
                  <strong>{'20 min - 30 min'}</strong>
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

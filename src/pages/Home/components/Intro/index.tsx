import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { TextL, TextM, TitleXL } from '../../../../styles/typography'
import { IntroIcon } from './Icon'
import {
  Background,
  BackgroundColor,
  HeroImage,
  IconWithDescriptionContainter,
  IconWithDescriptionContent,
  IntroContainer,
  TitleContainer,
} from './styles'

const titleText = 'Encontre o café perfeito para qualquer hora do dia'
const subtitleText =
  'Com o Coffee Delivery você receberá seu café onde estiver, a qualquer hora'
const iconAndDescription: {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  description: string
  iconBackgroundColor: BackgroundColor['$background']
  weight?: IconProps['weight']
}[] = [
  {
    icon: ShoppingCart,
    description: 'Compra simples e segura',
    iconBackgroundColor: 'yellow-dark',
    weight: 'fill',
  },
  {
    icon: Package,
    description: 'Embalagem mantém o café intacto',
    iconBackgroundColor: 'base-text',
    weight: 'fill',
  },
  {
    icon: Timer,
    description: 'Entrega rápida e rastreada',
    iconBackgroundColor: 'yellow',
    weight: 'fill',
  },
  {
    icon: Coffee,
    description: 'O café chega fresquinho até você',
    iconBackgroundColor: 'purple',
    weight: 'fill',
  },
]

export function Intro() {
  return (
    <IntroContainer>
      <Background />
      <section>
        <TitleContainer>
          <TitleXL>{titleText}</TitleXL>
          <TextL>{subtitleText}</TextL>
        </TitleContainer>

        <IconWithDescriptionContainter>
          {iconAndDescription.map((item, index) => {
            return (
              <IconWithDescriptionContent key={index}>
                <IntroIcon
                  Icon={item.icon}
                  backgroundColor={item.iconBackgroundColor}
                  weight={item.weight}
                />
                <TextM>{item.description}</TextM>
              </IconWithDescriptionContent>
            )
          })}
        </IconWithDescriptionContainter>
      </section>
      <HeroImage />
    </IntroContainer>
  )
}

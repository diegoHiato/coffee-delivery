import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { BackgroundColor, IconContainer } from './styles'

interface IntroIconProps extends IconProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  backgroundColor: BackgroundColor['$background']
}

export const IntroIcon = ({
  Icon,
  backgroundColor,
  ...rest
}: IntroIconProps) => {
  return (
    <IconContainer $background={backgroundColor}>
      {<Icon {...rest} />}
    </IconContainer>
  )
}

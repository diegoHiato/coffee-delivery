import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import styled from 'styled-components'

interface DivElementProps {
  $background: string
  $color: string
  $size: number
}

interface RoundedIconProps extends IconProps {
  backgroundColor: DivElementProps['$background']
  backgroundSize?: DivElementProps[`$size`]
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  iconColor: string
}

const IconContainer = styled.div<DivElementProps>`
  width: ${(props) => `${props.$size}rem`};
  height: ${(props) => `${props.$size}rem`};
  border-radius: 50%;

  color: ${(props) => `${props.$color}`};
  background-color: ${(props) => `${props.$background}`};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RoundedIcon = ({
  Icon,
  iconColor,
  backgroundColor,
  backgroundSize = 2,
  ...rest
}: RoundedIconProps) => {
  return (
    <IconContainer
      $background={backgroundColor}
      $color={iconColor}
      $size={backgroundSize}
    >
      {<Icon {...rest} />}
    </IconContainer>
  )
}

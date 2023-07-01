import styled from 'styled-components'

const HrElement = styled.hr<{ $spacing: number }>`
  margin-block: ${(props) => `${props.$spacing}rem`};
  color: ${(props) => props.theme['base-button']};
`

interface DividerProps {
  spacing?: number
}

/**
 * Receive a spacing in rem to TOP and BOTTOM margins
 *
 * Default: 1.5
 *
 * @param spacing
 */
export const Divider = ({ spacing = 1.5, ...rest }: DividerProps) => {
  return <HrElement $spacing={spacing} {...rest} />
}

import styled from 'styled-components'
import { TitleL } from '../../styles/typography'

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  & > ${TitleL} {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const HomeContainer = styled.main`
  padding: 5.75rem 10rem 10rem;

  display: grid;
  grid-template-rows: max-content 1fr;
  row-gap: 7.75rem;
`

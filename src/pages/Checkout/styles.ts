import styled from 'styled-components'
import { TitleXS } from '../../styles/typography'

export const CheckoutContainer = styled.main`
  padding-top: 2.5rem;
  padding-inline: 10rem;
  padding-bottom: 15rem;

  & > form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  & ${TitleXS} {
    margin-bottom: 0.9375rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

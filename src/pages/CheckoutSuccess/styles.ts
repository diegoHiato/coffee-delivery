import styled from 'styled-components'
import { TextM, TitleL } from '../../styles/typography'

export const CheckoutSuccessHeroImage = styled.div`
  height: 100vh;
  max-height: 293px;
  background: url(${import.meta.env.VITE_CHECKOUT_SUCCESS_HERO_IMAGE_URL}) 0 0
    no-repeat;
  background-size: contain;
  background-position: center;
`

export const ShippingInformationBorder = styled.div`
  height: max-content;
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`

export const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div & > ${TextM} {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ShippingInformation = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CheckoutSuccessContainer = styled.main`
  padding: 5rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & > section:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & > ${TitleL} {
      color: ${(props) => props.theme['yellow-dark']};
    }

    & > ${TextM} {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > section:last-of-type {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.375rem;
  }
`

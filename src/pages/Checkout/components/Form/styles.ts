import styled, { css } from 'styled-components'
import { TextM, TextS } from '../../../../styles/typography'

const BaseCardContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputOptional = styled.span`
  position: absolute;
  right: 0.75rem;
  top: calc(50% - 0.375rem);

  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};

  user-select: none;
`

export const InputContainer = styled.div<{ $error: boolean }>`
  position: relative;

  & > input {
    width: 100%;
    padding: 1rem;

    border: 1px solid
      ${(props) => (props.$error ? 'red' : props.theme['base-button'])};
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};

    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};

      ${(props) =>
        props.$error &&
        css`
          box-shadow: none;
        `}
    }

    transition: opacity 0.15s;
    &:disabled,
    &:disabled ~ ${InputOptional} {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:placeholder-shown) ~ ${InputOptional} {
      display: none;
    }

    &::placeholder {
      color: ${(props) => (props.$error ? 'red' : props.theme['base-label'])};
    }
  }
`

export const CardTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & > div:last-of-type {
    & > ${TextM} {
      color: ${(props) => props.theme['base-subtitle']};
    }

    & > ${TextS} {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PaymentMethodCardContainer = styled(BaseCardContainer)`
  & > ${CardTitleContainer} > div {
    color: ${(props) => props.theme.purple};
  }
`

export const AddressFormContainer = styled.section`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: 35.7143% 49.2875% 10.7143%;
  column-gap: 0.75rem;

  & > div:nth-child(1) {
    grid-column: 1 / 4;
    padding-right: 64.2857%;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 4;
  }

  & > div:nth-child(4) {
    grid-column: 2 / 4;
  }
`

export const AddressCardContainer = styled(BaseCardContainer)`
  & > ${CardTitleContainer} > div {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CheckoutFormContainer = styled.div`
  & > section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

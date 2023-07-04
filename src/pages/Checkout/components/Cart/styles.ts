import styled from 'styled-components'
import { CoffeeCounterContainer } from '../../../../components/CoffeeCounter/styles'
import {
  ButtonLargeText,
  ButtonSmallText,
  TextL,
  TextM,
  TextS,
} from '../../../../styles/typography'

export const Counter = styled(CoffeeCounterContainer)``

export const CartCoffeeActions = styled.div`
  line-height: 0;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  & > button {
    padding-inline: 0.5rem;

    border: unset;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    cursor: pointer;

    & > svg {
      color: ${(props) => props.theme.purple};
    }

    & > ${ButtonSmallText} {
      transition: color 0.15s;
      color: ${(props) => props.theme['base-text']};
    }

    transition: background-color 0.15s;
    &:hover {
      background-color: ${(props) => props.theme['base-hover']};

      & > ${ButtonSmallText} {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const CartCoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > section:first-of-type {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    & > img {
      width: 4rem;
      height: 4rem;
    }

    & > div {
      & > ${TextM} {
        width: 100%;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  & > section:last-of-type {
    & > ${TextM} {
      font-weight: 700;
    }
  }
`

export const CoffeeListContainer = styled.section``

export const PriceInformationContainer = styled.section`
  width: 100%;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > ${TextS}, & > ${TextM} {
      color: ${(props) => props.theme['base-text']};
    }

    & > ${TextL} {
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CartContent = styled.div`
  padding: 2.5rem;

  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;

  & > button[type='submit'] {
    width: 100%;
    padding: 0.75rem 0.5rem;

    text-align: center;
    border: unset;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    cursor: pointer;
    user-select: none;

    & > ${ButtonLargeText} {
      color: ${(props) => props.theme.white};
    }

    transition: background-color 0.15s;
    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CartContainer = styled.aside``

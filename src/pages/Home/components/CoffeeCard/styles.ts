import styled from 'styled-components'
import { TagText, TextM, TextS, TitleS } from '../../../../styles/typography'

export const AddToCartButton = styled.button`
  padding: 0.5rem;

  color: ${(props) => props.theme['base-card']};
  background-color: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

export const CoffeeAmount = styled.div`
  padding: 0.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & > button {
    border: 0;
    border-radius: 2px;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & > svg {
      color: ${(props) => props.theme.purple};
      transition: color 0.15s;
    }

    &:not(:disabled) {
      & > svg:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    transition: opacity 0.15s;
    &:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
  }

  & > ${TextM} {
    color: ${(props) => props.theme['base-title']};
    user-select: none;
  }
`

export const CartActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Price = styled.div`
  display: flex;
  align-items: first baseline;
  gap: 0.25rem;

  color: ${(props) => props.theme['base-text']};
`

export const PriceAndCartActions = styled.div`
  width: 100%;
  padding-inline: 1.5rem;
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeDescription = styled.div`
  margin-bottom: 2.0625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & > ${TitleS} {
    text-align: center;
    text-transform: capitalize;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > ${TextS} {
    text-align: center;
    padding-inline: 1.25rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeTag = styled.div`
  padding: 0.25rem 0.5rem;

  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;

  & > ${TagText} {
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
  }
`

export const TagContainer = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeCardContent = styled.div`
  width: 100%;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }
`

export const CoffeeCardContainer = styled.article`
  max-width: 256px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
`

import styled from 'styled-components'

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

  & > span {
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

  & > span:first-of-type {
    font-size: 0.875rem;
    line-height: 130%;
  }

  & > span:last-of-type {
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
  }
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

  & > h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;

    text-transform: capitalize;
  }

  & > span {
    text-align: center;
    padding-inline: 1.25rem;

    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeTag = styled.span`
  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;
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

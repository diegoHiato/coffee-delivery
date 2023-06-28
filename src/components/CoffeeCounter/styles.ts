import styled from 'styled-components'
import { TextM } from '../../styles/typography'

export const CoffeeCounterContainer = styled.div`
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

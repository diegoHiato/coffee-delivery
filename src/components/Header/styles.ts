import styled from 'styled-components'

export const Location = styled.span`
  padding: 0.5rem;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  & > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Cart = styled.button`
  position: relative;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  & > span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: bold;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
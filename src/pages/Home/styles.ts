import styled from 'styled-components'

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const MenuContainer = styled.div`
  & > h1 {
    margin-bottom: 3.375rem;

    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const HomeContainer = styled.main`
  padding: 5.75rem 10rem 10rem;

  display: grid;
  grid-template-rows: max-content 1fr;
  row-gap: 7.75rem;
`

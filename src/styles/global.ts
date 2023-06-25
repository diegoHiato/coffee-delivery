import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme.background};
  }

  body, input, textarea, button {
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`

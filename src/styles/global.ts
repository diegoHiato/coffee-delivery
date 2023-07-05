import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme.background};
    cursor: default;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    cursor: auto;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`

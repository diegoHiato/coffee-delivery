import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'urql'
import { Router } from './Routes'
import { CartProvider } from './contexts/Cart/Provider'
import { client } from './lib/urql'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Provider value={client}>
          <CartProvider>
            <Router />
          </CartProvider>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

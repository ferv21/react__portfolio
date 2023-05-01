import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [DarkTheme, setDarkTheme] = useState(false)
  function trocaTema() {
    setDarkTheme(!DarkTheme)
  }
  return (
    <ThemeProvider theme={DarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

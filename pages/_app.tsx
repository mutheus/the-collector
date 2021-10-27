import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { Header } from 'src/components/header'
import AppContext from 'src/contexts/app-context'
import 'normalize.css'
import { Footer } from 'src/components/footer'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f2ede8;
    color: #070201;
  }
`

const AppWrapper = styled.div`
  min-height: 100vh;
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </AppContext>
  )
}

export default MyApp

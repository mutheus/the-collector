import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { Header } from 'src/components/header'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: #f2ede8;
    color: #070201;
  }
`

const Main = styled.main`
  min-height: 100%;
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp

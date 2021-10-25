import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { Header } from 'src/components/header'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: #f2ede8;
    color: #070201;
  }
`

const AppWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
`

const Main = styled.main`
  min-height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 3em 0;
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </AppWrapper>
  )
}

export default MyApp

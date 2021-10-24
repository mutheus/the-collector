import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: system-ui, sans-serif;
  }
`

const Main = styled.main`
  min-height: 100%;
`

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp

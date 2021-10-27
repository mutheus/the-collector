import styled from 'styled-components/macro'

const FooterWrapper = styled.footer`
  padding: 8em 1.4em 3em;
  text-align: center;

  h4 {
    margin-bottom: 2.5em;
  }

  a {
    color: inherit;
    font-weight: 700;
  }
`
export function Footer () {
  return (
    <FooterWrapper>
      <h4>&copy; 1997–Today / Copyright The Collector. All rights reserved.</h4>

      <small>This site is built with <a href="#">Next</a> and hosted on <a href="#">Vercel</a>. The source code is hosted on <a href="#">Github</a>.</small>
    </FooterWrapper>
  )
}

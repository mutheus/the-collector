import styled from 'styled-components/macro'

const FooterWrapper = styled.footer`
  padding: 0 1.4em 3em;
  margin-top: 10em;
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

      <small>This site is built with <a href="https://nextjs.org/">Next</a> and hosted on <a href="https://vercel.com/">Vercel</a>. The source code is hosted on <a href="https://github.com/mutheus/the-collector">Github</a>.</small>
    </FooterWrapper>
  )
}

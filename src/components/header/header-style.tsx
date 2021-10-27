import styled from 'styled-components/macro'

export const HeaderWrapper = styled.header`
  padding: 1em 1.4em;
`

export const LogoWrapper = styled.div`
  margin: 0 auto;
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`

export const MobileHeader = styled.div`
  display: flex;
  place-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`

export const DesktopHeader = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    max-width: 60em;
    margin: 0 auto;

    > div {
      margin: 0;
    }
  }
`

export const Nav = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 3em;
  align-items: center;
  margin: 0 auto;

  li {
    list-style: none;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
  }
`

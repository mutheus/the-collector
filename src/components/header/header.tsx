import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from 'public/logo.svg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import { AppContext } from 'src/contexts/app-context'

const HeaderWrapper = styled.header`
  padding: 1em 1.4em;
`

const LogoWrapper = styled.div`
  margin: 0 auto;
`
const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`

const MobileHeader = styled.div`
  display: flex;
  place-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`

const DesktopHeader = styled.div`
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

const Nav = styled.ul`
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

export function Header () {
  const { setHeaderHeight } = useContext(AppContext)
  const headerRef = useRef<HTMLObjectElement>(null)

  useEffect(() => {
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current?.offsetHeight)
    }
  }, [setHeaderHeight])

  return (
    <HeaderWrapper ref={headerRef}>
      <MobileHeader>
        <Button>
          <HiOutlineMenuAlt2 size="24px" />
        </Button>

        <LogoWrapper>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoWrapper>

        <Button>
          <AiOutlineUser size="24px" />
        </Button>
      </MobileHeader>
      <DesktopHeader>
        <LogoWrapper>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoWrapper>

        <Nav>
          <li>Comics</li>
          <li>Characters</li>
          <li>Blog</li>
          <li>News</li>
        </Nav>

        <Button>
          <AiOutlineUser size="24px" />
        </Button>
      </DesktopHeader>
    </HeaderWrapper>
  )
}

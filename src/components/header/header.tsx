import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from 'public/logo.svg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import { AppContext } from 'src/contexts/app-context'

const HeaderWrapper = styled.header`
  display: flex;
  padding: 1em 1.4em;
  place-items: center;
`

const LogoWrapper = styled.div`
  margin: 0 auto;
`
const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
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
    </HeaderWrapper>
  )
}

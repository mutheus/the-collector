import styled from 'styled-components'
import Logo from 'public/logo.svg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'

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
  return (
    <HeaderWrapper>
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

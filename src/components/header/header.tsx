import styled from 'styled-components'
import LogoSvg from 'public/logo.svg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'

const HeaderWrapper = styled.header`
  display: flex;
  padding: 1em 1.4em;
  place-items: center;
`

const Logo = styled(LogoSvg)`
  margin: 0 auto;
`

export function Header () {
  return (
    <HeaderWrapper>
      <HiOutlineMenuAlt2 size="24px" />

      <Logo />

      <AiOutlineUser size="24px" />
    </HeaderWrapper>
  )
}

import { useContext, useEffect, useRef } from 'react'
import Logo from 'public/logo.svg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import { AppContext } from 'src/contexts/app-context'
import * as S from './header-style'

export function Header () {
  const { setHeaderHeight } = useContext(AppContext)
  const headerRef = useRef<HTMLObjectElement>(null)

  useEffect(() => {
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current?.offsetHeight)
    }
  }, [setHeaderHeight])

  return (
    <S.HeaderWrapper ref={headerRef}>
      <S.MobileHeader>
        <S.Button>
          <HiOutlineMenuAlt2 size="24px" />
        </S.Button>

        <S.LogoWrapper>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </S.LogoWrapper>

        <S.Button>
          <AiOutlineUser size="24px" />
        </S.Button>
      </S.MobileHeader>
      <S.DesktopHeader>
        <S.LogoWrapper>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </S.LogoWrapper>

        <S.Nav>
          <li>Comics</li>
          <li>Characters</li>
          <li>Blog</li>
          <li>News</li>
        </S.Nav>

        <S.Button>
          <AiOutlineUser size="24px" />
        </S.Button>
      </S.DesktopHeader>
    </S.HeaderWrapper>
  )
}

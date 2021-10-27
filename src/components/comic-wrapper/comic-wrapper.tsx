import { Main } from 'src/styles'
import { AppContext } from 'src/contexts/app-context'
import { useContext } from 'react'
import { ComicDataType } from 'comics'
import styled from 'styled-components'
import { HiArrowSmDown } from 'react-icons/hi'
import * as S from './comic-wrapper-style'

type ComicDataProps = {
  comicData: ComicDataType
}

const MainWrapper = styled(Main)`
  padding: 1em;
`

export function ComicWrapper ({ comicData }: ComicDataProps) {
  const { headerHeight } = useContext(AppContext)

  return (
    <MainWrapper headerHeight={headerHeight}>
      <S.ComicContainer>
        <S.ImageContainer>
          <S.PriceWrapper>
            <h2>${comicData.price}</h2>
          </S.PriceWrapper>

          <S.Image src={comicData.thumbnail} alt={comicData.title} />
        </S.ImageContainer>

        <S.Title>{comicData.title}</S.Title>

        <S.BuyButton>Buy <HiArrowSmDown size={20} /></S.BuyButton>

        <S.Description>{comicData.description}</S.Description>
      </S.ComicContainer>
    </MainWrapper>
  )
}

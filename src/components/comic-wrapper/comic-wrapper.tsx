import { useContext } from 'react'
import { AppContext } from 'src/contexts/app-context'
import { ComicDataType } from 'comics'
import { HiArrowSmDown } from 'react-icons/hi'
import { MdOutlineStar } from 'react-icons/md'
import { Main } from 'src/styles'
import styled from 'styled-components/macro'
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

        <S.ComicType><strong>Type</strong>: Comic Book</S.ComicType>

        <S.Reviews>
          {[1, 2, 3, 4, 5].map((elem, index) => (
            <MdOutlineStar color="#fba744" size={20} key={index} />
          ))}
          (50)
        </S.Reviews>

        <S.BuyButton>Buy <HiArrowSmDown size={20} /></S.BuyButton>

        <S.Description>{comicData.description}</S.Description>
      </S.ComicContainer>
    </MainWrapper>
  )
}

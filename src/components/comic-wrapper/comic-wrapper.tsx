import { Main } from 'src/styles'
import { AppContext } from 'src/contexts/app-context'
import { useContext } from 'react'
import { ComicDataType } from 'comics'
import styled from 'styled-components'
import { HiArrowSmDown } from 'react-icons/hi'

type ComicDataProps = {
  comicData: ComicDataType
}

const MainWrapper = styled(Main)`
  padding: 1em;
`

const ComicContainer = styled.div`
  margin: 0 auto;
`

const ImageContainer = styled.div`
  position: relative;
  padding: 2em;
  max-width: 280px;
  margin: 0 auto;
`

const PriceWrapper = styled.div`
  position: absolute;
  top: 14%;
  left: .5em;
  padding: 10px;
  aspect-ratio: 1/1;
  display: flex;
  place-items: center;
  border-radius: 50%;
  background-color: #d91415;
  color: #fff;
  font-size: .6rem;

  h2 {
    margin: 0;
  }
`

const Image = styled.img`
  width: 100%;
  min-height: auto;
  border: 4px solid #070201;
`

const Title = styled.h1`
  color: #070201;
  font-size: 1.78rem;
  text-align: center;
  font-weight: 800;
`

const Description = styled.p`
  font-weight: 500;
`

const BuyButton = styled.button`
  background-color: #d91415;
  color: #fff;
  border: none;
  border-radius: 100px;
  text-transform: uppercase;
  width: 80%;
  max-width: 220px;
  margin: 4em auto;
  padding-left: 1.3em;
  padding-right: .8em;
  height: 43px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: .87rem;
  font-weight: 500;

  svg {
    margin-left: auto;
  }
`

export function ComicWrapper ({ comicData }: ComicDataProps) {
  const { headerHeight } = useContext(AppContext)

  return (
    <MainWrapper headerHeight={headerHeight}>
      <ComicContainer>
        <ImageContainer>
          <PriceWrapper>
            <h2>${comicData.price}</h2>
          </PriceWrapper>

          <Image src={comicData.thumbnail} alt={comicData.title} />
        </ImageContainer>

        <Title>{comicData.title}</Title>

        <BuyButton>Buy <HiArrowSmDown size={20} /></BuyButton>

        <Description>{comicData.description}</Description>
      </ComicContainer>
    </MainWrapper>
  )
}

import { useContext } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { AppContext } from 'src/contexts/app-context'
import { ComicDataType } from 'comics'

type ComicsProps = {
  comics: ComicDataType[]
}

type MainProps = {
  headerHeight: number
}

const SliderWrapper = styled(Slider)`
  overflow: hidden;
  margin-top: 4em;
  margin-bottom: 2em;

  div {
    outline: none;
  }

  .slick-prev {
    z-index: 10;
    position: absolute;
    width: 14vw;
    min-height: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  .slick-active.slick-current {
    transform: rotate(-10deg);
    transition: all 1s ease-in;

    > div {
      transform: translateY(15%);
    }

    img {
      width: 70%;
      max-width: 400px;
    }
  }

  .slick-active.slick-current + div + div {
    transform: rotate(10deg);
    transition: all 1s ease-in;

    > div {
      transform: translateY(15%);
    }

    img {
      width: 70%;
      max-width: 400px;
    }
  }

  .slick-active.slick-current + div {
    h1 {
      display: initial;
    }
  }
`

const Image = styled.img`
  border: 4px solid #070201;
`

const Comic = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  img {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }

  h1 {
    display: none;
  }
`

const Main = styled.main<MainProps>`${({ headerHeight }) => css`
  min-height: calc(100vh - ${headerHeight + 'px'});
  display: flex;
  align-items: center;
`}`

const NextBtnWrapper = styled.button`
  position: absolute;
  width: 14vw;
  min-height: 100%;
  right: 0;
  top: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`

const Title = styled.h1`
  color: #d91415;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`

const NextButton = ({ onClick }: any) => {
  return (
    <NextBtnWrapper onClick={onClick} />
  )
}

export function Comics ({ comics }: ComicsProps) {
  const { headerHeight } = useContext(AppContext)
  const router = useRouter()

  const settings = {
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1.67,
    speed: 1000,
    nextArrow: <NextButton />,
  }

  const handleComicClick = (comicId: string) => {
    router.push(`/comics/${comicId}`)
  }

  return (
    <Main headerHeight={headerHeight}>
      <SliderWrapper {...settings}>
        {comics.map((item) => (
          <Comic key={item.id} onClick={() => handleComicClick(item.id)}>
            <TitleWrapper>
              <Title>{item.title}</Title>
            </TitleWrapper>

            <Image src={item.thumbnail} alt={item.title} />
          </Comic>
        ))}
      </SliderWrapper>
    </Main>
  )
}

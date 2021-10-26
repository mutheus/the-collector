import { useContext } from 'react'
import styled, { css } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { AppContext } from 'src/contexts/app-context'

type ComicsType = {
  title: string
  id: number,
  description: string
  thumbnail: string
  price: number | undefined
}

type ComicsProps = {
  comics: ComicsType[]
}

type MainProps = {
  headerHeight: number
}

const SliderWrapper = styled(Slider)`
  overflow: hidden;
  margin: 4em 0;
  position: relative;

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
      transform: translateY(10%);
    }

    img {
      width: 70%;
    }
  }

  .slick-active.slick-current + div + div {
    transform: rotate(10deg);
    transition: all 1s ease-in;

    > div {
      transform: translateY(10%);
    }

    img {
      width: 70%;
    }
  }
`

const Image = styled.img`
  border: 4px solid #070201;
`

const Comic = styled.div`
  img {
    width: 80%;
    margin: 0 auto;
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

const NextButton = ({ onClick }: any) => {
  return (
    <NextBtnWrapper onClick={onClick} />
  )
}

export function Comics ({ comics }: ComicsProps) {
  const { headerHeight } = useContext(AppContext)

  const settings = {
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1.67,
    speed: 1000,
    nextArrow: <NextButton />,
  }

  return (
    <Main headerHeight={headerHeight}>
      <SliderWrapper {...settings}>
        {comics.map((item) => (
          <Comic key={item.id}>
            <Image src={item.thumbnail} alt={item.title} />
          </Comic>
        ))}
      </SliderWrapper>
    </Main>
  )
}

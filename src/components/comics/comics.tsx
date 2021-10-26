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

  div {
    outline: none;
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

export function Comics ({ comics }: ComicsProps) {
  const { headerHeight } = useContext(AppContext)

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1.67,
    speed: 500,
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

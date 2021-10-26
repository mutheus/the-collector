import { useContext } from 'react'
import { useRouter } from 'next/router'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppContext } from 'src/contexts/app-context'
import { ComicDataType } from 'comics'
import { Main } from 'src/styles'
import * as S from './comics-style'

type ComicsProps = {
  comics: ComicDataType[]
}

const NextButton = ({ onClick }: any) => {
  return (
    <S.NextBtnWrapper onClick={onClick} />
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
      <S.SliderWrapper {...settings}>
        {comics.map((item) => (
          <S.Comic key={item.id} onClick={() => handleComicClick(item.id)}>
            <S.TitleWrapper>
              <S.Title>{item.title}</S.Title>
            </S.TitleWrapper>

            <S.Image src={item.thumbnail} alt={item.title} />
          </S.Comic>
        ))}
      </S.SliderWrapper>
    </Main>
  )
}

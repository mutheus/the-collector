import { Fragment, useRef, useState } from 'react'
import styled from 'styled-components'

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

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto 0;
  position: relative;

  > div {
    min-width: 50vw;
    margin: 0 2vw;

    @media (min-width: 600px) {
      min-width: 40vw;
      margin: 0 4vw;
    }
  }
`

const Image = styled.img`
  width: 100%;
  border: 4px solid #070201;
`

const PrevButton = styled.div`
  height: 100%;
  width: 20vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`

const NextButton = styled.div`
  height: 100%;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`

const PrevComic = styled.div`
  img {
    width: 80%;
  }

  transform: rotate(-10deg);
`

const NextComic = styled.div`
  img {
    width: 80%;
    margin-left: auto;
  }

  display: flex;
  justify-content: end;
  transform: rotate(10deg);
`

export function Comics ({ comics }: ComicsProps) {
  const length = comics.length
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(length - 1)
  const [next, setNext] = useState(current + 1)
  const currentRef = useRef<HTMLImageElement>(null)

  const handlePrevBtn = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setPrevious(previous === 0 ? length - 1 : previous - 1)
    setNext(next === 0 ? length - 1 : next - 1)
  }

  const handleNextBtn = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setPrevious(previous === length - 1 ? 0 : previous + 1)
    setNext(next === length - 1 ? 0 : next + 1)
  }

  const previousComic = comics.map((item, index) => {
    if (index === previous) {
      return <Image key={item.id} src={item.thumbnail} alt={item.title} />
    }

    return null
  })

  const currentComic = comics.map((item, index) => {
    if (index === current) {
      return <Image ref={currentRef} key={item.id} src={item.thumbnail} alt={item.title} />
    }

    return null
  })

  const nextComic = comics.map((item, index) => {
    if (index === next) {
      return <Image key={item.id} src={item.thumbnail} alt={item.title} />
    }

    return null
  })

  return (
    <>
      <Slider>
        <PrevComic>
          {previousComic}
        </PrevComic>

        <div>
          <PrevButton onClick={handlePrevBtn} />

          {currentComic}

          <NextButton onClick={handleNextBtn} />
        </div>

        <NextComic>
          {nextComic}
        </NextComic>
      </Slider>
    </>
  )
}

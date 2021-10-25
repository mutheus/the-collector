import { useState } from 'react'
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
`

const Image = styled.img`
  width: 100%;
  max-width: 50vw;
  border: 4px solid #070201;
  margin: 0 2em;
`

export function Comics ({ comics }: ComicsProps) {
  const length = comics.length
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(length - 1)
  const [next, setNext] = useState(current + 1)

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
      return <Image key={item.id} src={item.thumbnail} alt={item.title} />
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
        {previousComic}

        {currentComic}

        {nextComic}
      </Slider>

      <button onClick={handlePrevBtn}>prev</button>
      <button onClick={handleNextBtn}>next</button>
    </>
  )
}

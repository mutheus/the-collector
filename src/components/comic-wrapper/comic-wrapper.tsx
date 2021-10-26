import { Main } from 'src/styles'
import { AppContext } from 'src/contexts/app-context'
import { useContext } from 'react'
import { ComicDataType } from 'comics'
import styled from 'styled-components'

type ComicDataProps = {
  comicData: ComicDataType
}

const Image = styled.img`
  width: 100%;
  min-height: auto;
  max-width: 280px;
  margin: 0 auto;
`

export function ComicWrapper ({ comicData }: ComicDataProps) {
  const { headerHeight } = useContext(AppContext)

  return (
    <Main headerHeight={headerHeight}>
      <Image src={comicData.thumbnail} alt={comicData.title} />
    </Main>
  )
}

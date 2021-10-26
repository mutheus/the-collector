import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { ComicDataType } from 'comics'
import { fetchData, changeData, filterData } from 'src/resources/utils'

type ComicPageProps = {
  comicData: ComicDataType
}

const Image = styled.img`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`

export default function ComicPage ({ comicData }: ComicPageProps) {
  return (
    <Image src={comicData.thumbnail} alt={comicData.title} />
  )
}

export const getStaticPaths = async () => {
  const data = await fetchData('comics', 'comics', 'issueNumber')

  const rawComicsData = changeData(data)

  const comics = filterData(rawComicsData)

  return {
    fallback: false,
    paths: comics.map(comic => ({ params: { comicId: comic.id } })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const comicId = params?.comicId.replace(/[^0-9].*/g, '')

  const data = await fetchData(`comics/${comicId}`)

  const rawComicsData = changeData(data)

  const comicData = rawComicsData.find(comic => params?.comicId === comic.id)

  return {
    props: {
      comicData,
    },
  }
}

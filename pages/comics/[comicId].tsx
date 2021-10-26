import { GetStaticProps } from 'next'
import { ComicDataType } from 'comics'
import { fetchData, changeData, filterData } from 'src/resources/utils'
import { ComicWrapper } from 'src/components/comic-wrapper'

type ComicPageProps = {
  comicData: ComicDataType
}

export default function ComicPage ({ comicData }: ComicPageProps) {
  return (
    <ComicWrapper comicData={comicData} />
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

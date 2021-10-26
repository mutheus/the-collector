import { GetStaticProps } from 'next'
import { api } from 'src/services/api'
import styled from 'styled-components'
import { ComicDataType, DataType } from 'comics'

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
  const { data }: DataType = await api.get('comics', {
    params: {
      ts: process.env.NEXT_PUBLIC_TIMESTAMP,
      apikey: process.env.NEXT_PUBLIC_API_KEY,
      hash: process.env.NEXT_PUBLIC_HASH,
      formatType: 'comic',
      orderBy: 'issueNumber',
    },
    proxy: {
      host: '192.168.43.1',
      port: 8080,
    },
  })

  const rawComicsData = data.data.results.map(elem => {
    const id = elem.id.toString() + '-' + elem.title.replace(/[^a-zA-Z0-9_]+/g, '-')

    return {
      id: id.substr(id.length - 1) === '-' ? id.slice(0, -1) : id,
      title: elem.title,
      description: elem.description,
      thumbnail: `${elem.thumbnail.path}.${elem.thumbnail.extension}`,
      price: elem.prices.length === 1 && elem.prices[0].price === 0
        ? Number((Math.random() * 9).toFixed(1) + '9')
        : elem.prices.find(item => item.price !== 0)?.price,
    }
  })

  const comics = rawComicsData.filter(item => !item.thumbnail.includes('not_available') && item.description !== null)

  return {
    fallback: false,
    paths: comics.map(comic => ({ params: { comicId: comic.id } })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const comicId = params?.comicId.replace(/[^0-9].*/g, '')

  const { data }: DataType = await api.get(`comics/${comicId}`, {
    params: {
      ts: process.env.NEXT_PUBLIC_TIMESTAMP,
      apikey: process.env.NEXT_PUBLIC_API_KEY,
      hash: process.env.NEXT_PUBLIC_HASH,
    },
    proxy: {
      host: '192.168.43.1',
      port: 8080,
    },
  })

  const rawComicsData = data.data.results.map(elem => {
    const id = elem.id.toString() + '-' + elem.title.replace(/[^a-zA-Z0-9_]+/g, '-')

    return {
      id: id.substr(id.length - 1) === '-' ? id.slice(0, -1) : id,
      title: elem.title,
      description: elem.description,
      thumbnail: `${elem.thumbnail.path}.${elem.thumbnail.extension}`,
      price: elem.prices.length === 1 && elem.prices[0].price === 0
        ? Number((Math.random() * 9).toFixed(1) + '9')
        : elem.prices.find(item => item.price !== 0)?.price,
    }
  })

  const comicData = rawComicsData.find(comic => params?.comicId === comic.id)

  return {
    props: {
      comicData,
    },
  }
}

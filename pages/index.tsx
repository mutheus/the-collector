import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { api } from 'src/services/api'

type ResultsType = {
  title: string
  id: number,
  description: string
  thumbnail: {
    extension: string
    path: string
  }
  prices: { price: number }[]
}

type DataType = {
  data: {
    data: {
      results: ResultsType[]
    }
  }
}

const Home = ({ comics }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(comics)

  return (
    <>
      <Head>
        <title>The Collector | Marvel comic books for a low price</title>
        <meta name="description" content="Access the greatest collection of Marvel comic books & expand your superhero comics collection" />
      </Head>

      <div>
        <h1>Hello, World!</h1>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
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
    return {
      id: elem.id,
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
    props: {
      comics,
    },
  }
}

export default Home

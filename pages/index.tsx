import { GetStaticProps } from 'next'
import Head from 'next/head'
import { api } from 'src/services/api'

type HomeProps = {
  comics: any
}

const Home = ({ comics }: HomeProps) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('comics', {
    params: {
      ts: process.env.NEXT_PUBLIC_TIMESTAMP,
      apikey: process.env.NEXT_PUBLIC_API_KEY,
      hash: process.env.NEXT_PUBLIC_HASH,
      limit: 5,
    },
    proxy: {
      host: '192.168.43.1',
      port: 8080,
    },
  })

  return {
    props: {
      comics: data,
    },
  }
}

export default Home

import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Comics } from 'src/components/comics'
import { changeData, fetchData, filterData } from 'src/resources/utils'

const Home = ({ comics }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>The Collector | Marvel comic books for a low price</title>
        <meta name="description" content="Access the greatest collection of Marvel comic books & expand your superhero comics collection" />
      </Head>

      <Comics comics={comics} />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetchData('comics', 'comics', 'issueNumber')

  const rawComicsData = changeData(data)

  const comics = filterData(rawComicsData)

  return {
    props: {
      comics,
    },
  }
}

export default Home

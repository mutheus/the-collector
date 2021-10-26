import { DataType, ResultsType, ComicDataType } from 'comics'
import { api } from 'src/services/api'

export async function fetchData (url: string, formatType?: string, orderBy?: string) {
  const { data }: DataType = await api.get(url, {
    params: {
      ts: process.env.NEXT_PUBLIC_TIMESTAMP,
      apikey: process.env.NEXT_PUBLIC_API_KEY,
      hash: process.env.NEXT_PUBLIC_HASH,
      formatType,
      orderBy,
    },
    proxy: {
      host: '192.168.43.1',
      port: 8080,
    },
  })

  return data
}

export type ChangeDataType = {
  data: {
    results: ResultsType[]
  }
}

export function changeData (data: ChangeDataType) {
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

  return rawComicsData
}

export function filterData (data: ComicDataType[]) {
  const comics = data.filter(item => !item.thumbnail.includes('not_available') && item.description !== null)

  return comics
}

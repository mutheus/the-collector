declare module 'comics' {
  export type ResultsType = {
    title: string
    id: string,
    description: string
    thumbnail: {
      extension: string
      path: string
    }
    prices: { price: number }[]
  }

  export type DataType = {
    data: {
      data: {
        results: ResultsType[]
      }
    }
  }

  export type ComicDataType = {
    title: string
    id: string,
    description: string
    thumbnail: string
    price: number | undefined
  }
}

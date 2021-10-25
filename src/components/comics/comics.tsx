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

export function Comics ({ comics }: ComicsProps) {
  return (
    <div></div>
  )
}

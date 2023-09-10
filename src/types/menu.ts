type TextAnswer = {
  type: 'text',
  content: string,
}

type TImage = {
  type: 'image',
  content: {
    url: string,
    text?: string
  }
}

export type TMenu = {
  title: string,
  answer: (TextAnswer | TImage)[],
  options: number[]
  redirect?: {
    origin: string,
    destination: string
  }
}
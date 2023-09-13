export type TextAnswer = {
  type: 'text',
  content: string,
}

export type ImageAnswer = {
  type: 'image',
  content: {
    url: string,
    text?: string
  }
}

export type TMenu = {
  title: string,
  answer: (TextAnswer | ImageAnswer)[],
  options: number[]
  redirect?: {
    origin: string,
    destination: string
  }
}
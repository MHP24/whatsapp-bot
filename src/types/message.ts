export type TMessage = {
  id: string,
  type: 'text' | 'interactive',
  senderId: string,
  content: string
}
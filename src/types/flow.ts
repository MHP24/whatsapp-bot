import { TSender } from './sender';


export type TFlowInput = {
  senderId: string,
  sender?: TSender,
  data: string
}

export type TFlowResponse = {
  hasToTransfer: boolean,
  destination: string | null,
  origin: string | null
}
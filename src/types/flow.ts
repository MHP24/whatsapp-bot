import { TSender } from './sender';

type TFlows = 'info' | 'contact'

export type TFlowInput = {
  senderId: string,
  sender?: TSender,
  data: string
}

export type TFlowResponse = {
  hasToTransfer: boolean,
  destination: string | null,
  origin: TFlows | null
}
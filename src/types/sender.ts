import { TContactFlowData } from '.';

export type TSender = {
  senderId: string,
  currentFlow: string,
  flowData?: TContactFlowData
}
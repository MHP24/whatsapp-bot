import { TContactFlowData } from '.';


export type TSender = {
  senderId: string,
  currentFlow: string,
  chatTimeout?: NodeJS.Timeout,
  flowData?: TContactFlowData
}
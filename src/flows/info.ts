import { senders } from '../controllers';
import { sendMenu } from '../lib/messages';
import { MAIN_MENU } from '../mocks';
import { TFlowInput, TFlowResponse } from '../types';


export const handleInfoFlow = async ({ senderId, sender, data }: TFlowInput): Promise<TFlowResponse> => {
  if (!sender) {
    senders.add(senderId, {
      currentFlow: 'info',
      senderId
    });

    await sendMenu(senderId, Object.keys(MAIN_MENU));

  }

  return {
    hasToTransfer: false,
    destination: null,
    origin: null,
  };
};
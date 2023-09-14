import { senders } from '../controllers';
import { sendTextMessage } from '../lib/messages';
import { sysMessages } from '../mocks';
import { TFlowInput, TFlowResponse } from '../types';

const defaultReturn = {
  hasToTransfer: false,
  destination: null,
  origin: null,
};

export const handleExitFlow = async (
  { senderId, sender, data }: TFlowInput
): Promise<TFlowResponse> => {

  console.log({ senderId, sender, data });

  if (!sender) {
    senders.add(senderId, {
      senderId,
      currentFlow: 'exit'
    });

    await sendTextMessage(senderId, '¿Te gustaría ponerte en contacto con Miguel?');
    // no delete and save phoneNumber + date
    return defaultReturn;


    //yes transfer

  }

  const regex = /^(si|no)/gi;
  if (!data.match(regex)) {
    await sendTextMessage(senderId, sysMessages.invalidYesNo);
    return defaultReturn;
  }



  return defaultReturn;
};
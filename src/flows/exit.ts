import { senders } from '../controllers';
import { sendOptions, sendTextMessage } from '../lib/messages';
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

    await sendOptions(
      senderId,
      ['Si', 'No'],
      '¿Te gustaría ponerte en contacto con Miguel?'
    );
    return defaultReturn;
  }

  const isValidAnswer = data.toLowerCase().match(/^(si|no)$/g);

  if (!isValidAnswer) {
    await sendTextMessage(senderId, sysMessages.invalidYesNo);
    return defaultReturn;
  }

  if (isValidAnswer[0] === 'si') {
    return {
      hasToTransfer: true,
      destination: 'contact',
      origin: 'exit'
    };
  }

  //TODO: Remove user, bye msg and notify user interacted

  return defaultReturn;
};
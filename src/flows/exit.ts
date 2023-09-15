import { senders } from '../controllers';
import { notify } from '../lib';
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

  senders.drop(senderId);
  await Promise.all([
    sendTextMessage(senderId, sysMessages.bye),
    notify({ senderId, })
  ]);


  return defaultReturn;
};
import { senders } from '../controllers';
import { sendMenu, sendMessages } from '../lib/messages';
import { MAIN_MENU } from '../mocks';
import { TFlowInput, TFlowResponse } from '../types';

const defaultReturn = {
  hasToTransfer: false,
  destination: null,
  origin: null,
};

export const handleInfoFlow = async (
  { senderId, sender, data }: TFlowInput
): Promise<TFlowResponse> => {

  if (!sender) {
    senders.add(senderId, {
      currentFlow: 'info',
      senderId
    });

    await sendMenu(senderId, Object.keys(MAIN_MENU));

    return defaultReturn;
  }

  const menuOption = MAIN_MENU[+data];

  if (menuOption) {
    const { options, answer, redirect } = menuOption;
    await sendMessages(senderId, answer);

    !redirect && (
      await sendMenu(senderId, options)
    );

    return !redirect ? defaultReturn
      : ({
        hasToTransfer: true,
        destination: redirect.destination,
        origin: redirect.origin
      });
  }

  await sendMenu(senderId, []);

  return defaultReturn;
};
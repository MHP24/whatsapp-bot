import { senders } from '../controllers';
import { sendMenu, sendTextMessage } from '../lib/messages';
import { MAIN_MENU } from '../mocks';
import { TFlowInput, TFlowResponse } from '../types';


export const handleInfoFlow = async (
  { senderId, sender, data }: TFlowInput
): Promise<TFlowResponse> => {
  if (!sender) {
    senders.add(senderId, {
      currentFlow: 'info',
      senderId
    });

    await sendMenu(senderId, Object.keys(MAIN_MENU));
  }

  const option = MAIN_MENU[+data];
  console.log({ option });


  //TODO: Fix text whitespaces
  if (option) {
    for (const message of option.answer) {
      message.type === 'text' && (
        await sendTextMessage(senderId, message.content)
      );
    }

    !option.redirect && (
      await sendMenu(senderId, option.options)
    );

  }

  return {
    hasToTransfer: false,
    destination: null,
    origin: null,
  };
};
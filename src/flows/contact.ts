import { senders } from '../controllers';
import { notify } from '../lib';
import { sendTextMessage } from '../lib/messages';
import { sysMessages } from '../mocks';
import { TFlowInput, TFlowResponse } from '../types';

const defaultReturn = {
  hasToTransfer: false,
  destination: null,
  origin: null,
};

const steps = [
  {
    name: 'email',
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: sysMessages.contact1
  },
  {
    name: 'asunto',
    regex: /.*/,
    message: sysMessages.contact2
  }
];

export const handleContactFlow = async (
  { senderId, sender, data }: TFlowInput
): Promise<TFlowResponse> => {

  if (!sender) {
    senders.add(senderId, {
      senderId,
      currentFlow: 'contact',
      flowData: {
        current: 0,
        answers: []
      }
    });

    await sendTextMessage(senderId, `${steps[0].message}`);
    return defaultReturn;
  }

  if (!sender.flowData) return defaultReturn;

  const { current, answers } = sender.flowData;
  const isValidAnswer = data.match(steps[current].regex);

  if (isValidAnswer) {
    const nextStep = current + Number(steps.length > current);

    senders.update(senderId, {
      ...sender,
      flowData: {
        current: nextStep,
        answers: [...answers, data]
      }
    });


    if (steps[nextStep]) {
      await sendTextMessage(senderId, steps[nextStep].message);
      return defaultReturn;
    }

    const { flowData } = senders.get(senderId)!;
    const [email, subject] = flowData!.answers;

    senders.drop(senderId);

    await Promise.all([
      sendTextMessage(senderId, sysMessages.thanksContact),
      notify({ senderId, email, subject })
    ]);

    return defaultReturn;
  }

  await sendTextMessage(
    senderId,
    `Por favor, ingresa un ${steps[current].name} válido`
  );

  return defaultReturn;
};
import { Request } from 'express';
import { validateEntry } from '../lib/messages';
import { TAdapterReply, TAdapterText, TMessage } from '../types';


export const adaptWhatsappMesage = (req: Request): TMessage | null => {
  try {
    const isValidMessage = validateEntry(req);
    if (!isValidMessage) return null;

    const baseBody = req.body.entry[0].changes[0].value;
    const { type, from, ...rest } = baseBody.messages[0];

    const handleMessage: Record<string, any> = {
      'text': extractText,
      'interactive': extractInteraction
    };

    const handlingFn = handleMessage[type];

    return {
      type,
      senderId: from,
      data: handlingFn ? handlingFn(rest) : null
    };

  } catch (error) {
    console.error(error);
    return null;
  }
};

const extractText = (data: TAdapterText) => data.text.body;

const extractInteraction = (data: TAdapterReply) => {
  const { type, ...interaction } = data['interactive'];
  return interaction[type].id;
};
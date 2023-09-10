import { Request } from 'express';
import { validateEntry } from '../lib/messages';

export const adaptWhatsappMesage = (req: Request) => {
  try {
    const isValidMessage = validateEntry(req);
    if (!isValidMessage) return null;

    const baseBody = req.body.entry[0].changes[0].value;
    const { id, type, from, ...rest } = baseBody.messages[0];

    console.log({ rest: rest[type] });
    console.log({ id, type, from });


    return {
      id, type, from
    };

  } catch (error) {
    console.error(error);
    return null;
  }
};
import { Request } from 'express';
import { http } from '../adapters';
import { appConfig } from '../config';

export const validateEntry = (req: Request) => {
  const { entry } = req.body;
  return (
    entry && entry[0]?.changes &&
    entry[0]?.changes[0]?.value?.messages
  );
};

export const sendTextMessage = async (senderId: string, message: string) => {
  if (!message.trim().length) return;

  try {
    await http.post(
      `https://graph.facebook.com/${appConfig.whatsappVersion}/` +
      `${appConfig.whatsappAccountId}/messages?access_token=${appConfig.whatsappToken}`,
      {
        messaging_product: 'whatsapp',
        to: senderId,
        text: {
          body: message
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};
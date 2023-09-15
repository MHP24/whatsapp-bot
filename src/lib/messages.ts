import { Request } from 'express';
import { http } from '../adapters';
import { appConfig } from '../config';
import { MAIN_MENU, sysMessages } from '../mocks';
import { ImageAnswer, TextAnswer } from '../types';

const BASE_URL = `https://graph.facebook.com/${appConfig.whatsappVersion}/` +
  `${appConfig.whatsappAccountId}/messages?access_token=${appConfig.whatsappToken}`;

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
    await http.post(BASE_URL, {
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


export const sendImage = async (senderId: string, url: string, caption: string = '') => {
  try {
    await http.post(BASE_URL, {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: senderId,
      type: 'image',
      image: {
        link: url,
        caption: caption
      }
    });
  } catch (error) {
    console.error(error);
  }
};


export const sendMessages = async (
  senderId: string,
  messages: (TextAnswer | ImageAnswer)[]
) => {


  for (const message of messages) {
    message.type === 'text' ? (
      await sendTextMessage(senderId, message.content)
    ) :
      await sendImage(senderId, message.content.url, message.content.caption);
  }
};


export const sendMenu = async (senderId: string, options: (string | number)[]) => {
  try {

    const isInvalidOption = !options.length;
    const isNewMenu = options.length === Object.keys(MAIN_MENU).length;

    const textHeader = isInvalidOption
      ? sysMessages.invalidHeader
      : isNewMenu
        ? sysMessages.welcomeHeader
        : sysMessages.continueHeader;

    const textBody = isInvalidOption
      ? sysMessages.invalidBody
      : isNewMenu
        ? sysMessages.welcomeBody
        : sysMessages.continueBody;

    await http.post(BASE_URL, {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: senderId,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: {
          type: 'text',
          text: textHeader
        },
        body: {
          text: textBody
        },
        footer: {
          text: 'Opciones...'
        },
        action: {
          button: 'Abrir menú',
          sections: [
            {
              title: '',
              rows: (options.length ? options : Object.keys(MAIN_MENU))
                .map(option => (
                  {
                    id: `${option}`,
                    title: MAIN_MENU[+option].title
                  }
                ))
            }
          ]
        }
      }
    });

  } catch (error) {
    console.error(error);
  }
};



export const sendOptions = async (
  senderId: string, options: string[], title: string
) => {
  try {
    await http.post(BASE_URL, {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: senderId,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: {
          text: title
        },
        action: {
          buttons: options.map(option => (
            {
              type: 'reply',
              reply: {
                id: option,
                title: option
              }
            }
          ))
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};
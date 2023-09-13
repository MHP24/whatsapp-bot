import { Request } from 'express';
import { http } from '../adapters';
import { appConfig } from '../config';
import { MAIN_MENU, sysMessages } from '../mocks';

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


export const sendMenu = async (senderId: string, options: (string | number)[]) => {
  if (!options.length) return;

  try {
    const isNewMenu = options.length === Object.keys(MAIN_MENU).length;

    await http.post(BASE_URL, {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: senderId,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: {
          type: 'text',
          text:
            isNewMenu ? sysMessages.welcomeHeader
              : sysMessages.continueHeader
        },
        body: {
          text: isNewMenu ? sysMessages.welcomeBody
            : sysMessages.continueBody
        },
        footer: {
          text: 'Opciones...'
        },
        action: {
          button: 'Abrir menú',
          sections: [
            {
              title: '',
              rows: options.map(option => (
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
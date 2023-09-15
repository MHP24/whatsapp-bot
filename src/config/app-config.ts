import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  webhookToken: process.env.WEBHOOK_TOKEN,
  whatsappToken: process.env.WHATSAPP_TOKEN,
  whatsappVersion: process.env.WHATSAPP_VERSION,
  whatsappAccountId: process.env.WHATSAPP_ACCOUNT_ID,
  whatsappNotifyNumber: process.env.WHATSAPP_NOTIFY_NUMBER,
  chatTimeout: process.env.CHAT_TIMEOUT,
  port: process.env.APP_PORT,
  defaultFlow: process.env.DEFAULT_FLOW
};
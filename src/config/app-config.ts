import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  webhookToken: process.env.WEBHOOK_TOKEN,
  whatsappToken: process.env.WHATSAPP_TOKEN,
  whatsappVersion: process.env.WHATSAPP_VERSION,
  whatsappAccountId: process.env.WHATSAPP_ACCOUNT_ID,
  port: process.env.APP_PORT

};
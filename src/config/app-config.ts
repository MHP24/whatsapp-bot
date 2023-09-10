import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  webhookToken: process.env.WEBHOOK_TOKEN,
  port: process.env.APP_PORT
};
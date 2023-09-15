import dotenv from 'dotenv';

dotenv.config();

export const mailerConfig = {
  service: process.env.EMAIL_SERVICE,
  template: process.env.EMAIL_TEMPLATE,
  publicKey: process.env.EMAIL_PUBLIC_KEY,
  privateKey: process.env.EMAIL_PRIVATE_KEY,
};
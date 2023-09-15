import dotenv from 'dotenv';

dotenv.config();

export const smtpConfig = {
  emailFrom: process.env.SMTP_EMAIL_FROM,
  emailTo: process.env.SMTP_EMAIL_TO,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT
};
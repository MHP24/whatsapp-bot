import express from 'express';
import { webhookRouter } from './routes';

export const app = express();
app.use(express.json());
app.use('/v1/webhook/whatsapp', webhookRouter);
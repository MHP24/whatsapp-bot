import { Request, Response } from 'express';
import { appConfig } from '../config';

export const validateWebhook = (req: Request, res: Response) => {
  const { query } = req;
  const mode = query['hub.mode'];
  const token = query['hub.verify_token'];
  return (
    mode && token && mode === 'subscribe'
      && token === appConfig.webhookToken ?
      res.status(200).send(query['hub.challenge'])
      : res.status(403)
  );
};
import { Router } from 'express';
import { validateWebhook } from '../controllers';
import { handleGateway } from '../flows';

export const webhookRouter = Router();

webhookRouter.get('/', validateWebhook);
webhookRouter.post('/', handleGateway);
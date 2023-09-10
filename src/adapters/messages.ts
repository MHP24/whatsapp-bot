import { Request } from 'express';

export const adaptWhatsappMesage = (req: Request) => {
  console.log({ body: req.body });
};
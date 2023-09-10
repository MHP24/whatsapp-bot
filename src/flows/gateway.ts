import { Request, Response } from 'express';
import { adaptWhatsappMesage } from '../adapters';

export const handleGateway = (req: Request, res: Response) => {
  try {

    adaptWhatsappMesage(req);

    return res.status(200).json({
      status: 'Message processed successfully'
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal error'
    });
  }
};
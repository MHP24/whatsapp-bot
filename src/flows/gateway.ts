import { Request, Response } from 'express';
import { adaptWhatsappMesage } from '../adapters';
import { sysMessages } from '../mocks';
import { sendTextMessage } from '../lib/messages';

export const handleGateway = async (req: Request, res: Response) => {
  try {
    const messageData = adaptWhatsappMesage(req);
    if (!messageData) return res.status(400).json({
      error: 'Missing senderId and message data'
    });

    const { senderId, data } = messageData;

    if (!data) {
      await sendTextMessage(senderId, sysMessages.invalid);
      return res.status(400).json({
        error: 'Unsupported message type'
      });
    }


    return res.status(200).json({
      status: 'Message processed successfully'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal error'
    });
  }
};
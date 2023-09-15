import { Request, Response } from 'express';
import { adaptWhatsappMesage } from '../adapters';
import { sysMessages } from '../mocks';
import { sendTextMessage } from '../lib/messages';
import { senders } from '../controllers';
import { handleContactFlow, handleExitFlow, handleInfoFlow } from '.';
import { appConfig } from '../config';
import { TFlowInput, TFlowResponse } from '../types';

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

    console.log('[Message]', `${senderId} - ${data}`);

    const flows: Record<string, (data: TFlowInput) => Promise<TFlowResponse>> = {
      'info': handleInfoFlow,
      'contact': handleContactFlow,
      'exit': handleExitFlow
    };

    const sender = senders.get(senderId);
    senders.refresh(senderId);

    const {
      hasToTransfer,
      destination,
      origin
    } = await flows[sender?.currentFlow ?? appConfig.defaultFlow!](
      { senderId, sender, data }
    );

    if (hasToTransfer) {
      console.log('[Transfer]', `${senderId} - from: ${origin} to: ${destination}`);

      flows[destination!]({
        senderId,
        sender: undefined,
        data
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
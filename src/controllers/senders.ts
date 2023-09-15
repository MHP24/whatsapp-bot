import { appConfig } from '../config';
import { TSender } from '../types';

const senders = new Map<string, TSender>();

export const get = (senderId: string) => senders.get(senderId);

export const add = (senderId: string, data: TSender) => {
  const currentSender = get(senderId);
  if (currentSender) {
    clearTimeout(currentSender.chatTimeout);
    drop(senderId);
  }

  senders.set(senderId, {
    ...data
  });
  refresh(senderId);
};

export const update = (senderId: string, data: Omit<TSender, 'senderId'>) => {
  const currentSenderData = senders.get(senderId);
  if (currentSenderData) {
    senders.set(senderId, {
      ...currentSenderData,
      ...data
    });
  }
};

export const drop = (senderId: string) => {
  clearInterval(get(senderId)?.chatTimeout);
  senders.delete(senderId);
};

export const refresh = (senderId: string) => {
  const sender = get(senderId);
  if (sender) {
    const timeout = sender.chatTimeout;
    clearTimeout(timeout);

    update(senderId, {
      ...sender,
      chatTimeout: setTimeout(() => {
        drop(senderId);
        console.log('[Timeout]', senderId);
      }, Number(appConfig.chatTimeout ?? 300) * 1000)
    });
  }
};
import { TSender } from '../types';

const senders = new Map<string, TSender>();

export const get = (senderId: string) => senders.get(senderId);

export const add = (senderId: string, data: TSender) => senders.set(senderId, data);

export const update = (senderId: string, data: Omit<TSender, 'senderId'>) => {
  const currentSenderData = senders.get(senderId);
  if (currentSenderData) {
    senders.set(senderId, {
      ...currentSenderData,
      ...data
    });
  }
};

export const drop = (senderId: string) => senders.delete(senderId);
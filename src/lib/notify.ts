import { appConfig } from '../config';
import { sendTextMessage } from './messages';

type TNotify = {
  senderId: string,
  email?: string,
  subject?: string
}

export const notify = async (
  { senderId, email = 'no-email', subject = 'no-subject' }: TNotify
) => {
  try {
    console.log('[Contact]', { senderId, email, subject });
    await sendTextMessage(
      appConfig.whatsappNotifyNumber!,
      `📲 *${senderId}* 📲\n\nNew contact\n\n*Email:* ${email}\n*Subject:* ${subject}`
    );
  } catch (error) {
    console.error({ error });
  }
};
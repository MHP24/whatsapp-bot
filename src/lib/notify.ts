import { mailerConfig } from '../config';
import emailjs from '@emailjs/nodejs';

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

    await emailjs.send(mailerConfig.service!, mailerConfig.template!, {
      phone: senderId,
      message: `Email: ${email}\nSubject: ${subject}`
    }, {
      publicKey: mailerConfig.publicKey!,
      privateKey: mailerConfig.privateKey,
    });

  } catch (error) {
    console.error({ error });
  }
};
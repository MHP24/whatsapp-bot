import { smtpConfig } from '../config';
import { createTransport } from 'nodemailer';

type TNotify = {
  senderId: string,
  email?: string,
  subject?: string
}

const transport = createTransport({
  host: smtpConfig.host,
  port: Number(smtpConfig.port),
  secure: false,
  auth: {
    user: smtpConfig.emailFrom,
    pass: smtpConfig.password
  }
});


export const notify = async (
  { senderId, email = 'no-email', subject = 'no-subject' }: TNotify
) => {
  try {
    console.log('[Contact]', { senderId, email, subject });

    const mailOptions = {
      from: smtpConfig.emailFrom,
      to: smtpConfig.emailTo,
      subject: `WhatsApp assistant - contact #${senderId}`,
      text: `📲  ${senderId} 📲\n\nNew contact\n\nEmail: ${email}\nSubject: ${subject}`
    };

    await transport.sendMail(mailOptions);

  } catch (error) {
    console.error({ error });
  }
};
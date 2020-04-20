import NotifierRepository from '../core/repositories/notifier.repository';
import Ticket from '../core/entities/Ticket';
import nodemailer from 'nodemailer';

class EmailNotifier implements NotifierRepository {
  public notify(ticket: Ticket, email: string): void {
    const mailer = this.getMailer();
    const mailOptions = {
      from: '"Geekshub Bus 🚍"',
      to: email,
      subject: `Tu billete para ${ticket.tripName}`,
      text: 'Tu billete!!',
    };
    mailer.sendMail(mailOptions);
  }

  private getMailer() {
    return nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
}

export default EmailNotifier;

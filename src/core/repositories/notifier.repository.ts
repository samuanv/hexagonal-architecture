import Ticket from '../entities/Ticket';

interface NotifierRepository {
  notify(ticket: Ticket, email: string): Promise<any>;
}

export default NotifierRepository;
